(function(c,p){var u=function(){function q(f){var b=e[f];return{close:function(){if(b){l.body.removeChild(b.c);delete e[f];m--}},h:function(){if(b.d!==n){c(b.c).b({width:"100%",height:"100%",left:"0px",top:"0px"});c("div.window-inner",b.c).b({height:"100%",width:"100%"});b.d=n;b.c.style.zIndex=m++;c(b.c).draggable("option","disabled",true).i("option","disabled",true)}else{this.restore();c(b.c).draggable("option","disabled",false).i("option","disabled",false)}},p:function(){c(b.c).k("fast");b.d*=-1},focus:function(){c(b.c).show("fast");b.c.style.zIndex=m++},restore:function(){this.focus();if(b.d===n){c(b.c).b({width:b.a.f,height:b.a.e+k,left:b.a.x+k,top:b.a.y+k});var d=c("div.window-inner",b.c),g=d.B("full")?0:r;d.b({width:b.a.f,height:b.a.e-g+k});b.d=s}b.d=Math.abs(b.d)},F:{x:b.a.x,y:b.a.y,f:b.a.f,e:b.a.e,d:b.d}}}var e=[],m=0,l=p.document,k="px",r=25,s=1,n=2;return{G:function(f){var b=l.createElement("div"),d=APPLIST[f],g=e.length;if(d.H){var t=this.m.o(f);if(t){q(t[0]).restore();return}}b.id="app"+g;c(b).g("window").b({width:d.width,height:d.height+k,zIndex:d.u?1E3:m++}).D(div({"class":"window-header"},strong(d.title),span(a({"class":"min"},"[-]"),a({"class":"max"},"[_]"),a({"class":"close"},"[x]")))+div({"class":"window-inner loading"}));d.b&&c(b).b(d.b);e.push({id:f,c:b,a:{f:d.width,e:d.height,x:10,y:10},d:s});var h=l.createElement("iframe"),o=c("div.window-inner",b);c(h).v({frameBorder:"0",s:"true",src:"app.php?id="+f+(new Date).getTime()}).k();h.src="http://sketch.processing.org/";o.append(h).b("height",d.height-r+k);if(d.C===false){c("div.window-header",b).g("hidden");o.g("full").b("height",d.height)}l.body.appendChild(b);var i=q(e.length-1);c("a.min",b).click(function(){i.p()});c("a.max",b).click(function(){i.h()});c("a.close",b).click(function(){i.close()});f=h.contentWindow||h.contentDocument.defaultView;f.l=u;f.r=i;c(h).load(function(){o.q("loading");c(h).show()});function v(j){j.preventDefault()}function w(j){c("iframe",j).k();c(j).g("drag")}function x(j){c("iframe",j).show();c(j).q("drag")}c("div.window-header",b).j("dragstart",v).j("selectstart",v).j("mousedown",function(){i.focus()}).z(function(){i.h()});d.draggable!==false&&c(b).draggable({handle:"div.window-header",scroll:false,n:"document",start:function(){w(this)},stop:function(){x(this);e[g].a.x=parseInt(c(this).b("left"),10);e[g].a.y=parseInt(c(this).b("top"),10)}});d.i!==false&&c(b).i({n:"document",w:true,t:o,start:function(){w(this);e[g].d===n&&i.h()},stop:function(){x(this);e[g].a.f=c(this).b("width");e[g].a.e=parseInt(c(this).b("height"),10)}})},m:{o:function(f){var b=[],d=0,g;for(g=e.length;d<g;d++)e[d]&&e[d].id===f&&b.push(d);return b.length>0?b:false},A:function(){return e}}}}();p.l=u})(jQuery,window);