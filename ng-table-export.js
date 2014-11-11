/*! ngTableExport v0.1.0 by Vitalii Savchuk(esvit666@gmail.com) - https://github.com/esvit/ng-table-export - New BSD License */

angular.module("ngTableExport",[]).config(["$compileProvider",function(a){a.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|data):/)}]).directive("exportCsv",["$parse","$timeout",function(a,b){var c=";",d="data:text/csv;charset=UTF-8,";return{restrict:"A",scope:!1,link:function(e,f,g){function h(a){return'"'+a.replace(/^\s\s*/,"").replace(/\s*\s$/,"").replace(/"/g,'""')+'"'}function i(){k="";var a=f.find("tr");angular.forEach(a,function(a,b){var d=angular.element(a),e=d.find("th"),f="";d.hasClass("ng-table-filters")||(0===e.length&&(e=d.find("td")),1!==b&&(angular.forEach(e,function(a){f+=h(angular.element(a).text())+Array.apply(null,Array(a.colSpan)).map(function(){return c}).join("")}),f=f.slice(0,f.length-1)),k+=f+"\n")})}function j(a,c){var d=document.createElement("a");d.style.display="none",d.href=a,d.download=c,d.target="_blank",b(function(){document.body.appendChild(d),d.click(),document.body.removeChild(d)},0,!1)}var k="";g.delimiter&&(c=g.delimiter);var l={generate:function(a,c){var f=e.$parent.tableParams,g=f.settings(),h=f.count(),l=g.total;if(l>h){var m=g.$scope.$on("ngTableAfterReloadData",function(){m(),b(function(){i(),f.count(h),f.reload(),j(d+encodeURIComponent(k),c)},1e3,!1)});f.count(1/0),f.reload()}else i(),j(d+encodeURIComponent(k),c)}};a(g.exportCsv).assign(e.$parent,l)}}}]);
//# sourceMappingURL=ng-table-export.js.map