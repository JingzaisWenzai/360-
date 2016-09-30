!function(t){var e="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;if("function"==typeof define&&define.amd)define(["underscore","jquery","exports"],function(i,n,s){e.Backbone=t(e,s,i,n)});else if("undefined"!=typeof exports){var i,n=require("underscore");try{i=require("jquery")}catch(s){}t(e,exports,n,i)}else e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}(function(t,e,i,n){var s=t.Backbone,r=Array.prototype.slice;e.VERSION="1.3.3",e.$=n,e.noConflict=function(){return t.Backbone=s,this},e.emulateHTTP=!1,e.emulateJSON=!1;var a=function(t,e,n){switch(t){case 1:return function(){return i[e](this[n])};case 2:return function(t){return i[e](this[n],t)};case 3:return function(t,s){return i[e](this[n],h(t,this),s)};case 4:return function(t,s,r){return i[e](this[n],h(t,this),s,r)};default:return function(){var t=r.call(arguments);return t.unshift(this[n]),i[e].apply(i,t)}}},o=function(t,e,n){i.each(e,function(e,s){i[s]&&(t.prototype[s]=a(e,s,n))})},h=function(t,e){return i.isFunction(t)?t:i.isObject(t)&&!e._isModel(t)?u(t):i.isString(t)?function(e){return e.get(t)}:t},u=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}},c=e.Events={},l=/\s+/,d=function(t,e,n,s,r){var a,o=0;if(n&&"object"==typeof n){void 0!==s&&"context"in r&&void 0===r.context&&(r.context=s);for(a=i.keys(n);o<a.length;o++)e=d(t,e,a[o],n[a[o]],r)}else if(n&&l.test(n))for(a=n.split(l);o<a.length;o++)e=t(e,a[o],s,r);else e=t(e,n,s,r);return e};c.on=function(t,e,i){return f(this,t,e,i)};var f=function(t,e,i,n,s){if(t._events=d(g,t._events||{},e,i,{context:n,ctx:t,listening:s}),s){var r=t._listeners||(t._listeners={});r[s.id]=s}return t};c.listenTo=function(t,e,n){if(!t)return this;var s=t._listenId||(t._listenId=i.uniqueId("l")),r=this._listeningTo||(this._listeningTo={}),a=r[s];if(!a){var o=this._listenId||(this._listenId=i.uniqueId("l"));a=r[s]={obj:t,objId:s,id:o,listeningTo:r,count:0}}return f(t,e,n,this,a),this};var g=function(t,e,i,n){if(i){var s=t[e]||(t[e]=[]),r=n.context,a=n.ctx,o=n.listening;o&&o.count++,s.push({callback:i,context:r,ctx:r||a,listening:o})}return t};c.off=function(t,e,i){return this._events?(this._events=d(v,this._events,t,e,{context:i,listeners:this._listeners}),this):this},c.stopListening=function(t,e,n){var s=this._listeningTo;if(!s)return this;for(var r=t?[t._listenId]:i.keys(s),a=0;a<r.length;a++){var o=s[r[a]];if(!o)break;o.obj.off(e,n,this)}return this};var v=function(t,e,n,s){if(t){var r,a=0,o=s.context,h=s.listeners;if(e||n||o){for(var u=e?[e]:i.keys(t);a<u.length;a++){e=u[a];var c=t[e];if(!c)break;for(var l=[],d=0;d<c.length;d++){var f=c[d];n&&n!==f.callback&&n!==f.callback._callback||o&&o!==f.context?l.push(f):(r=f.listening,r&&0===--r.count&&(delete h[r.id],delete r.listeningTo[r.objId]))}l.length?t[e]=l:delete t[e]}return t}for(var g=i.keys(h);a<g.length;a++)r=h[g[a]],delete h[r.id],delete r.listeningTo[r.objId]}};c.once=function(t,e,n){var s=d(p,{},t,e,i.bind(this.off,this));return"string"==typeof t&&null==n&&(e=void 0),this.on(s,e,n)},c.listenToOnce=function(t,e,n){var s=d(p,{},e,n,i.bind(this.stopListening,this,t));return this.listenTo(t,s)};var p=function(t,e,n,s){if(n){var r=t[e]=i.once(function(){s(e,r),n.apply(this,arguments)});r._callback=n}return t};c.trigger=function(t){if(!this._events)return this;for(var e=Math.max(0,arguments.length-1),i=Array(e),n=0;e>n;n++)i[n]=arguments[n+1];return d(m,this._events,t,void 0,i),this};var m=function(t,e,i,n){if(t){var s=t[e],r=t.all;s&&r&&(r=r.slice()),s&&_(s,n),r&&_(r,[e].concat(n))}return t},_=function(t,e){var i,n=-1,s=t.length,r=e[0],a=e[1],o=e[2];switch(e.length){case 0:for(;++n<s;)(i=t[n]).callback.call(i.ctx);return;case 1:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r);return;case 2:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r,a);return;case 3:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r,a,o);return;default:for(;++n<s;)(i=t[n]).callback.apply(i.ctx,e);return}};c.bind=c.on,c.unbind=c.off,i.extend(e,c);var y=e.Model=function(t,e){var n=t||{};e||(e={}),this.cid=i.uniqueId(this.cidPrefix),this.attributes={},e.collection&&(this.collection=e.collection),e.parse&&(n=this.parse(n,e)||{});var s=i.result(this,"defaults");n=i.defaults(i.extend({},s,n),s),this.set(n,e),this.changed={},this.initialize.apply(this,arguments)};i.extend(y.prototype,c,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return null!=this.get(t)},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,n){if(null==t)return this;var s;if("object"==typeof t?(s=t,n=e):(s={})[t]=e,n||(n={}),!this._validate(s,n))return!1;var r=n.unset,a=n.silent,o=[],h=this._changing;this._changing=!0,h||(this._previousAttributes=i.clone(this.attributes),this.changed={});var u=this.attributes,c=this.changed,l=this._previousAttributes;for(var d in s)e=s[d],i.isEqual(u[d],e)||o.push(d),i.isEqual(l[d],e)?delete c[d]:c[d]=e,r?delete u[d]:u[d]=e;if(this.idAttribute in s&&(this.id=this.get(this.idAttribute)),!a){o.length&&(this._pending=n);for(var f=0;f<o.length;f++)this.trigger("change:"+o[f],this,u[o[f]],n)}if(h)return this;if(!a)for(;this._pending;)n=this._pending,this._pending=!1,this.trigger("change",this,n);return this._pending=!1,this._changing=!1,this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:!0}))},clear:function(t){var e={};for(var n in this.attributes)e[n]=void 0;return this.set(e,i.extend({},t,{unset:!0}))},hasChanged:function(t){return null==t?!i.isEmpty(this.changed):i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):!1;var e=this._changing?this._previousAttributes:this.attributes,n={};for(var s in t){var r=t[s];i.isEqual(e[s],r)||(n[s]=r)}return i.size(n)?n:!1},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:!0},t);var e=this,n=t.success;return t.success=function(i){var s=t.parse?e.parse(i,t):i;return e.set(s,t)?(n&&n.call(t.context,e,i,t),void e.trigger("sync",e,i,t)):!1},B(this,t),this.sync("read",this,t)},save:function(t,e,n){var s;null==t||"object"==typeof t?(s=t,n=e):(s={})[t]=e,n=i.extend({validate:!0,parse:!0},n);var r=n.wait;if(s&&!r){if(!this.set(s,n))return!1}else if(!this._validate(s,n))return!1;var a=this,o=n.success,h=this.attributes;n.success=function(t){a.attributes=h;var e=n.parse?a.parse(t,n):t;return r&&(e=i.extend({},s,e)),e&&!a.set(e,n)?!1:(o&&o.call(n.context,a,t,n),void a.trigger("sync",a,t,n))},B(this,n),s&&r&&(this.attributes=i.extend({},h,s));var u=this.isNew()?"create":n.patch?"patch":"update";"patch"!==u||n.attrs||(n.attrs=s);var c=this.sync(u,this,n);return this.attributes=h,c},destroy:function(t){t=t?i.clone(t):{};var e=this,n=t.success,s=t.wait,r=function(){e.stopListening(),e.trigger("destroy",e,e.collection,t)};t.success=function(i){s&&r(),n&&n.call(t.context,e,i,t),e.isNew()||e.trigger("sync",e,i,t)};var a=!1;return this.isNew()?i.defer(t.success):(B(this,t),a=this.sync("delete",this,t)),s||r(),a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||F();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend({},t,{validate:!0}))},_validate:function(t,e){if(!e.validate||!this.validate)return!0;t=i.extend({},this.attributes,t);var n=this.validationError=this.validate(t,e)||null;return n?(this.trigger("invalid",this,n,i.extend(e,{validationError:n})),!1):!0}});var b={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};o(y,b,"attributes");var x=e.Collection=function(t,e){e||(e={}),e.model&&(this.model=e.model),void 0!==e.comparator&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,i.extend({silent:!0},e))},w={add:!0,remove:!0,merge:!0},E={add:!0,remove:!1},I=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var n,s=Array(t.length-i),r=e.length;for(n=0;n<s.length;n++)s[n]=t[n+i];for(n=0;r>n;n++)t[n+i]=e[n];for(n=0;n<s.length;n++)t[n+r+i]=s[n]};i.extend(x.prototype,c,{model:y,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:!1},e,E))},remove:function(t,e){e=i.extend({},e);var n=!i.isArray(t);t=n?[t]:t.slice();var s=this._removeModels(t,e);return!e.silent&&s.length&&(e.changes={added:[],merged:[],removed:s},this.trigger("update",this,e)),n?s[0]:s},set:function(t,e){if(null!=t){e=i.extend({},w,e),e.parse&&!this._isModel(t)&&(t=this.parse(t,e)||[]);var n=!i.isArray(t);t=n?[t]:t.slice();var s=e.at;null!=s&&(s=+s),s>this.length&&(s=this.length),0>s&&(s+=this.length+1);var r,a,o=[],h=[],u=[],c=[],l={},d=e.add,f=e.merge,g=e.remove,v=!1,p=this.comparator&&null==s&&e.sort!==!1,m=i.isString(this.comparator)?this.comparator:null;for(a=0;a<t.length;a++){r=t[a];var _=this.get(r);if(_){if(f&&r!==_){var y=this._isModel(r)?r.attributes:r;e.parse&&(y=_.parse(y,e)),_.set(y,e),u.push(_),p&&!v&&(v=_.hasChanged(m))}l[_.cid]||(l[_.cid]=!0,o.push(_)),t[a]=_}else d&&(r=t[a]=this._prepareModel(r,e),r&&(h.push(r),this._addReference(r,e),l[r.cid]=!0,o.push(r)))}if(g){for(a=0;a<this.length;a++)r=this.models[a],l[r.cid]||c.push(r);c.length&&this._removeModels(c,e)}var b=!1,x=!p&&d&&g;if(o.length&&x?(b=this.length!==o.length||i.some(this.models,function(t,e){return t!==o[e]}),this.models.length=0,I(this.models,o,0),this.length=this.models.length):h.length&&(p&&(v=!0),I(this.models,h,null==s?this.length:s),this.length=this.models.length),v&&this.sort({silent:!0}),!e.silent){for(a=0;a<h.length;a++)null!=s&&(e.index=s+a),r=h[a],r.trigger("add",r,this,e);(v||b)&&this.trigger("sort",this,e),(h.length||c.length||u.length)&&(e.changes={added:h,removed:c,merged:u},this.trigger("update",this,e))}return n?t[0]:t}},reset:function(t,e){e=e?i.clone(e):{};for(var n=0;n<this.models.length;n++)this._removeReference(this.models[n],e);return e.previousModels=this.models,this._reset(),t=this.add(t,i.extend({silent:!0},e)),e.silent||this.trigger("reset",this,e),t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return r.apply(this.models,arguments)},get:function(t){return null==t?void 0:this._byId[t]||this._byId[this.modelId(t.attributes||t)]||t.cid&&this._byId[t.cid]},has:function(t){return null!=this.get(t)},at:function(t){return 0>t&&(t+=this.length),this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,!0)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var n=e.length;return i.isFunction(e)&&(e=i.bind(e,this)),1===n||i.isString(e)?this.models=this.sortBy(e):this.models.sort(e),t.silent||this.trigger("sort",this,t),this},pluck:function(t){return this.map(t+"")},fetch:function(t){t=i.extend({parse:!0},t);var e=t.success,n=this;return t.success=function(i){var s=t.reset?"reset":"set";n[s](i,t),e&&e.call(t.context,n,i,t),n.trigger("sync",n,i,t)},B(this,t),this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var n=e.wait;if(t=this._prepareModel(t,e),!t)return!1;n||this.add(t,e);var s=this,r=e.success;return e.success=function(t,e,i){n&&s.add(t,i),r&&r.call(i.context,t,e,i)},t.save(null,e),t},parse:function(t){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(t,e){if(this._isModel(t))return t.collection||(t.collection=this),t;e=e?i.clone(e):{},e.collection=this;var n=new this.model(t,e);return n.validationError?(this.trigger("invalid",this,n.validationError,e),!1):n},_removeModels:function(t,e){for(var i=[],n=0;n<t.length;n++){var s=this.get(t[n]);if(s){var r=this.indexOf(s);this.models.splice(r,1),this.length--,delete this._byId[s.cid];var a=this.modelId(s.attributes);null!=a&&delete this._byId[a],e.silent||(e.index=r,s.trigger("remove",s,this,e)),i.push(s),this._removeReference(s,e)}}return i},_isModel:function(t){return t instanceof y},_addReference:function(t){this._byId[t.cid]=t;var e=this.modelId(t.attributes);null!=e&&(this._byId[e]=t),t.on("all",this._onModelEvent,this)},_removeReference:function(t){delete this._byId[t.cid];var e=this.modelId(t.attributes);null!=e&&delete this._byId[e],this===t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,n){if(e){if(("add"===t||"remove"===t)&&i!==this)return;if("destroy"===t&&this.remove(e,n),"change"===t){var s=this.modelId(e.previousAttributes()),r=this.modelId(e.attributes);s!==r&&(null!=s&&delete this._byId[s],null!=r&&(this._byId[r]=e))}}this.trigger.apply(this,arguments)}});var S={forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3};o(x,S,"models");var k=e.View=function(t){this.cid=i.uniqueId("view"),i.extend(this,i.pick(t,P)),this._ensureElement(),this.initialize.apply(this,arguments)},T=/^(\S+)\s*(.*)$/,P=["model","collection","el","id","attributes","className","tagName","events"];i.extend(k.prototype,c,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){return this._removeElement(),this.stopListening(),this},_removeElement:function(){this.$el.remove()},setElement:function(t){return this.undelegateEvents(),this._setElement(t),this.delegateEvents(),this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t),this.el=this.$el[0]},delegateEvents:function(t){if(t||(t=i.result(this,"events")),!t)return this;this.undelegateEvents();for(var e in t){var n=t[e];if(i.isFunction(n)||(n=this[n]),n){var s=e.match(T);this.delegate(s[1],s[2],i.bind(n,this))}}return this},delegate:function(t,e,i){return this.$el.on(t+".delegateEvents"+this.cid,e,i),this},undelegateEvents:function(){return this.$el&&this.$el.off(".delegateEvents"+this.cid),this},undelegate:function(t,e,i){return this.$el.off(t+".delegateEvents"+this.cid,e,i),this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(this.el)this.setElement(i.result(this,"el"));else{var t=i.extend({},i.result(this,"attributes"));this.id&&(t.id=i.result(this,"id")),this.className&&(t["class"]=i.result(this,"className")),this.setElement(this._createElement(i.result(this,"tagName"))),this._setAttributes(t)}},_setAttributes:function(t){this.$el.attr(t)}}),e.sync=function(t,n,s){var r=H[t];i.defaults(s||(s={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:r,dataType:"json"};if(s.url||(a.url=i.result(n,"url")||F()),null!=s.data||!n||"create"!==t&&"update"!==t&&"patch"!==t||(a.contentType="application/json",a.data=JSON.stringify(s.attrs||n.toJSON(s))),s.emulateJSON&&(a.contentType="application/x-www-form-urlencoded",a.data=a.data?{model:a.data}:{}),s.emulateHTTP&&("PUT"===r||"DELETE"===r||"PATCH"===r)){a.type="POST",s.emulateJSON&&(a.data._method=r);var o=s.beforeSend;s.beforeSend=function(t){return t.setRequestHeader("X-HTTP-Method-Override",r),o?o.apply(this,arguments):void 0}}"GET"===a.type||s.emulateJSON||(a.processData=!1);var h=s.error;s.error=function(t,e,i){s.textStatus=e,s.errorThrown=i,h&&h.call(s.context,t,e,i)};var u=s.xhr=e.ajax(i.extend(a,s));return n.trigger("request",n,u,s),u};var H={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={}),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},A=/\((.*?)\)/g,C=/(\(\?)?:\w+/g,R=/\*\w+/g,j=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,c,{initialize:function(){},route:function(t,n,s){i.isRegExp(t)||(t=this._routeToRegExp(t)),i.isFunction(n)&&(s=n,n=""),s||(s=this[n]);var r=this;return e.history.route(t,function(i){var a=r._extractParameters(t,i);r.execute(s,a,n)!==!1&&(r.trigger.apply(r,["route:"+n].concat(a)),r.trigger("route",n,a),e.history.trigger("route",r,n,a))}),this},execute:function(t,e){t&&t.apply(this,e)},navigate:function(t,i){return e.history.navigate(t,i),this},_bindRoutes:function(){if(this.routes){this.routes=i.result(this,"routes");for(var t,e=i.keys(this.routes);null!=(t=e.pop());)this.route(t,this.routes[t])}},_routeToRegExp:function(t){return t=t.replace(j,"\\$&").replace(A,"(?:$1)?").replace(C,function(t,e){return e?t:"([^/?]+)"}).replace(R,"([^?]*?)"),new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var n=t.exec(e).slice(1);return i.map(n,function(t,e){return e===n.length-1?t||null:t?decodeURIComponent(t):null})}});var N=e.History=function(){this.handlers=[],this.checkUrl=i.bind(this.checkUrl,this),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},M=/^[#\/]|\s+$/g,O=/^\/+|\/+$/g,U=/#.*$/;N.started=!1,i.extend(N.prototype,c,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname),e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return"/"===t.charAt(0)?t.slice(1):t},getFragment:function(t){return null==t&&(t=this._usePushState||!this._wantsHashChange?this.getPath():this.getHash()),t.replace(M,"")},start:function(t){if(N.started)throw new Error("Backbone.history has already been started");if(N.started=!0,this.options=i.extend({root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._hasHashChange="onhashchange"in window&&(void 0===document.documentMode||document.documentMode>7),this._useHashChange=this._wantsHashChange&&this._hasHashChange,this._wantsPushState=!!this.options.pushState,this._hasPushState=!(!this.history||!this.history.pushState),this._usePushState=this._wantsPushState&&this._hasPushState,this.fragment=this.getFragment(),this.root=("/"+this.root+"/").replace(O,"/"),this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";return this.location.replace(e+"#"+this.getPath()),!0}this._hasPushState&&this.atRoot()&&this.navigate(this.getHash(),{replace:!0})}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe"),this.iframe.src="javascript:0",this.iframe.style.display="none",this.iframe.tabIndex=-1;var n=document.body,s=n.insertBefore(this.iframe,n.firstChild).contentWindow;s.document.open(),s.document.close(),s.location.hash="#"+this.fragment}var r=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};return this._usePushState?r("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe?r("hashchange",this.checkUrl,!1):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.options.silent?void 0:this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};this._usePushState?t("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe&&t("hashchange",this.checkUrl,!1),this.iframe&&(document.body.removeChild(this.iframe),this.iframe=null),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),N.started=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(){var t=this.getFragment();return t===this.fragment&&this.iframe&&(t=this.getHash(this.iframe.contentWindow)),t===this.fragment?!1:(this.iframe&&this.navigate(t),void this.loadUrl())},loadUrl:function(t){return this.matchRoot()?(t=this.fragment=this.getFragment(t),i.some(this.handlers,function(e){return e.route.test(t)?(e.callback(t),!0):void 0})):!1},navigate:function(t,e){if(!N.started)return!1;e&&e!==!0||(e={trigger:!!e}),t=this.getFragment(t||"");var i=this.root;(""===t||"?"===t.charAt(0))&&(i=i.slice(0,-1)||"/");var n=i+t;if(t=this.decodeFragment(t.replace(U,"")),this.fragment!==t){if(this.fragment=t,this._usePushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,n);else{if(!this._wantsHashChange)return this.location.assign(n);if(this._updateHash(this.location,t,e.replace),this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var s=this.iframe.contentWindow;e.replace||(s.document.open(),s.document.close()),this._updateHash(s.location,t,e.replace)}}return e.trigger?this.loadUrl(t):void 0}},_updateHash:function(t,e,i){if(i){var n=t.href.replace(/(javascript:|#).*$/,"");t.replace(n+"#"+e)}else t.hash="#"+e}}),e.history=new N;var q=function(t,e){var n,s=this;return n=t&&i.has(t,"constructor")?t.constructor:function(){return s.apply(this,arguments)},i.extend(n,s,e),n.prototype=i.create(s.prototype,t),n.prototype.constructor=n,n.__super__=s.prototype,n};y.extend=x.extend=$.extend=k.extend=N.extend=q;var F=function(){throw new Error('A "url" property or function must be specified')},B=function(t,e){var i=e.error;e.error=function(n){i&&i.call(e.context,t,n,e),t.trigger("error",t,n,e)}};return e});