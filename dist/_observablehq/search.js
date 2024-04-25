var Ee=Object.defineProperty;var O=(r,e)=>Ee(r,"name",{value:e,configurable:!0});var Ce=Object.defineProperty,A=O((r,e)=>Ce(r,"name",{value:e,configurable:!0}),"A"),k=A(function(){return k=Object.assign||A(function(r){for(var e,t=1,o=arguments.length;t<o;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i])}return r},"__assign"),k.apply(this,arguments)},"__assign");function ce(r,e,t,o){function i(n){return n instanceof t?n:new t(function(u){u(n)})}return O(i,"a"),A(i,"adopt"),new(t||(t=Promise))(function(n,u){function a(c){try{l(o.next(c))}catch(h){u(h)}}O(a,"o"),A(a,"fulfilled");function s(c){try{l(o.throw(c))}catch(h){u(h)}}O(s,"l"),A(s,"rejected");function l(c){c.done?n(c.value):i(c.value).then(a,s)}O(l,"h"),A(l,"step"),l((o=o.apply(r,e||[])).next())})}O(ce,"vt"),A(ce,"__awaiter");function he(r,e){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},o,i,n,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(l){return function(c){return s([l,c])}}function s(l){if(o)throw new TypeError("Generator is already executing.");for(;u&&(u=0,l[0]&&(t=0)),t;)try{if(o=1,i&&(n=l[0]&2?i.return:l[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,l[1])).done)return n;switch(i=0,n&&(l=[l[0]&2,n.value]),l[0]){case 0:case 1:n=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(n=t.trys,!(n=n.length>0&&n[n.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!n||l[1]>n[0]&&l[1]<n[3])){t.label=l[1];break}if(l[0]===6&&t.label<n[1]){t.label=n[1],n=l;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(l);break}n[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(r,t)}catch(c){l=[6,c],i=0}finally{o=n=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}O(he,"dt"),A(he,"__generator");function g(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],o=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&o>=r.length&&(r=void 0),{value:r&&r[o++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}O(g,"g"),A(g,"__values");function V(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var o=t.call(r),i,n=[],u;try{for(;(e===void 0||e-- >0)&&!(i=o.next()).done;)n.push(i.value)}catch(a){u={error:a}}finally{try{i&&!i.done&&(t=o.return)&&t.call(o)}finally{if(u)throw u.error}}return n}O(V,"I"),A(V,"__read"),typeof SuppressedError=="function"&&SuppressedError;var ze="ENTRIES",de="KEYS",fe="VALUES",L="",Y=function(){function r(e,t){var o=e._tree,i=Array.from(o.keys());this.set=e,this._type=t,this._path=i.length>0?[{node:o,keys:i}]:[]}return O(r,"i"),A(r,"TreeIterator"),r.prototype.next=function(){var e=this.dive();return this.backtrack(),e},r.prototype.dive=function(){if(this._path.length===0)return{done:!0,value:void 0};var e=R(this._path),t=e.node,o=e.keys;if(R(o)===L)return{done:!1,value:this.result()};var i=t.get(R(o));return this._path.push({node:i,keys:Array.from(i.keys())}),this.dive()},r.prototype.backtrack=function(){if(this._path.length!==0){var e=R(this._path).keys;e.pop(),!(e.length>0)&&(this._path.pop(),this.backtrack())}},r.prototype.key=function(){return this.set._prefix+this._path.map(function(e){var t=e.keys;return R(t)}).filter(function(e){return e!==L}).join("")},r.prototype.value=function(){return R(this._path).node.get(L)},r.prototype.result=function(){switch(this._type){case fe:return this.value();case de:return this.key();default:return[this.key(),this.value()]}},r.prototype[Symbol.iterator]=function(){return this},r}(),R=A(function(r){return r[r.length-1]},"last$1"),Ie=A(function(r,e,t){var o=new Map;if(e===void 0)return o;for(var i=e.length+1,n=i+t,u=new Uint8Array(n*i).fill(t+1),a=0;a<i;++a)u[a]=a;for(var s=1;s<n;++s)u[s*i]=s;return ve(r,e,t,o,u,1,i,""),o},"fuzzySearch"),ve=A(function(r,e,t,o,i,n,u,a){var s,l,c=n*u;try{e:for(var h=g(r.keys()),d=h.next();!d.done;d=h.next()){var f=d.value;if(f===L){var y=i[c-1];y<=t&&o.set(a,[r.get(f),y])}else{for(var p=n,v=0;v<f.length;++v,++p){for(var _=f[v],F=u*p,m=F-u,S=i[F],E=Math.max(0,p-t-1),M=Math.min(u-1,p+t),w=E;w<M;++w){var b=_!==e[w],C=i[m+w]+ +b,z=i[m+w+1]+1,D=i[F+w]+1,x=i[F+w+1]=Math.min(C,z,D);x<S&&(S=x)}if(S>t)continue e}ve(r.get(f),e,t,o,i,p,u,a+f)}}}catch(T){s={error:T}}finally{try{d&&!d.done&&(l=h.return)&&l.call(h)}finally{if(s)throw s.error}}},"recurse"),X=function(){function r(e,t){e===void 0&&(e=new Map),t===void 0&&(t=""),this._size=void 0,this._tree=e,this._prefix=t}return O(r,"i"),A(r,"SearchableMap"),r.prototype.atPrefix=function(e){var t,o;if(!e.startsWith(this._prefix))throw new Error("Mismatched prefix");var i=V(N(this._tree,e.slice(this._prefix.length)),2),n=i[0],u=i[1];if(n===void 0){var a=V(te(u),2),s=a[0],l=a[1];try{for(var c=g(s.keys()),h=c.next();!h.done;h=c.next()){var d=h.value;if(d!==L&&d.startsWith(l)){var f=new Map;return f.set(d.slice(l.length),s.get(d)),new r(f,e)}}}catch(y){t={error:y}}finally{try{h&&!h.done&&(o=c.return)&&o.call(c)}finally{if(t)throw t.error}}}return new r(n,e)},r.prototype.clear=function(){this._size=void 0,this._tree.clear()},r.prototype.delete=function(e){return this._size=void 0,ke(this._tree,e)},r.prototype.entries=function(){return new Y(this,ze)},r.prototype.forEach=function(e){var t,o;try{for(var i=g(this),n=i.next();!n.done;n=i.next()){var u=V(n.value,2),a=u[0],s=u[1];e(a,s,this)}}catch(l){t={error:l}}finally{try{n&&!n.done&&(o=i.return)&&o.call(i)}finally{if(t)throw t.error}}},r.prototype.fuzzyGet=function(e,t){return Ie(this._tree,e,t)},r.prototype.get=function(e){var t=Z(this._tree,e);return t!==void 0?t.get(L):void 0},r.prototype.has=function(e){var t=Z(this._tree,e);return t!==void 0&&t.has(L)},r.prototype.keys=function(){return new Y(this,de)},r.prototype.set=function(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var o=ee(this._tree,e);return o.set(L,t),this},Object.defineProperty(r.prototype,"size",{get:function(){if(this._size)return this._size;this._size=0;for(var e=this.entries();!e.next().done;)this._size+=1;return this._size},enumerable:!1,configurable:!0}),r.prototype.update=function(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var o=ee(this._tree,e);return o.set(L,t(o.get(L))),this},r.prototype.fetch=function(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var o=ee(this._tree,e),i=o.get(L);return i===void 0&&o.set(L,i=t()),i},r.prototype.values=function(){return new Y(this,fe)},r.prototype[Symbol.iterator]=function(){return this.entries()},r.from=function(e){var t,o,i=new r;try{for(var n=g(e),u=n.next();!u.done;u=n.next()){var a=V(u.value,2),s=a[0],l=a[1];i.set(s,l)}}catch(c){t={error:c}}finally{try{u&&!u.done&&(o=n.return)&&o.call(n)}finally{if(t)throw t.error}}return i},r.fromObject=function(e){return r.from(Object.entries(e))},r}(),N=A(function(r,e,t){var o,i;if(t===void 0&&(t=[]),e.length===0||r==null)return[r,t];try{for(var n=g(r.keys()),u=n.next();!u.done;u=n.next()){var a=u.value;if(a!==L&&e.startsWith(a))return t.push([r,a]),N(r.get(a),e.slice(a.length),t)}}catch(s){o={error:s}}finally{try{u&&!u.done&&(i=n.return)&&i.call(n)}finally{if(o)throw o.error}}return t.push([r,e]),N(void 0,"",t)},"trackDown"),Z=A(function(r,e){var t,o;if(e.length===0||r==null)return r;try{for(var i=g(r.keys()),n=i.next();!n.done;n=i.next()){var u=n.value;if(u!==L&&e.startsWith(u))return Z(r.get(u),e.slice(u.length))}}catch(a){t={error:a}}finally{try{n&&!n.done&&(o=i.return)&&o.call(i)}finally{if(t)throw t.error}}},"lookup"),ee=A(function(r,e){var t,o,i=e.length;e:for(var n=0;r&&n<i;){try{for(var u=(t=void 0,g(r.keys())),a=u.next();!a.done;a=u.next()){var s=a.value;if(s!==L&&e[n]===s[0]){for(var l=Math.min(i-n,s.length),c=1;c<l&&e[n+c]===s[c];)++c;var h=r.get(s);if(c===s.length)r=h;else{var d=new Map;d.set(s.slice(c),h),r.set(e.slice(n,n+c),d),r.delete(s),r=d}n+=c;continue e}}}catch(y){t={error:y}}finally{try{a&&!a.done&&(o=u.return)&&o.call(u)}finally{if(t)throw t.error}}var f=new Map;return r.set(e.slice(n),f),f}return r},"createPath"),ke=A(function(r,e){var t=V(N(r,e),2),o=t[0],i=t[1];if(o!==void 0){if(o.delete(L),o.size===0)ye(i);else if(o.size===1){var n=V(o.entries().next().value,2),u=n[0],a=n[1];pe(i,u,a)}}},"remove"),ye=A(function(r){if(r.length!==0){var e=V(te(r),2),t=e[0],o=e[1];if(t.delete(o),t.size===0)ye(r.slice(0,-1));else if(t.size===1){var i=V(t.entries().next().value,2),n=i[0],u=i[1];n!==L&&pe(r.slice(0,-1),n,u)}}},"cleanup"),pe=A(function(r,e,t){if(r.length!==0){var o=V(te(r),2),i=o[0],n=o[1];i.set(n+e,t),i.delete(n)}},"merge"),te=A(function(r){return r[r.length-1]},"last"),J,re="or",me="and",De="and_not",Me=function(){function r(e){if(e?.fields==null)throw new Error('MiniSearch: option "fields" must be provided');var t=e.autoVacuum==null||e.autoVacuum===!0?ae:e.autoVacuum;this._options=k(k(k({},oe),e),{autoVacuum:t,searchOptions:k(k({},ge),e.searchOptions||{}),autoSuggestOptions:k(k({},je),e.autoSuggestOptions||{})}),this._index=new X,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=ue,this.addFields(this._options.fields)}return O(r,"i"),A(r,"MiniSearch"),r.prototype.add=function(e){var t,o,i,n,u,a,s=this._options,l=s.extractField,c=s.tokenize,h=s.processTerm,d=s.fields,f=s.idField,y=l(e,f);if(y==null)throw new Error('MiniSearch: document does not have ID field "'.concat(f,'"'));if(this._idToShortId.has(y))throw new Error("MiniSearch: duplicate ID ".concat(y));var p=this.addDocumentId(y);this.saveStoredFields(p,e);try{for(var v=g(d),_=v.next();!_.done;_=v.next()){var F=_.value,m=l(e,F);if(m!=null){var S=c(m.toString(),F),E=this._fieldIds[F],M=new Set(S).size;this.addFieldLength(p,E,this._documentCount-1,M);try{for(var w=(i=void 0,g(S)),b=w.next();!b.done;b=w.next()){var C=b.value,z=h(C,F);if(Array.isArray(z))try{for(var D=(u=void 0,g(z)),x=D.next();!x.done;x=D.next()){var T=x.value;this.addTerm(E,p,T)}}catch(I){u={error:I}}finally{try{x&&!x.done&&(a=D.return)&&a.call(D)}finally{if(u)throw u.error}}else z&&this.addTerm(E,p,z)}}catch(I){i={error:I}}finally{try{b&&!b.done&&(n=w.return)&&n.call(w)}finally{if(i)throw i.error}}}}}catch(I){t={error:I}}finally{try{_&&!_.done&&(o=v.return)&&o.call(v)}finally{if(t)throw t.error}}},r.prototype.addAll=function(e){var t,o;try{for(var i=g(e),n=i.next();!n.done;n=i.next()){var u=n.value;this.add(u)}}catch(a){t={error:a}}finally{try{n&&!n.done&&(o=i.return)&&o.call(i)}finally{if(t)throw t.error}}},r.prototype.addAllAsync=function(e,t){var o=this;t===void 0&&(t={});var i=t.chunkSize,n=i===void 0?10:i,u={chunk:[],promise:Promise.resolve()},a=e.reduce(function(c,h,d){var f=c.chunk,y=c.promise;return f.push(h),(d+1)%n===0?{chunk:[],promise:y.then(function(){return new Promise(function(p){return setTimeout(p,0)})}).then(function(){return o.addAll(f)})}:{chunk:f,promise:y}},u),s=a.chunk,l=a.promise;return l.then(function(){return o.addAll(s)})},r.prototype.remove=function(e){var t,o,i,n,u,a,s=this._options,l=s.tokenize,c=s.processTerm,h=s.extractField,d=s.fields,f=s.idField,y=h(e,f);if(y==null)throw new Error('MiniSearch: document does not have ID field "'.concat(f,'"'));var p=this._idToShortId.get(y);if(p==null)throw new Error("MiniSearch: cannot remove document with ID ".concat(y,": it is not in the index"));try{for(var v=g(d),_=v.next();!_.done;_=v.next()){var F=_.value,m=h(e,F);if(m!=null){var S=l(m.toString(),F),E=this._fieldIds[F],M=new Set(S).size;this.removeFieldLength(p,E,this._documentCount,M);try{for(var w=(i=void 0,g(S)),b=w.next();!b.done;b=w.next()){var C=b.value,z=c(C,F);if(Array.isArray(z))try{for(var D=(u=void 0,g(z)),x=D.next();!x.done;x=D.next()){var T=x.value;this.removeTerm(E,p,T)}}catch(I){u={error:I}}finally{try{x&&!x.done&&(a=D.return)&&a.call(D)}finally{if(u)throw u.error}}else z&&this.removeTerm(E,p,z)}}catch(I){i={error:I}}finally{try{b&&!b.done&&(n=w.return)&&n.call(w)}finally{if(i)throw i.error}}}}}catch(I){t={error:I}}finally{try{_&&!_.done&&(o=v.return)&&o.call(v)}finally{if(t)throw t.error}}this._storedFields.delete(p),this._documentIds.delete(p),this._idToShortId.delete(y),this._fieldLength.delete(p),this._documentCount-=1},r.prototype.removeAll=function(e){var t,o;if(e)try{for(var i=g(e),n=i.next();!n.done;n=i.next()){var u=n.value;this.remove(u)}}catch(a){t={error:a}}finally{try{n&&!n.done&&(o=i.return)&&o.call(i)}finally{if(t)throw t.error}}else{if(arguments.length>0)throw new Error("Expected documents to be present. Omit the argument to remove all documents.");this._index=new X,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldLength=new Map,this._avgFieldLength=[],this._storedFields=new Map,this._nextId=0}},r.prototype.discard=function(e){var t=this,o=this._idToShortId.get(e);if(o==null)throw new Error("MiniSearch: cannot discard document with ID ".concat(e,": it is not in the index"));this._idToShortId.delete(e),this._documentIds.delete(o),this._storedFields.delete(o),(this._fieldLength.get(o)||[]).forEach(function(i,n){t.removeFieldLength(o,n,t._documentCount,i)}),this._fieldLength.delete(o),this._documentCount-=1,this._dirtCount+=1,this.maybeAutoVacuum()},r.prototype.maybeAutoVacuum=function(){if(this._options.autoVacuum!==!1){var e=this._options.autoVacuum,t=e.minDirtFactor,o=e.minDirtCount,i=e.batchSize,n=e.batchWait;this.conditionalVacuum({batchSize:i,batchWait:n},{minDirtCount:o,minDirtFactor:t})}},r.prototype.discardAll=function(e){var t,o,i=this._options.autoVacuum;try{this._options.autoVacuum=!1;try{for(var n=g(e),u=n.next();!u.done;u=n.next()){var a=u.value;this.discard(a)}}catch(s){t={error:s}}finally{try{u&&!u.done&&(o=n.return)&&o.call(n)}finally{if(t)throw t.error}}}finally{this._options.autoVacuum=i}this.maybeAutoVacuum()},r.prototype.replace=function(e){var t=this._options,o=t.idField,i=t.extractField,n=i(e,o);this.discard(n),this.add(e)},r.prototype.vacuum=function(e){return e===void 0&&(e={}),this.conditionalVacuum(e)},r.prototype.conditionalVacuum=function(e,t){var o=this;return this._currentVacuum?(this._enqueuedVacuumConditions=this._enqueuedVacuumConditions&&t,this._enqueuedVacuum!=null?this._enqueuedVacuum:(this._enqueuedVacuum=this._currentVacuum.then(function(){var i=o._enqueuedVacuumConditions;return o._enqueuedVacuumConditions=ue,o.performVacuuming(e,i)}),this._enqueuedVacuum)):this.vacuumConditionsMet(t)===!1?Promise.resolve():(this._currentVacuum=this.performVacuuming(e),this._currentVacuum)},r.prototype.performVacuuming=function(e,t){return ce(this,void 0,void 0,function(){var o,i,n,u,a,s,l,c,h,d,f,y,p,v,_,F,m,S,E,M,w,b,C,z,D;return he(this,function(x){switch(x.label){case 0:if(o=this._dirtCount,!this.vacuumConditionsMet(t))return[3,10];i=e.batchSize||ie.batchSize,n=e.batchWait||ie.batchWait,u=1,x.label=1;case 1:x.trys.push([1,7,8,9]),a=g(this._index),s=a.next(),x.label=2;case 2:if(s.done)return[3,6];l=V(s.value,2),c=l[0],h=l[1];try{for(d=(b=void 0,g(h)),f=d.next();!f.done;f=d.next()){y=V(f.value,2),p=y[0],v=y[1];try{for(_=(z=void 0,g(v)),F=_.next();!F.done;F=_.next())m=V(F.value,1),S=m[0],!this._documentIds.has(S)&&(v.size<=1?h.delete(p):v.delete(S))}catch(T){z={error:T}}finally{try{F&&!F.done&&(D=_.return)&&D.call(_)}finally{if(z)throw z.error}}}}catch(T){b={error:T}}finally{try{f&&!f.done&&(C=d.return)&&C.call(d)}finally{if(b)throw b.error}}return this._index.get(c).size===0&&this._index.delete(c),u%i!==0?[3,4]:[4,new Promise(function(T){return setTimeout(T,n)})];case 3:x.sent(),x.label=4;case 4:u+=1,x.label=5;case 5:return s=a.next(),[3,2];case 6:return[3,9];case 7:return E=x.sent(),M={error:E},[3,9];case 8:try{s&&!s.done&&(w=a.return)&&w.call(a)}finally{if(M)throw M.error}return[7];case 9:this._dirtCount-=o,x.label=10;case 10:return[4,null];case 11:return x.sent(),this._currentVacuum=this._enqueuedVacuum,this._enqueuedVacuum=null,[2]}})})},r.prototype.vacuumConditionsMet=function(e){if(e==null)return!0;var t=e.minDirtCount,o=e.minDirtFactor;return t=t||ae.minDirtCount,o=o||ae.minDirtFactor,this.dirtCount>=t&&this.dirtFactor>=o},Object.defineProperty(r.prototype,"isVacuuming",{get:function(){return this._currentVacuum!=null},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dirtCount",{get:function(){return this._dirtCount},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dirtFactor",{get:function(){return this._dirtCount/(1+this._documentCount+this._dirtCount)},enumerable:!1,configurable:!0}),r.prototype.has=function(e){return this._idToShortId.has(e)},r.prototype.getStoredFields=function(e){var t=this._idToShortId.get(e);if(t!=null)return this._storedFields.get(t)},r.prototype.search=function(e,t){var o,i;t===void 0&&(t={});var n=this.executeQuery(e,t),u=[];try{for(var a=g(n),s=a.next();!s.done;s=a.next()){var l=V(s.value,2),c=l[0],h=l[1],d=h.score,f=h.terms,y=h.match,p=f.length||1,v={id:this._documentIds.get(c),score:d*p,terms:Object.keys(y),queryTerms:f,match:y};Object.assign(v,this._storedFields.get(c)),(t.filter==null||t.filter(v))&&u.push(v)}}catch(_){o={error:_}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(o)throw o.error}}return e===r.wildcard&&t.boostDocument==null&&this._options.searchOptions.boostDocument==null||u.sort(Fe),u},r.prototype.autoSuggest=function(e,t){var o,i,n,u;t===void 0&&(t={}),t=k(k({},this._options.autoSuggestOptions),t);var a=new Map;try{for(var s=g(this.search(e,t)),l=s.next();!l.done;l=s.next()){var c=l.value,h=c.score,d=c.terms,f=d.join(" "),y=a.get(f);y!=null?(y.score+=h,y.count+=1):a.set(f,{score:h,terms:d,count:1})}}catch(E){o={error:E}}finally{try{l&&!l.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}var p=[];try{for(var v=g(a),_=v.next();!_.done;_=v.next()){var F=V(_.value,2),y=F[0],m=F[1],h=m.score,d=m.terms,S=m.count;p.push({suggestion:y,terms:d,score:h/S})}}catch(E){n={error:E}}finally{try{_&&!_.done&&(u=v.return)&&u.call(v)}finally{if(n)throw n.error}}return p.sort(Fe),p},Object.defineProperty(r.prototype,"documentCount",{get:function(){return this._documentCount},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"termCount",{get:function(){return this._index.size},enumerable:!1,configurable:!0}),r.loadJSON=function(e,t){if(t==null)throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");return this.loadJS(JSON.parse(e),t)},r.getDefault=function(e){if(oe.hasOwnProperty(e))return ne(oe,e);throw new Error('MiniSearch: unknown option "'.concat(e,'"'))},r.loadJS=function(e,t){var o,i,n,u,a,s,l=e.index,c=e.documentCount,h=e.nextId,d=e.documentIds,f=e.fieldIds,y=e.fieldLength,p=e.averageFieldLength,v=e.storedFields,_=e.dirtCount,F=e.serializationVersion;if(F!==1&&F!==2)throw new Error("MiniSearch: cannot deserialize an index created with an incompatible version");var m=new r(t);m._documentCount=c,m._nextId=h,m._documentIds=U(d),m._idToShortId=new Map,m._fieldIds=f,m._fieldLength=U(y),m._avgFieldLength=p,m._storedFields=U(v),m._dirtCount=_||0,m._index=new X;try{for(var S=g(m._documentIds),E=S.next();!E.done;E=S.next()){var M=V(E.value,2),w=M[0],b=M[1];m._idToShortId.set(b,w)}}catch(B){o={error:B}}finally{try{E&&!E.done&&(i=S.return)&&i.call(S)}finally{if(o)throw o.error}}try{for(var C=g(l),z=C.next();!z.done;z=C.next()){var D=V(z.value,2),x=D[0],T=D[1],I=new Map;try{for(var q=(a=void 0,g(Object.keys(T))),j=q.next();!j.done;j=q.next()){var P=j.value,$=T[P];F===1&&($=$.ds),I.set(parseInt(P,10),U($))}}catch(B){a={error:B}}finally{try{j&&!j.done&&(s=q.return)&&s.call(q)}finally{if(a)throw a.error}}m._index.set(x,I)}}catch(B){n={error:B}}finally{try{z&&!z.done&&(u=C.return)&&u.call(C)}finally{if(n)throw n.error}}return m},r.prototype.executeQuery=function(e,t){var o=this;if(t===void 0&&(t={}),e===r.wildcard)return this.executeWildcardQuery(t);if(typeof e!="string"){var i=k(k(k({},t),e),{queries:void 0}),n=e.queries.map(function(v){return o.executeQuery(v,i)});return this.combineResults(n,i.combineWith)}var u=this._options,a=u.tokenize,s=u.processTerm,l=u.searchOptions,c=k(k({tokenize:a,processTerm:s},l),t),h=c.tokenize,d=c.processTerm,f=h(e).flatMap(function(v){return d(v)}).filter(function(v){return!!v}),y=f.map(Le(c)),p=y.map(function(v){return o.executeQuerySpec(v,c)});return this.combineResults(p,c.combineWith)},r.prototype.executeQuerySpec=function(e,t){var o,i,n,u,a=k(k({},this._options.searchOptions),t),s=(a.fields||this._options.fields).reduce(function(P,$){var B;return k(k({},P),(B={},B[$]=ne(a.boost,$)||1,B))},{}),l=a.boostDocument,c=a.weights,h=a.maxFuzzy,d=a.bm25,f=k(k({},ge.weights),c),y=f.fuzzy,p=f.prefix,v=this._index.get(e.term),_=this.termResults(e.term,e.term,1,v,s,l,d),F,m;if(e.prefix&&(F=this._index.atPrefix(e.term)),e.fuzzy){var S=e.fuzzy===!0?.2:e.fuzzy,E=S<1?Math.min(h,Math.round(e.term.length*S)):S;E&&(m=this._index.fuzzyGet(e.term,E))}if(F)try{for(var M=g(F),w=M.next();!w.done;w=M.next()){var b=V(w.value,2),C=b[0],z=b[1],D=C.length-e.term.length;if(D){m?.delete(C);var x=p*C.length/(C.length+.3*D);this.termResults(e.term,C,x,z,s,l,d,_)}}}catch(P){o={error:P}}finally{try{w&&!w.done&&(i=M.return)&&i.call(M)}finally{if(o)throw o.error}}if(m)try{for(var T=g(m.keys()),I=T.next();!I.done;I=T.next()){var C=I.value,q=V(m.get(C),2),j=q[0],D=q[1];if(D){var x=y*C.length/(C.length+D);this.termResults(e.term,C,x,j,s,l,d,_)}}}catch(P){n={error:P}}finally{try{I&&!I.done&&(u=T.return)&&u.call(T)}finally{if(n)throw n.error}}return _},r.prototype.executeWildcardQuery=function(e){var t,o,i=new Map,n=k(k({},this._options.searchOptions),e);try{for(var u=g(this._documentIds),a=u.next();!a.done;a=u.next()){var s=V(a.value,2),l=s[0],c=s[1],h=n.boostDocument?n.boostDocument(c,"",this._storedFields.get(l)):1;i.set(l,{score:h,terms:[],match:{}})}}catch(d){t={error:d}}finally{try{a&&!a.done&&(o=u.return)&&o.call(u)}finally{if(t)throw t.error}}return i},r.prototype.combineResults=function(e,t){if(t===void 0&&(t=re),e.length===0)return new Map;var o=t.toLowerCase();return e.reduce(Te[o])||new Map},r.prototype.toJSON=function(){var e,t,o,i,n=[];try{for(var u=g(this._index),a=u.next();!a.done;a=u.next()){var s=V(a.value,2),l=s[0],c=s[1],h={};try{for(var d=(o=void 0,g(c)),f=d.next();!f.done;f=d.next()){var y=V(f.value,2),p=y[0],v=y[1];h[p]=Object.fromEntries(v)}}catch(_){o={error:_}}finally{try{f&&!f.done&&(i=d.return)&&i.call(d)}finally{if(o)throw o.error}}n.push([l,h])}}catch(_){e={error:_}}finally{try{a&&!a.done&&(t=u.return)&&t.call(u)}finally{if(e)throw e.error}}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:n,serializationVersion:2}},r.prototype.termResults=function(e,t,o,i,n,u,a,s){var l,c,h,d,f;if(s===void 0&&(s=new Map),i==null)return s;try{for(var y=g(Object.keys(n)),p=y.next();!p.done;p=y.next()){var v=p.value,_=n[v],F=this._fieldIds[v],m=i.get(F);if(m!=null){var S=m.size,E=this._avgFieldLength[F];try{for(var M=(h=void 0,g(m.keys())),w=M.next();!w.done;w=M.next()){var b=w.value;if(!this._documentIds.has(b)){this.removeTerm(F,b,t),S-=1;continue}var C=u?u(this._documentIds.get(b),t,this._storedFields.get(b)):1;if(C){var z=m.get(b),D=this._fieldLength.get(b)[F],x=Oe(z,S,this._documentCount,D,E,a),T=o*_*C*x,I=s.get(b);if(I){I.score+=T,qe(I.terms,e);var q=ne(I.match,t);q?q.push(v):I.match[t]=[v]}else s.set(b,{score:T,terms:[e],match:(f={},f[t]=[v],f)})}}}catch(j){h={error:j}}finally{try{w&&!w.done&&(d=M.return)&&d.call(M)}finally{if(h)throw h.error}}}}}catch(j){l={error:j}}finally{try{p&&!p.done&&(c=y.return)&&c.call(y)}finally{if(l)throw l.error}}return s},r.prototype.addTerm=function(e,t,o){var i=this._index.fetch(o,we),n=i.get(e);if(n==null)n=new Map,n.set(t,1),i.set(e,n);else{var u=n.get(t);n.set(t,(u||0)+1)}},r.prototype.removeTerm=function(e,t,o){if(!this._index.has(o)){this.warnDocumentChanged(t,e,o);return}var i=this._index.fetch(o,we),n=i.get(e);n==null||n.get(t)==null?this.warnDocumentChanged(t,e,o):n.get(t)<=1?n.size<=1?i.delete(e):n.delete(t):n.set(t,n.get(t)-1),this._index.get(o).size===0&&this._index.delete(o)},r.prototype.warnDocumentChanged=function(e,t,o){var i,n;try{for(var u=g(Object.keys(this._fieldIds)),a=u.next();!a.done;a=u.next()){var s=a.value;if(this._fieldIds[s]===t){this._options.logger("warn","MiniSearch: document with ID ".concat(this._documentIds.get(e),' has changed before removal: term "').concat(o,'" was not present in field "').concat(s,'". Removing a document after it has changed can corrupt the index!'),"version_conflict");return}}}catch(l){i={error:l}}finally{try{a&&!a.done&&(n=u.return)&&n.call(u)}finally{if(i)throw i.error}}},r.prototype.addDocumentId=function(e){var t=this._nextId;return this._idToShortId.set(e,t),this._documentIds.set(t,e),this._documentCount+=1,this._nextId+=1,t},r.prototype.addFields=function(e){for(var t=0;t<e.length;t++)this._fieldIds[e[t]]=t},r.prototype.addFieldLength=function(e,t,o,i){var n=this._fieldLength.get(e);n==null&&this._fieldLength.set(e,n=[]),n[t]=i;var u=this._avgFieldLength[t]||0,a=u*o+i;this._avgFieldLength[t]=a/(o+1)},r.prototype.removeFieldLength=function(e,t,o,i){if(o===1){this._avgFieldLength[t]=0;return}var n=this._avgFieldLength[t]*o-i;this._avgFieldLength[t]=n/(o-1)},r.prototype.saveStoredFields=function(e,t){var o,i,n=this._options,u=n.storeFields,a=n.extractField;if(!(u==null||u.length===0)){var s=this._storedFields.get(e);s==null&&this._storedFields.set(e,s={});try{for(var l=g(u),c=l.next();!c.done;c=l.next()){var h=c.value,d=a(t,h);d!==void 0&&(s[h]=d)}}catch(f){o={error:f}}finally{try{c&&!c.done&&(i=l.return)&&i.call(l)}finally{if(o)throw o.error}}}},r.wildcard=Symbol("*"),r}(),ne=A(function(r,e){return Object.prototype.hasOwnProperty.call(r,e)?r[e]:void 0},"getOwnProperty"),Te=(J={},J[re]=function(r,e){var t,o;try{for(var i=g(e.keys()),n=i.next();!n.done;n=i.next()){var u=n.value,a=r.get(u);if(a==null)r.set(u,e.get(u));else{var s=e.get(u),l=s.score,c=s.terms,h=s.match;a.score=a.score+l,a.match=Object.assign(a.match,h),_e(a.terms,c)}}}catch(d){t={error:d}}finally{try{n&&!n.done&&(o=i.return)&&o.call(i)}finally{if(t)throw t.error}}return r},J[me]=function(r,e){var t,o,i=new Map;try{for(var n=g(e.keys()),u=n.next();!u.done;u=n.next()){var a=u.value,s=r.get(a);if(s!=null){var l=e.get(a),c=l.score,h=l.terms,d=l.match;_e(s.terms,h),i.set(a,{score:s.score+c,terms:s.terms,match:Object.assign(s.match,d)})}}}catch(f){t={error:f}}finally{try{u&&!u.done&&(o=n.return)&&o.call(n)}finally{if(t)throw t.error}}return i},J[De]=function(r,e){var t,o;try{for(var i=g(e.keys()),n=i.next();!n.done;n=i.next()){var u=n.value;r.delete(u)}}catch(a){t={error:a}}finally{try{n&&!n.done&&(o=i.return)&&o.call(i)}finally{if(t)throw t.error}}return r},J),Ve={k:1.2,b:.7,d:.5},Oe=A(function(r,e,t,o,i,n){var u=n.k,a=n.b,s=n.d,l=Math.log(1+(t-e+.5)/(e+.5));return l*(s+r*(u+1)/(r+u*(1-a+a*o/i)))},"calcBM25Score"),Le=A(function(r){return function(e,t,o){var i=typeof r.fuzzy=="function"?r.fuzzy(e,t,o):r.fuzzy||!1,n=typeof r.prefix=="function"?r.prefix(e,t,o):r.prefix===!0;return{term:e,fuzzy:i,prefix:n}}},"termToQuerySpec"),oe={idField:"id",extractField:function(r,e){return r[e]},tokenize:function(r){return r.split(Be)},processTerm:function(r){return r.toLowerCase()},fields:void 0,searchOptions:void 0,storeFields:[],logger:function(r,e){typeof console?.[r]=="function"&&console[r](e)},autoVacuum:!0},ge={combineWith:re,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:Ve},je={combineWith:me,prefix:function(r,e,t){return e===t.length-1}},ie={batchSize:1e3,batchWait:10},ue={minDirtFactor:.1,minDirtCount:20},ae=k(k({},ie),ue),qe=A(function(r,e){r.includes(e)||r.push(e)},"assignUniqueTerm"),_e=A(function(r,e){var t,o;try{for(var i=g(e),n=i.next();!n.done;n=i.next()){var u=n.value;r.includes(u)||r.push(u)}}catch(a){t={error:a}}finally{try{n&&!n.done&&(o=i.return)&&o.call(i)}finally{if(t)throw t.error}}},"assignUniqueTerms"),Fe=A(function(r,e){var t=r.score,o=e.score;return o-t},"byScore"),we=A(function(){return new Map},"createMap"),U=A(function(r){var e,t,o=new Map;try{for(var i=g(Object.keys(r)),n=i.next();!n.done;n=i.next()){var u=n.value;o.set(parseInt(u,10),r[u])}}catch(a){e={error:a}}finally{try{n&&!n.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}return o},"objectToNumericMap"),Be=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,Pe=Object.defineProperty,Q=O((r,e)=>Pe(r,"name",{value:e,configurable:!0}),"o");const G=document.querySelector("#observablehq-search"),xe=document.querySelector("#observablehq-sidebar"),We=G.getAttribute("data-shortcut"),W=G.querySelector("input"),se=document.querySelector("#observablehq-search-results"),H="observablehq-link-active";let K;const $e=await fetch(import.meta.resolve("./minisearch.5c24541c.json")).then(r=>{if(!r.ok)throw new Error(`unable to load minisearch.json: ${r.status}`);return r.json()}).then(r=>Me.loadJS(r,{...r.options,processTerm:e=>e.slice(0,15).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}));W.addEventListener("input",()=>{if(K===W.value)return;if(K=W.value,!K.length){G.setAttribute("data-shortcut",We),xe.classList.remove("observablehq-search-results"),se.innerHTML="";return}G.setAttribute("data-shortcut",""),xe.classList.add("observablehq-search-results");const r=$e.search(K,{boost:{title:4,keywords:4},fuzzy:.15,prefix:!0});se.innerHTML=r.length===0?"<div>no results</div>":`<div>${r.length.toLocaleString("en-US")} result${r.length===1?"":"s"}</div><ol>${r.map(be).join("")}</ol>`});function be({id:r,score:e,title:t},o){return`<li data-score="${Math.min(5,Math.round(.6*e))}" class="observablehq-link${o===0?` ${H}`:""}"><a href="${Ae(import.meta.resolve(`../${r}`))}">${Se(String(t??"\u2014"))}</a></li>`}O(be,"f"),Q(be,"renderResult");function Ae(r){return r.replace(/["&]/g,le)}O(Ae,"p"),Q(Ae,"escapeDoubleQuote");function Se(r){return r.replace(/[<&]/g,le)}O(Se,"S"),Q(Se,"escapeText");function le(r){return`&#${r.charCodeAt(0).toString()};`}O(le,"h"),Q(le,"entity"),W.dispatchEvent(new Event("input")),W.addEventListener("keydown",r=>{const{code:e}=r;if(e==="Escape"&&W.value==="")return W.blur();if(e==="ArrowDown"||e==="ArrowUp"||e==="Enter"){const t=se.querySelector("ol");if(!t)return;let o=t.querySelector(`.${H}`);if(e==="Enter")return o.querySelector("a").click();o.classList.remove(H),e==="ArrowUp"?o=o.previousElementSibling??t.lastElementChild:o=o.nextElementSibling??t.firstElementChild,o.classList.add(H),o.scrollIntoView({block:"nearest"})}});
