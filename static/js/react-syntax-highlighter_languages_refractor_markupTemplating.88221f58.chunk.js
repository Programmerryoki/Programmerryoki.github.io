(this["webpackJsonpmy-page"]=this["webpackJsonpmy-page"]||[]).push([[81],{71:function(e,n,t){"use strict";function a(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,c=i.length;-1!==t.code.indexOf(o=n(a,c));)++c;return i[c]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function i(c){for(var p=0;p<c.length&&!(o>=r.length);p++){var s=c[p];if("string"===typeof s||s.content&&"string"===typeof s.content){var u=r[o],g=t.tokenStack[u],l="string"===typeof s?s:s.content,f=n(a,u),k=l.indexOf(f);if(k>-1){++o;var m=l.substring(0,k),h=new e.Token(a,e.tokenize(g,t.grammar),"language-"+a,g),y=l.substring(k+f.length),d=[];m&&d.push.apply(d,i([m])),d.push(h),y&&d.push.apply(d,i([y])),"string"===typeof s?c.splice.apply(c,[p,1].concat(d)):s.content=d}}else s.content&&i(s.content)}return c}(t.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.88221f58.chunk.js.map