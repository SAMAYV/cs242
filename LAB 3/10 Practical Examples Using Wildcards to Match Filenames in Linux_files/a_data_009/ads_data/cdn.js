window.__adrta_cb__(function(e){var f={trueTime:e[0],siphon:1&e[1],markup:2&e[1],isDesktop:4&e[1],instanceId:e[2],cb:e[3],serverIp:e[4],scriptVersion:e[5]},i="22.30";f.scriptVersion.substring(0,4);window.__adrta__aait||(__adrta__aait=""),window.__adrta__aasi||(__adrta__aasi=""),window.__adrta__aast||(__adrta__aast=""),window.__adrta__aavi||(__adrta__aavi=""),window.__adrta__aavt||(__adrta__aavt=""),window.__adrta__aadb||(__adrta__aadb=""),window.__adrta__aasm||(__adrta__aasm=0);var t=/https?:\/\/\w.*[\w]/,n=/(\w+):\/{2}([^\/:]+)(?:\:(\d+))?(\/(?:[^?]+\/)?)?([^\?#]+)?(?:\?([^#]*))?(\#.*)?$/,a=/(?:\?([^#]*))/,r=/(http)?(s)?(:)?\/\/(cdn|js|q|testbed).(adrta|rta247|pixalate).(com|net)\/(script\/|s\/[a-zA-Z]*\/)?(p|r|pnf).js(\?|#).*/,o="__aadb",d="__aaav",l="__aaas",s="__aaah",m="__aaam",u="__aaph",c="__aapw",h="__aapc",v="__aap1",_="__aap2",g="__aap3",p="__aap4",b="__aap5",w="__aaat",y="__aaae",C=[15e3,15e3,3e4,3e4,6e4,6e4],N=242500,E=(new Date).getTimezoneOffset(),I=navigator.userAgent,M=-1<I.indexOf("Opera Mini"),S=-1<I.indexOf("MSIE"),V=!window.ActiveXObject&&"ActiveXObject"in window,k=(I.toLowerCase().indexOf("firefox"),!!I.match(/safari/i)&&!I.match(/chrome|crios/i)&&void 0!==document.body.style.webkitFilter&&window.chrome,"undefined"!=typeof mraid?mraid:window.mraid||document.mraid),T=[88,31,120,20,120,60,120,90,120,240,120,600,125,125,160,600,168,28,168,42,180,150,192,53,200,200,216,36,216,54,234,60,240,400,250,250,250,970,300,50,300,75,300,100,300,150,300,250,300,600,300,1050,320,50,320,100,320,480,336,280,400,300,468,60,480,320,550,480,640,480,700,500,720,300,728,90,768,1024,850,30,950,90,970,66,970,90,970,250,1024,768],D=0,O=!1,x=0,L=.5,R=[],A=!1,H=!1,z={},W=null,F=null,B=null,j=null,P=window.location.protocol;function G(){return(new Date).getTime()}function q(e){if(e&&e.tagName)return e.tagName.toLowerCase()}function U(e){for(;e&&(e=e.nextSibling)&&1!=e.nodeType;);return e}0!=P.indexOf("http")&&(P="http:");var $=null;if(!$){D=1;for(var X=document.scripts,Y=[],J=0;J<X.length;++J)Y[J]=X[J];$=Y[Y.length-1];for(var K=Y.length-1;0<=K;--K){var Z=Y[K];if(Z&&Z.src&&r.test(Z.src)&&/\bcb=([^#]*)?/.exec(Z.src)[1]===f.cb){$=Z,D=0;break}}}var Q=$.src.substring($.src.indexOf("#")+1).replace(/%%/g,"%25%25").split(";"),ee=Q.shift();0!==ee.length&&-1==ee.indexOf("=")&&-1!==$.src.indexOf("#")||(ee="px");for(J=0;J<Q.length;J++){var te=Q[J];t.test(te)&&(te=te.replace(n,"$1://$2$4$5")),-1<(Q[J]=te).indexOf("blocked")&&(O=!0),-1<te.indexOf("vwu=")&&(W=decodeURIComponent(Q.splice(J--,1)[0].split("=")[1])),-1<te.indexOf("kv2=")&&R.push(Q.splice(J--,1)),-1<te.indexOf("divid=")&&(F=te.split("=")[1])}var ne="__aaci="+ee;0<Q.length&&(ne+="&"+Q.join("&"));var ie=ne.indexOf("&__aa__=");-1<ie&&(ne=ne.substring(0,ie)),__adrta__aadb=f.markup||__adrta__aadb||-1<("&"+ne+"&").indexOf("&debug=true&");var ae=!0,re=0,oe="",de="",le=window,se=null,ue=window.location.ancestorOrigins;try{var ce=window;for(J=0;J<16;J++){ae=!0;try{"undefined"==(oe=ce.location.href.replace(a,"").substring(0,511))&&(oe=ce.location.href.substring(0,511)),"undefined"==(de=ce.document.referrer.replace(a,"").substring(0,511))&&(de=ce.document.referrer.substring(0,511)),le=ce}catch(e){ue&&0<ue.length&&(de=ue[ue.length-1]),ae=!1}if(ce==window.top)break;ce=ce.parent,re+=1}}catch(e){ae=!1,ue&&0<ue.length&&(de=ue[ue.length-1])}ue&&0<ue.length&&(se=ue[ue.length-1]);var fe=!1,me=document.hasFocus&&document.hasFocus()||le.document.hasFocus&&le.document.hasFocus(),he=!1,ve=!1,_e=!1,ge=0;function pe(e){me=e}function be(){var e=me;return ae&&f.isDesktop||(e=me||!he),e}if(ae){var we=null;S?(we=le.document.onfocusin,le.document.onfocusin=function(){if(pe(!0),we)try{we()}catch(e){}}):(we=le.onfocus,le.onfocus=function(){pe(!0),we&&we()});var ye=null,Ce=null;S?(ye=le.document.onfocusout,le.document.onfocusout=function(){if(Ce!=le.document.activeElement)Ce=le.document.activeElement;else if(pe(!1),ye)try{ye()}catch(e){}}):(ye=le.onblur,le.onblur=function(){pe(!1),ye&&ye()})}var Ne=null;function Ee(){try{if(L=f.isDesktop&&N<=Ae*He?.3:.5,null!=Ne&&Ne.disconnect(),Ne=new IntersectionObserver(ke,{threshold:[L]})){A=!0;var e=xe;9==xe.nodeType&&(e=xe.body),Ne.observe(e)}}catch(e){}}var Ie={};function Me(e,t){delete e.visibleTimeout,ke(t.takeRecords()),Ie="isVisible"in e&&be()&&e.isVisible&&!ve?(delete e.isVisible,it=!0,z.observerAPI=1,t.unobserve(e),{}):{e:e,o:t}}var Se,Ve,ke=function(e){e.forEach(function(e){H=!0;var t=e.target;t.isVisible=function(e,t){return t.width*t.height/(e.width*e.height)>=L}(e.boundingClientRect,e.intersectionRect),"isVisible"in t&&t.isVisible?t.visibleTimeout=setTimeout(Me,1e3,t,Ne):"visibleTimeout"in t&&(clearTimeout(t.visibleTimeout),delete t.visibleTimeout)})},Te=0,De=0,Oe=null,xe=null,Le=!1,Re=!1,Ae=0,He=0,ze=0,We=G(),Fe=0,Be=0,je=0,Pe=function(e,t){var d={rootEl:e,explicitId:t,debugCode:0,allCandidates:[],bestCandidates:[],adSizeCandidates:[],parserElement:document.createElement("a"),getNearestAdSize:function(e){for(var t={width:-1,height:-1,originalWidth:-1,originalHeight:-1,fitness:999},n=0;n<T.length;n+=2){var i=T[n],a=T[n+1],r=e.x-i,o=e.y-a;if(!(r<0||o<0)){var d=r+o;if(d<=15&&d<t.fitness&&(t.fitness=d,t.width=i,t.height=a,t.originalWidth=e.x,t.originalHeight=e.y,0==d))break}}return 15<t.fitness&&(t.fitness=-1),t},getElementDim:function(e,t){var n=t.toLowerCase(),i=e.getAttribute(n);if(i)return parseInt(i);var a=e.style&&e.style[n];return a&&-1==a.indexOf("%")?parseInt(a):e["offset"+t]},findApproximatelyAdSizedElements:function(e){if(null!=e){if(1===e.nodeType){var t=q(e);if("script"===t||"style"===t||"noscript"===t)return;var n={x:d.getElementDim(e,"Width"),y:d.getElementDim(e,"Height")},i=d.getNearestAdSize(n);-1<i.fitness&&d.adSizeCandidates.push({el:e,bestFit:i})}else if(9!==e.nodeType)return;var a;if(null!=(a=9===e.nodeType?e.body:e.firstChild))for(1!=a.nodeType&&(a=U(a));a;)d.findApproximatelyAdSizedElements(a),a=U(a)}},findViableElement:function(e){return null==e?null:e.ownerDocument.defaultView!=window.top?e.ownerDocument:null},findAd:function(){if(d.explicitId){var e=document.getElementById(d.explicitId);if(e){var t=e.offsetWidth;return{el:e,bestFitEl:e,size:{width:t,height:e.offsetHeight,originalWidth:t,originalHeight:t,fitness:-1},debugCode:5}}}d.adSizeCandidates=[],d.findApproximatelyAdSizedElements(d.rootEl);for(var n,i,a=999,r=0;r<d.adSizeCandidates.length;r++){var o=d.adSizeCandidates[r];if(o.bestFit.fitness<a&&(a=o.bestFit.fitness,n=o.bestFit,i=o.el,0===o.bestFit.fitness))break}return adEl=d.findViableElement(i),null==adEl&&(adEl=i),null==adEl?d.debugCode=2:d.debugCode=4,{el:adEl,bestFitEl:i,size:n,debugCode:d.debugCode}}};return d};function Ge(e,t,n,i){Le=!0,ze=G()-We,Oe=e,xe=t,Ae=n,He=i,Ee(),function(){var e=function(){De=G()},t=function(){0!=De&&(Te+=G()-De,De=0)};xe.addEventListener?(xe.addEventListener("mouseover",e,!1),xe.addEventListener("mouseout",t,!1)):xe.attachEvent&&(xe.attachEvent("mouseover",e),xe.attachEvent("mouseout",t))}()}if(-1===["ftvf","tht","ainf"].indexOf(ee)){var qe=$.ownerDocument.defaultView!==window.top,Ue=(Se=Pe(qe?$.ownerDocument:$.parentNode,F)).findAd();Ue.el&&Ge(Ue.el,Ue.bestFitEl,Ue.size.width,Ue.size.height),0!=(Ve=Ue.debugCode)&&(D=Ve)}var $e=function(e,t){var l=0,d=1,s=2,o={rid:Math.floor(1e3*Math.random()),el:e,cb:t,parent:null,allNodes:[],listeners:[],rootVNode:null,containerTargetId:null,iframe:null,targetWindow:null,selfInsideIframe:window.top!==window,targetInIframe:!1,headObserver:null,documentObserver:null,selfObserver:null,failTimeout:null,surface:0,rendered:!1,torndown:!1,encounteredCrossDomainIframe:!1,children:[]};function u(e,t,n){if(null==e)return null;if(null==t)return null;var u={ren:e,el:t,parent:n,visibilityMode:l,canHaveChildren:!0,hasCharacterData:!1,isContainerNode:!1,watching:!1,children:[],reasonCode:0,awaitingBackgroundImageLoad:!1,backgroundImageLoaded:!1,isRendered:function(){return u.visibilityMode===s},isDetached:function(){for(var e=u.el;e.parentNode;)e=e.parentNode;return!e.body},attach:function(e){if(null==e)throw"parent is null";u.parent&&u.detach(),u.parent=e,u.parent.children.push(u),u.update(!0,!0),u.isRendered()||u.watch()},detach:function(){if(u.parent){var e=u.parent.children.indexOf(u);-1<e&&u.parent.children.splice(e,1)}u.parent=null,u.unwatch()},init:function(){u.update(),u.isRendered()||u.watch()},update:function(e,t){if(t&&u.parent&&u.parent.visibilityMode===l&&u.parent.update(!1,!0),u.parent&&u.parent.visibilityMode===l)return u.visibilityMode=l,!1;if(u.updateOwnVisibility(),u.isRendered())return u.ren.success(u,u.reasonCode),!0;if(e&&u.canHaveChildren)for(var n=0;n<u.children.length;n++){if(u.children[n].update(!0,!1))return!0}return!1},isVisuallyStyled:function(){if("body"===q(u.el))return d;if(null===u.el.offsetParent)return l;var e;if(0===u.el.offsetWidth||0===u.el.offsetHeight){if(0===u.el.scrollWidth||0===u.el.scrollHeight)return l;if("hidden"===(e=getComputedStyle(u.el)).overflow)return l}else if("none"!==(e=getComputedStyle(u.el)).backgroundImage){if(u.awaitingBackgroundImageLoad&&u.backgroundImageLoaded)return u.reasonCode=1,s;if(!u.awaitingBackgroundImageLoad){u.awaitingBackgroundImageLoad=!0;var t=e.backgroundImage.slice(4,-1).replace(/["']/g,"");return t.startsWith("data:")?(u.backgroundImageLoaded=!0,u.reasonCode=2,s):(u.backgroundImage=new Image,u.backgroundImage.src=t,u.backgroundImage.onload=function(){u.backgroundImageLoaded=!0,u.backgroundImage=null,u.update(!1,!1)},d)}}return d},updateOwnVisibility:function(){u.isContainerNode?u.visibilityMode=d:u.isDetached()?u.visibilityMode=l:u.visibilityMode=u.isVisuallyStyled()},watch:function(){u.watching||(u.watching=!0,u.observer||(u.observer=new MutationObserver(u.handleMutations)),u.observer.observe(u.el,{attributes:!u.hasCharacterData,childList:u.canHaveChildren,characterData:u.hasCharacterData}))},unwatch:function(){u.watching&&(u.watching=!1,u.observer.disconnect())}};return u.handleMutations=function(e){try{for(var t=0;t<e.length;t++){var n=e[t];switch(n.type){case"characterData":u.update(!1,!0);break;case"attributes":u.update(!0,!0);break;case"childList":for(var i=0;i<n.removedNodes.length;i++){var a=n.removedNodes[i];u.ren.detachElement(a)}if(u.isContainerNode){var r=document.getElementById(u.ren.containerTargetId);if(!r)return;for(var o=[],d=r.parentNode;d!=u.el&&null!=d;)o.push(d),d=d.parentNode;if(null==d);else{var l=u;for(i=o.length-1;0<=i;i--){var s=u.ren.getVisNodeFromElement(o[i]);(l=null==s?u.ren.makeVisNode(o[i],l):(s.attach(l),s)).init()}u.ren.makeVisNodeRecursive(r,l)}}else for(i=0;i<n.addedNodes.length;i++)a=n.addedNodes[i]}}}catch(e){}},u.teardown=function(){u.unwatch()},u.evaluateInterest=function(){return u.ren.awaitingBackgroundImageLoad},u}return o.encounterCrossDomainIframe=function(){o.parent&&o.parent.encounterCrossDomainIframe(),o.encounteredCrossDomainIframe=!0},o.success=function(e,t){o.rendered||(o.rendered=!0,o.teardown(),o.cb(!0,e.el,t,o.encounteredCrossDomainIframe))},o.failure=function(e){o.encounteredCrossDomainIframe&&(e=-2),o.teardown(),o.cb(!1,o.el,e,o.encounteredCrossDomainIframe)},o.teardown=function(e){if(!o.torndown){if(o.torndown=!0,o.failTimeout&&clearTimeout(o.failTimeout),o.headObserver&&o.headObserver.disconnect(),o.documentObserver&&o.documentObserver.disconnect(),o.selfObserver&&o.selfObserver.disconnect(),e)for(var t=0;t<o.allNodes.length;t++){var n=o.allNodes[t].vNode;n.isContainerNode&&(n.detach(),o.allNodes.splice(t,1))}else{for(t=0;t<o.allNodes.length;t++)try{o.allNodes[t].vNode.teardown()}catch(e){}o.allNodes=[],o.listeners=[]}o.children=[],o.rootVNode=0}},o.performInterestMeasurement=function(){for(var e=0;e<o.allNodes.length;e++){var t=o.allNodes[e].vNode;if(t&&t.evaluateInterest())return!0}for(var n=0;n<o.children.length;n++)if(o.children[n].performInterestMeasurement())return!0},o.requestInterestMeasurement=function(){o.trackingDocument||o.torndown||o.interestTimer||(o.interestTimer=setTimeout(function(){o.interestTimer=0,o.performInterestMeasurement()||(o.surface+=1,o.surface<=2&&o.el.parentNode&&(o.el=o.el.parentNode,o.teardown(!0),o.init()))},1))},o.watchHead=function(e){null!=e&&(o.headObserver=new MutationObserver(function(e){var t=!1;try{for(var n=0;n<e.length;n++){for(var i=e[n],a=0;a<i.addedNodes.length;a++){var r=i.addedNodes[n];if(t=t||"style"===q(r))break}if(!t)for(a=0;a<i.removedNodes.length;a++){r=i.removedNodes[n];if(t=t||"style"===q(r))break}}t&&null!=o.rootVNode&&o.rootVNode.update(!0,!1)}catch(e){}}),o.headObserver.observe(e,{childList:!0}))},o.getVisNodeFromElement=function(e){if(null==e)return null;for(var t=0;t<o.allNodes.length;t++){var n=o.allNodes[t];if(n.el===e)return n.vNode}return null},o.populateGraphRecursive=function(e,t){if(null==e)return null;var n=o.getVisNodeFromElement(e);if(n){if(n.isContainerNode)return n;n.isContainerNode=!1}else{if(!(n=o.makeVisNode(e,t)))return null;n.init()}if(n.isRendered())return n;if(!n.canHaveChildren)return n;for(var i=e.firstChild;i;){var a=o.populateGraphRecursive(i,n);if(o.rendered)return n;a&&n.children.push(a),i=i.nextSibling}return n},o.makeVisNodeRecursive=function(e,t){return o.populateGraphRecursive(e,t)},o.makeVisNode=function(e,t){if(null==e)return null;var n=null;if(1===e.nodeType){var i=q(e);if("script"===i||"style"===i||"noscript"===i)return null;n="img"===i?function(e,t,n){var i=u(e,t,n);i.canHaveChildren=!1;for(var a=null,r=0;r<e.listeners.length;r++){var o=e.listeners[r];o.el===t&&(a=o)}null==a&&(a={el:t,_load:function(){try{i.update(!0,!0)}catch(e){}i.ren.requestInterestMeasurement()},_error:function(e){i.ren.requestInterestMeasurement()}},e.listeners.push(a),i.el.addEventListener("load",a._load),i.el.addEventListener("error",a._error));var d=i.updateOwnVisibility;return i.updateOwnVisibility=function(){if(d(),i.visibilityMode!==l&&""!=i.el.src&&null!=i.el.src&&i.el.complete&&0<i.el.naturalWidth){if(1===i.el.naturalWidth&&1===i.el.naturalHeight)return void(i.visibilityMode=l);i.reasonCode=3,i.visibilityMode=s}},i.evaluateInterest=function(){return 1!==i.el.naturalWidth||1!==i.el.naturalHeight},i}(o,e,t):"iframe"===i?function(a,e,t){var r=u(a,e,t);function n(){r.reasonCode=7,a.encounterCrossDomainIframe();var e=Pe(r.el),t=e.findAd();t.bestFitEl&&t.size.width==Ae&&t.size.height==He&&(r.isInteresting=!0,r.isCrossDomainAdShaped=!0,r.isLoaded&&r.update(!1,!0))}function i(){try{if(null==r.el.contentDocument)throw 0;r.subRen=$e(r.el.contentDocument,function(e,t,n,i){r.reasonCode=n,i&&a.encounterCrossDomainIframe(),e&&(r.iframeRendered=!0,r.update(!1,!0))}),(r.subRen.parent=a).children.push(r.subRen)}catch(e){n()}}r.isInteresting=!1,r.isCrossDomainAdShaped=!1,r.isLoaded=!1,r.canHaveChildren=!1,r.iframeRendered=!1,r._load=function(){try{if(r.isLoaded=!0,r.isCrossDomainAdShaped&&r.update(!1,!0),r.subRen){r.subRen.teardown();try{r.subRen.el=r.el.contentDocument}catch(e){r.subRen.el=null}if(null==r.subRen.el)return void n();r.reasonCode=0,r.subRen.init()}else i()}catch(e){n()}},i(),r.el.addEventListener("load",r._load),r.updateOwnVisibility=function(){r.isContainerNode?r.visibilityMode=d:r.isDetached()?r.visibilityMode=l:(r.iframeRendered||r.isLoaded&&r.isCrossDomainAdShaped)&&r.isVisuallyStyled()&&(r.visibilityMode=s)};var o=r.teardown;return r.teardown=function(){o(),r.el.removeEventListener("load",r._load),r.subRen&&r.subRen.teardown()},r.evaluateInterest=function(){return r.isInteresting},r}(o,e,t):"video"===i?function(e,t,n){var i=u(e,t,n);i.isInteresting=!0,i.canHaveChildren=!1,i.videoRendered=!1,i._loadedData=function(){2!==i.el.readyState&&3!==i.el.readyState&&4!==i.el.readyState||(video.videoRendered=!0,i.update(!0,!0))},i.el.addEventListener("loadeddata",i._loadedData),i.updateOwnVisibility=function(){i.isContainerNode?i.visibilityMode=d:i.isDetached()?i.visibilityMode=l:i.videoRendered&&i.isVisuallyStyled()&&(i.reasonCode=5,i.visibilityMode=s)},i.evaluateInterest=function(){return!0};var a=i.teardown;return i.teardown=function(){a(),i.el.removeEventListener("loadeddata",i._loadedData)},i}(o,e,t):"canvas"===i?function(e,t,n){var i=u(e,t,n);return i.isInteresting=!0,i.canHaveChildren=!1,i.videoRendered=!1,i.updateOwnVisibility=function(){i.isDetached()?i.visibilityMode=l:i.isVisuallyStyled()&&(i.reasonCode=6,i.visibilityMode=s)},i.evaluateInterest=function(){return!0},i}(o,e,t):u(o,e,t)}else{if(3!==e.nodeType)return null;n=function(e,t,n){var i=u(e,t,n);return i.hasCharacterData=!0,i.updateOwnVisibility=function(){i.isContainerNode?i.visibilityMode=d:i.isDetached()?i.visibilityMode=l:0===i.el.textContent.trim().length?i.visibilityMode=l:(i.reasonCode=4,i.visibilityMode=s)},i}(o,e,t)}return null!=n&&(o.allNodes.push({el:e,vNode:n}),e.setAttribute&&e.setAttribute("is-ren",!0)),n},o.detachElement=function(e){var t=o.getVisNodeFromElement(e);null!=t&&t.detach()},o.init=function(){o.torndown=!1;if(o.failTimeout=setTimeout(function(){o.torndown||o.rendered||(o.teardown(),o.failure(-1))},3e4),o.el){if(o.el.ownerDocument&&(o.targetWindow=o.el.ownerDocument.defaultView,o.targetInIframe=o.targetWindow!==window.top),null==o.el.ownerDocument){o.trackingDocument=!0,o.targetWindow=o.el.defaultView,o.targetInIframe=o.targetWindow!==window.top,o.documentObserver=new MutationObserver(function(){o.teardown(),o.init()}),o.documentObserver.observe(o.el,{childList:!0}),o.watchHead(o.el.head);var e=o.el.body;e&&(o.rootVNode=o.populateGraphRecursive(e,null))}else if("html"===q(o.el)){o.trackingDocument=!0,o.watchHead(o.el.ownerDocument.head);var t=o.el.ownerDocument.body;t&&(o.rootVNode=o.populateGraphRecursive(t,null))}else{o.watchHead(o.el.ownerDocument.head);var n=o.el.id;if(null!=n&&""!==n)try{o.containerTargetId=n;var i=o.el.parentNode,a=o.makeVisNode(i,null);if(a.isContainerNode=!0,a.init(),i.parentNode){var r=o.makeVisNode(i.parentNode);null!=r?(r.isContainerNode=!0,r.init(),a.attach(r),o.rootVNode=r):o.rootVNode=a}else o.rootVNode=a;o.populateGraphRecursive(o.el,a)}catch(e){o.rootVNode=o.populateGraphRecursive(o.el,null)}else o.rootVNode=o.populateGraphRecursive(o.el,null)}o.requestInterestMeasurement()}else o.failure("target is null")},o.init(),o},Xe=!1,Ye=!1,Je=(Math.floor(1e3*Math.random()),function(){Re=!0,$e(Oe,function(e,t,n,i){try{(Fe=G()-We)<1&&(Fe=1),Be=n,je=i?1:0,Ye=!0;new Date;Oe.ownerDocument}catch(e){}})});Le&&ae&&(H=A=!0),Oe&&Je();var Ke=!1,Ze=0,Qe=0,et=0,tt=0,nt=0,it=!1,at=G(),rt=!1,ot=0,dt=0,lt=[0,0,0,0,0,0,0],st=function(e){var t=0,n=0;if(e.offsetParent)do{if("fixed"==e.style.position){t=e.getBoundingClientRect().left,n=e.getBoundingClientRect().top;break}t+=e.offsetLeft,t-=e.scrollLeft,n+=e.offsetTop,n-=e.scrollTop}while((e=e.offsetParent)&&"BODY"!=e.tagName);if(0==t&&0==n&&k){var i=k.getCurrentPosition();return[i.x,i.y]}return[t,n]},ut=function(e){try{for(var t=e.parent.document.getElementsByTagName("IFRAME"),n=0;n<t.length;n++)if(t[n].contentWindow==e)return t[n]}catch(e){}return null},ct=!1,ft=function(){if(rt=!0,++dt,be()&&(!ve||_e)&&(fe=!0,ae)){for(var e=0,t=0,n=window,i=0;i<16;++i){try{var a=ut(n);if(a)e+=(p=st(a))[0],t+=p[1]}catch(e){}if(n==window.top)break;n=n.parent}var r=function(){var e=0,t=0;return"number"==typeof le.pageYOffset?(t=le.pageYOffset,e=le.pageXOffset):le.document.body&&(le.document.body.scrollLeft||le.document.body.scrollTop)?(t=le.document.body.scrollTop,e=le.document.body.scrollLeft):le.document.documentElement&&(le.document.documentElement.scrollLeft||le.document.documentElement.scrollTop)&&(t=le.document.documentElement.scrollTop,e=le.document.documentElement.scrollLeft),[e,t]}(),o=r[1],d=r[0],l=function(){var e=0,t=0;return"number"==typeof le.innerWidth?(e=le.innerWidth,t=le.innerHeight):le.document.documentElement&&(le.document.documentElement.clientWidth||le.document.documentElement.clientHeight)&&(e=le.document.documentElement.clientWidth,t=le.document.documentElement.clientHeight),[e,t]}(),s=o+l[1],u=d+l[0],c=Math.max(le.document.documentElement.clientHeight,le.document.body.scrollHeight,le.document.documentElement.scrollHeight,le.document.body.offsetHeight,le.document.documentElement.offsetHeight),f=Math.max(le.document.documentElement.clientWidth,le.document.body.scrollWidth,le.document.documentElement.scrollWidth,le.document.body.offsetWidth,le.document.documentElement.offsetWidth);lt[0]+=c,lt[1]+=f;var m=.2*c,h=0;for(i=2;i<7;++i){var v=h+m,_=v-h;if(_<0)h=v;else{h<o&&(h=o),s<v&&(v=s);var g=v-h;h=v,g<=0||(lt[i]+=Math.floor(g/_*1e3)/1e3)}}++ot;var p,b=(p=st(xe))[1]+t,w=p[0]+e,y=b+xe.offsetHeight,C=w+xe.offsetWidth,N=(y-b)*(C-w);N<0&&(N=0);var E=((s<y?s:y)-(b<o?o:b))*((u<C?u:C)-(w<d?d:w));E<0&&(E=0),Ze=w,Qe=b;var I=0;M?I=1:(0<N&&(I=Math.floor(E/N*1e3)/1e3),ct||(b+(y-b)/2<=l[1]&&w+(C-w)/2<=l[0]&&(Ke=!0),ct=!0)),_e&&(I=ge),L<=I?(et+=I,++tt,++nt):nt=0,!it&&10<=nt&&(it=!0,z.geometric=1)}be()||(nt=0)},mt=!1,ht=!1,vt=0,_t=!1,gt=0,pt=function(e,t){if(e.__aasv=i,e.__aaii=f.instanceId,e.__aait=f.trueTime,0<__adrta__aasi.length&&(e.__aasi=__adrta__aasi,e.__aast=__adrta__aast),0<__adrta__aavi.length&&(e.__aavi=__adrta__aavi,e.__aavt=__adrta__aavt),e.__aavz=E,e.__aaib=0<re&&ae?1:0,e.__aaai=0<re?1:0,e.__aaaa=Ke?1:0,e.__aafl=ae?le.innerHeight||le.document.documentElement.clientHeight:0,e.__aaaf=Le?1:0,e.__aaag=ze,0!=Be&&(e.__aarf=Be,e.__aart=Fe,Xe=!0),0!=je&&(e.__aacd=je),e.__aaax=Math.floor(Ze),e.__aaay=Math.floor(Qe),0==Ae&&0==He||(e.__aasz=Ae+"x"+He),e.__aapf=fe?1:0,0!=D&&(e.__aaec=D),e.__aaup=vt,rt)if(fe=!1,0==tt?(e[w]=0,e[y]=0):(e[w]=100*tt,e[y]=Math.round(et/tt*1e3)/1e3,(e[w]<=0||e[y]<=0)&&(e[w]=0,e[y]=0)),e[d]=it?1:0,tt=et=0,e[l]=function(){var e=G()-at;return at=G(),e}(),e[s]=function(){if(0!=De){var e=G();Te+=e-De,De=e}var t=Te;return Te=0,t}(),e[l]<0&&(e[l]=0),e[s]<0&&(e[s]=0),e[w]>e[l]&&(e[w]=e[l]),e[s]>e[l]&&(e[s]=e[l]),0<dt&&(e[h]=100*dt,dt=0),0<ot){e[u]=Math.ceil(lt[0]/ot),e[c]=Math.ceil(lt[1]/ot),e[v]=Math.round(lt[2]/ot*1e3)/1e3,e[_]=Math.round(lt[3]/ot*1e3)/1e3,e[g]=Math.round(lt[4]/ot*1e3)/1e3,e[p]=Math.round(lt[5]/ot*1e3)/1e3,e[b]=Math.round(lt[6]/ot*1e3)/1e3;for(var n=0;n<7;++n)lt[n]=0;ot=0}else e[u]=0,e[c]=0,e[h]=0,e[v]=0,e[_]=0,e[g]=0,e[p]=0,e[b]=0;else e[y]=0,e[w]=0,e[d]=0,e[l]=0,e[s]=0,e[u]=0,e[c]=0,e[h]=0,e[v]=0,e[_]=0,e[g]=0,e[p]=0,e[b]=0;if(O&&(e.__aaab=1),screen&&screen.width&&screen.height&&(e.__aass=screen.width+"x"+screen.height),A&&(e.__aaim=1),H&&(e.__aawm=1),null!=Ne&&(e.__aaho=1),f.cb&&(e.__aacb=f.cb),f.serverIp&&(e.__aaxf=f.serverIp),B&&(e.__aas21=B),j&&(e.__aas23=j),t.__aapu=oe,t.__aapr=de,se&&-1==se.indexOf("applewebdata://")&&(t.__aatu=se),__adrta__aadb&&(e[o]=1,_t||(t[m]=function(e){var t,n,i,a,r,o,d,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",s="",u=0;e=e.replace(/\r\n/g,"\n");for(var c="",f=0;f<e.length;f++){var m=e.charCodeAt(f);m<128?c+=String.fromCharCode(m):(127<m&&m<2048?c+=String.fromCharCode(m>>6|192):(c+=String.fromCharCode(m>>12|224),c+=String.fromCharCode(m>>6&63|128)),c+=String.fromCharCode(63&m|128))}for(e=c;u<e.length;)a=(t=e.charCodeAt(u++))>>2,r=(3&t)<<4|(n=e.charCodeAt(u++))>>4,o=(15&n)<<2|(i=e.charCodeAt(u++))>>6,d=63&i,isNaN(n)?o=d=64:isNaN(i)&&(d=64),s=s+l.charAt(a)+l.charAt(r)+l.charAt(o)+l.charAt(d);return s}($.parentNode.innerHTML),_t=!0)),void 0!==k){try{e.__aams=k.getState(),e.__aamv=k.getVersion()}catch(e){}e[o]="m=1",Mt(),e.__aamav=Et.viewed?1:0,Et.stats=z,e.__aamdb=JSON.stringify(Et)}},bt=function(e){if(0!==vt&&!(0<__adrta__aasi.length&&0<__adrta__aast&&0<__adrta__aavi.length&&0<__adrta__aavt))return clearTimeout(gt),void(gt=setTimeout(bt,500));vt++;var t={},n={};pt(t,n),function(e,t,n){var i="",a="",r="";if(i+="cb="+Math.floor(9e7*Math.random()),e)for(var o in e)i+="&"+o+"="+encodeURIComponent(e[o]);if(t){for(var d in t)d!=m&&(a+="&"+d+"="+encodeURIComponent(t[d]));t[m]&&(r+="&"+m+"="+encodeURIComponent(t[m]))}var l=document.createElement("script");l.setAttribute("type","text/javascript");var s=P+"//ipv4.adrta.com/i?";if(s+=i,s+="&"+ne,0<R.length&&(s+="&"+R.join("")),s+=a,s=(s+=r).substring(0,2047),l.setAttribute("src",s),l.readyState?l.onreadystatechange=function(){"loaded"!=l.readyState&&"complete"!=l.readyState||(l.onreadystatechange=null,l.parentNode.removeChild(l),n&&n())}:l.onload=function(){l.onload=null,l.parentNode.removeChild(l),n&&n()},document.getElementsByTagName("head")[0].appendChild(l),f.siphon){var u=document.createElement("script");u.setAttribute("type","text/javascript");var c=P+"//testbed.adrta.com/i?";c+=i,c+="&"+ne,0<R.length&&(c+="&"+R.join("")),c+=a,c=(c+=r).substring(0,2047),u.setAttribute("src",c),u.readyState?u.onreadystatechange=function(){"loaded"!=u.readyState&&"complete"!=u.readyState||(u.onreadystatechange=null,u.parentNode.removeChild(u),n&&n())}:u.onload=function(){u.onload=null,u.parentNode.removeChild(u),n&&n()},document.getElementsByTagName("head")[0].appendChild(u)}}(t,n,e),W&&function(e,t){if(!(mt&&ht||mt&&!ht&&!it&&!Et.viewed)){var n="";n+=";vwmc:"+(A?1:0),n+=";vwc:"+(it||Et.viewed?1:0),A&&(mt=!0),(it||Et.viewed)&&(ht=!0);var i=document.createElement("script");i.setAttribute("type","text/javascript");var a=W;a=(a+=n).substring(0,2047),i.setAttribute("src",a),i.readyState?i.onreadystatechange=function(){"loaded"!=i.readyState&&"complete"!=i.readyState||(i.onreadystatechange=null,i.parentNode.removeChild(i),t&&t())}:i.onload=function(){i.onload=null,i.parentNode.removeChild(i),t&&t()},document.getElementsByTagName("head")[0].appendChild(i)}}(0,e)},wt=C[x++],yt=G()+wt,Ct=!1;function Nt(){}Nt.tag=function(e){return e.replace(/\$\{PXL8_CLICK}/g,Nt.getClickURL())},Nt.getClickURL=function(){var e=Q.join("&");return 0<R.length&&(e+="&"+R.join("")),"http://adrta.com/c?clid="+ci+"&"+e+"&__aaii="+instanceId+"&redirect="},window["Pixalate"+f.instanceId]=Nt;var Et={};function It(){Et.viewed=1,z.mraidView=1,Ct||(Ct=!0,bt())}function Mt(){try{Et.state=k.getState()}catch(e){}try{Et.version=k.getVersion()}catch(e){}try{Et.position=k.getCurrentPosition()}catch(e){}try{Et.maxSize=k.getMaxSize()}catch(e){}try{Et.screenSize=k.getScreenSize()}catch(e){}try{Et.OrientProps=k.getOrientationProperties()}catch(e){}var e="YES"==k.isViewable()||k.isViewable()?1:0;e&&(Et.isMeasurable=1,Et.wasMeasured=1),e&&!Vt?Vt=setTimeout(It,1e3):!e&&Vt&&clearTimeout(Vt)}Et.state=null,Et.version=null,Et.position=null,Et.maxSize={width:0,height:0},Et.screenSize={width:0,height:0},Et.OrientProps={},Et.viewed=0,Et.isMeasurable=0,Et.wasMeasured=0;var St=!1,Vt=0;function kt(){if(St||(k="undefined"!=typeof mraid?mraid:window.mraid||document.mraid),xe)try{var e=k.getCurrentPosition(),t=xe.getBoundingClientRect();ve=!(e.width>t.width+5||e.height>t.height+5)}catch(e){}void 0===k||St||(St=!0,Et.state=k.getState(),"default"===k.getState()&&Mt(),"3.0"===k.getVersion()?k.addEventListener("exposureChange",function(e){_e=!0,ge=e}):k.addEventListener("viewableChange",function(e){Mt()}),"loading"===k.getState()?(Et.isMeasurable=1,k.addEventListener("ready",function(e){Mt(),bt()})):bt())}try{kt()}catch(e){}var Tt,Dt,Ot,xt,Lt,Rt,At,Ht,zt=!1,Wt=!1,Ft=0,Bt=[],jt=function(e){var t;Tt||(Tt=G());var n=(G()-Tt)/1e3;if(Tt=G(),t=Math.ceil(1/n),60<=Ft){var i=Bt.reduce(function(e,t){return e+t});if(22<=Math.ceil(i/Bt.length)&&zt)return it=H=!(zt=!1),void(z.raf=1);A=zt=!0,Ft=0}else t!==1/0&&Bt.push(t),Ft++;window.requestAnimationFrame(jt)},Pt=!1,Gt=function(){try{kt();var e,t=G();if(!Le)null!=Se&&(e=Se.findAd()),null!=e&&e.el&&Ge(e.el,e.bestFitEl,e.size.width,e.size.height);Le&&!Re&&Je(),Le&&0<__adrta__aasi.length&&0<__adrta__aast&&0<__adrta__aavi.length&&0<__adrta__aavt&&(ft(),!(0<re)||0<re&&ae||V||null!==Ne||(function(){if(!Pt){if(!ae&&!f.isDesktop){var e=document.createElement("div"),t="__"+Math.floor(999999*Math.random());e.id=t,e.style.visibility="hidden !important",document.body.appendChild(e)}window.requestAnimationFrame(jt),Pt=!0}}(),Wt||(A=!0,bt(),Wt=!0)),ae&&(A=H=!0),!Xe&&Ye&&(bt(),Xe=!0,yt=t+wt),!Ct&&it?(bt(),Ct=!0,yt=t+wt):(fe||0<et)&&yt<=t&&(bt(),wt=C[x++],yt=t+wt))}catch(e){}wt&&window.setTimeout(Gt,100)};Dt=P+"//ipv6.adrta.com/?callback=?",Ot=function(e){e&&(B=e.ip,j=e.xff)},xt="_"+G(),Lt=document.createElement("script"),Rt=document.getElementsByTagName("head")[0]||document.documentElement,window[xt]=function(e){Rt.removeChild(Lt),Ot&&Ot(e),delete window[xt]},Lt.src=Dt.replace("callback=?","callback="+xt),Rt.appendChild(Lt),void 0!==document.hidden?(At="hidden",Ht="visibilitychange"):void 0!==document.mozHidden?(At="mozHidden",Ht="mozvisibilitychange"):void 0!==document.msHidden?(At="msHidden",Ht="msvisibilitychange"):void 0!==document.webkitHidden&&(At="webkitHidden",Ht="webkitvisibilitychange");var qt=function(e){he=document[At],document.removeEventListener(Ht,qt),1==window.__adrta__aasm?(window.setTimeout(bt,1e3),window.setTimeout(Gt,200)):(window.__adrta__aasm=1,bt(),window.setTimeout(Gt,100))},Ut=function(e){he=document[At],be()&&Le&&!it&&Ee(),Ie.e&&(Ie.e.visibleTimeout=setTimeout(Me,1e3,Ie.e,Ie.o))};void 0===document.webkitVisibilityState&&void 0===document.visibilityState||void 0!==document.webkitVisibilityState&&"prerender"!=document.webkitVisibilityState||void 0!==document.visibilityState&&"prerender"!=document.visibilityState?(1==window.__adrta__aasm?(window.setTimeout(bt,1e3),window.setTimeout(Gt,200)):(window.__adrta__aasm=1,bt(),window.setTimeout(Gt,100)),document.addEventListener(Ht,Ut,!1),Ut()):(void 0!==document.webkitVisibilityState&&"prerender"==document.webkitVisibilityState||void 0!==document.visibilityState&&"prerender"==document.visibilityState)&&(document.addEventListener(Ht,qt,!1),document.addEventListener(Ht,Ut,!1),Ut())});