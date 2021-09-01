(function(a){a.datePicker={defaults:{container:"body",mode:"popup",select:"single",theme:"theme-light",show:"month",doubleSize:false,restrictDates:false,disableAnimations:false,strings:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},views:{decade:{show:null,selected:[],disabled:[],forbidden:[],enabled:[],marked:[]},year:{show:null,selected:[],disabled:[],forbidden:[],enabled:[],marked:[]},month:{show:null,selected:[],disabled:[],forbidden:[],enabled:[],marked:[],firstDayOfWeek:0}},templates:{widget:'<div class="jquery-datepicker">',header:'<div class="box-row row-header"><div class="header-title">{title}</div><div class="header-actions"><div class="header-action action-down"></div><div class="header-action action-up"></div></div></div>'},callbacks:{onCreate:function(b){},onShow:function(b){},onViewDecade:function(b,c){return true},onViewYear:function(b,c){return true},onViewMonth:function(b,c){return true},onChangeDecade:function(b,c,d){return true},onChangeYear:function(b,c,d){return true},onChangeMonth:function(b,c,d){return true},onChangeDay:function(b,c,d){return true},onCheckCell:function(b,c,d){return false},onRenderCell:function(b,c,d){},onHide:function(b){}},animate:function(d,b,c){if(this.disableAnimations){c(d)}else{switch(b){case"fadeOut":d.css({opacity:1}).animate({opacity:0},{duration:150,complete:function(){if(!!c){c(d)}}});break;case"slideLeftOut":d.css({opacity:1}).animate({opacity:0,translateX:8},{duration:150,step:function(e,f){if(f.prop=="translateX"){d.css("transform","translateX("+e+"px)")}},complete:function(){d.css("transform","translateX(0)");if(!!c){c(d)}}});break;case"slideRightOut":d.css({opacity:1}).animate({opacity:0,translateX:-8},{duration:150,step:function(e,f){if(f.prop=="translateX"){d.css("transform","translateX("+e+"px)")}},complete:function(){d.css("transform","translateX(0)");if(!!c){c(d)}}});break;case"slideDownOut":d.css({opacity:1}).animate({opacity:0,translateY:0},{duration:150,step:function(e,f){if(f.prop=="translateY"){d.css("transform","translateY("+(8-e)+"px)")}},complete:function(){d.css("transform","translateY(0)");if(!!c){c(d)}}});break;case"slideUpOut":d.css({opacity:1}).animate({opacity:0,translateY:0},{duration:150,step:function(e,f){if(f.prop=="translateY"){d.css("transform","translateY("+-(8-e)+"px)")}},complete:function(){d.css("transform","translateY(0)");if(!!c){c(d)}}});break;case"fadeIn":d.css({opacity:0}).animate({opacity:1},{duration:150,complete:function(){if(!!c){c(d)}}});break;case"slideLeftIn":d.css({opacity:0,transform:"translateX(8px)"}).animate({opacity:1,translateX:0},{duration:150,step:function(e,f){if(f.prop=="translateX"){d.css("transform","translateX("+(-e)+"px)")}},complete:function(){if(!!c){c(d)}}});break;case"slideRightIn":d.css({opacity:0,transform:"translateX(-8px)"}).animate({opacity:1,translateX:0},{duration:150,step:function(e,f){if(f.prop=="translateX"){d.css("transform","translateX("+(-e)+"px)")}},complete:function(){if(!!c){c(d)}}});break;case"slideUpIn":d.css({opacity:0,transform:"translateY(8px)"}).animate({opacity:1,translateY:8},{duration:150,step:function(e,f){if(f.prop=="translateY"){d.css("transform","translateY("+(8-e)+"px)")}},complete:function(){if(!!c){c(d)}}});break;case"slideDownIn":d.css({opacity:0,transform:"translateY(-8px)"}).animate({opacity:1,translateY:8},{duration:150,step:function(e,f){if(f.prop=="translateY"){d.css("transform","translateY("+-(8-e)+"px)")}},complete:function(){if(!!c){c(d)}}});break}}},dateFormat:function(b){return(b.getMonth()+1)+" / "+b.getDate()+" / "+b.getFullYear()},dateParse:function(b){return a.datePicker.api.date(b)}},api:{date:function(d){var b=null;if(d instanceof Date){b=new Date(d)}else{var c=d.match(/(\d{1,2})-(\d{1,2})-(\d{4})/);if(c&&c.length==4){b=new Date(c[3],c[1]-1,c[2])}}return b},show:function(b){var c=a(".jquery-datepicker.is-popup"),d=a.datePicker.api.createWidget(b);if(c.length){a.datePicker.api.hide(c)}d.addClass("is-open");d.options.animate(d,d.hasClass("tip-above")?"slideDownIn":"slideUpIn",function(){d.options.callbacks.onShow(d)});return d},hide:function(b){var b=b||a(".jquery-datepicker.is-popup");b=b.length?b.eq(0):null;if(b.length&&b.is(":visible")){b.options=b.data("options");b.options.animate(b,b.hasClass("tip-above")?"slideUpOut":"slideDownOut",function(){b.removeClass("is-open");b.options.callbacks.onHide(b);b.remove()})}return b},createWidget:function(c){var d=a.extend(true,{},a.datePicker.defaults,c),f=a(d.templates.widget);d.container=d.container instanceof jQuery?d.container:a(d.container);d.element=d.element instanceof jQuery?d.element:a(d.element);d.views.decade.show=!d.views.decade.show?new Date():d.dateParse(d.views.decade.show);d.views.year.show=!d.views.year.show?new Date():d.dateParse(d.views.year.show);d.views.month.show=!d.views.month.show?new Date():d.dateParse(d.views.month.show);f.data("options",d);f.options=d;f.views={};f.views.decade=a.datePicker.api.createDecadeView(d);f.views.year=a.datePicker.api.createYearView(d);f.views.month=a.datePicker.api.createMonthView(d);f.append(f.views.decade);f.append(f.views.year);f.append(f.views.month);switch(d.show){case"decade":f.views.decade.addClass("is-active");break;case"year":f.views.year.addClass("is-active");break;case"month":f.views.month.addClass("is-active");break}d.container.append(f);switch(d.mode){case"inline":f.addClass("is-open").addClass("is-inline");break;case"popup":if(d.element.length){var b=d.element.offset(),e=window.innerWidth;elementSize={x:d.element.outerWidth(),y:d.element.outerHeight()},widgetSize={x:f.outerWidth(),y:f.outerHeight()};if(b.top>(widgetSize.y+15)){f.addClass("tip-below");f.css("top",(b.top-widgetSize.y-15)+"px")}else{f.addClass("tip-above");f.css("top",(b.top+elementSize.y+15)+"px")}if(b.left<e/2){f.addClass("tip-left");f.css("left",b.left+"px")}else{f.addClass("tip-right");f.css("left",((b.left+elementSize.x)-widgetSize.x)+"px")}}f.addClass("is-popup");a(document).on("mouseup",function(g){if(!f.is(g.target)&&f.has(g.target).length===0){a(document).off("mouseup");a.datePicker.api.hide(f)}});break}f.views.decade.on("click",".header-title",function(g){var h=a(this);g.preventDefault()});f.views.decade.on("click",".action-down",function(g){var h=a(this);g.preventDefault();if(d.callbacks.onChangeDecade(f,new Date(d.views.decade.show),"down")){d.animate(f.views.decade,"slideLeftOut",function(){f.views.decade.empty();d.views.decade.show.setYear(d.views.decade.show.getFullYear()-10);a.datePicker.api.createDecadeView(d,f.views.decade);d.animate(f.views.decade,"slideRightIn")})}});f.views.decade.on("click",".action-up",function(g){var h=a(this);g.preventDefault();if(d.callbacks.onChangeDecade(f,new Date(d.views.decade.show),"up")){d.animate(f.views.decade,"slideRightOut",function(){f.views.decade.empty();d.views.decade.show.setYear(d.views.decade.show.getFullYear()+10);a.datePicker.api.createDecadeView(d,f.views.decade);d.animate(f.views.decade,"slideLeftIn")})}});f.views.decade.on("click",".cell-day",function(i){var g=a(this),h=g.data("date");i.preventDefault();if(!g.hasClass("cell-grayed")){if(d.callbacks.onChangeYear(f,a.datePicker.api.date(h),false)){f.views.year.empty();d.views.year.show=a.datePicker.api.date(h);a.datePicker.api.createYearView(d,f.views.year)}if(d.callbacks.onViewYear(f,a.datePicker.api.date(h))){d.animate(f.views.decade,"fadeOut",function(){f.views.decade.removeClass("is-active");f.views.year.addClass("is-active");d.animate(f.views.year,"fadeIn")})}}});f.views.year.on("click",".header-title",function(g){var h=a(this);g.preventDefault();if(d.callbacks.onViewDecade(f,d.views.decade.show)){d.animate(f.views.year,"fadeOut",function(){if(d.views.decade.show.getFullYear()!=d.views.year.show.getFullYear()){f.views.decade.empty();d.views.decade.show.setYear(d.views.year.show.getFullYear());a.datePicker.api.createDecadeView(d,f.views.decade)}f.views.year.removeClass("is-active");f.views.decade.addClass("is-active");d.animate(f.views.decade,"fadeIn")})}});f.views.year.on("click",".action-down",function(g){var h=a(this);g.preventDefault();if(d.callbacks.onChangeYear(f,new Date(d.views.year.show),"down")){d.animate(f.views.year,"slideLeftOut",function(){f.views.year.empty();d.views.year.show.setYear(d.views.year.show.getFullYear()-1);a.datePicker.api.createYearView(d,f.views.year);d.animate(f.views.year,"slideRightIn")})}});f.views.year.on("click",".action-up",function(g){var h=a(this);g.preventDefault();if(d.callbacks.onChangeYear(f,new Date(d.views.year.show),"up")){d.animate(f.views.year,"slideRightOut",function(){f.views.year.empty();d.views.year.show.setYear(d.views.year.show.getFullYear()+1);a.datePicker.api.createYearView(d,f.views.year);d.animate(f.views.year,"slideLeftIn")})}});f.views.year.on("click",".cell-day",function(i){var g=a(this),h=g.data("date");i.preventDefault();if(!g.hasClass("cell-grayed")){if(d.callbacks.onChangeMonth(f,a.datePicker.api.date(h),false)){f.views.month.empty();d.views.month.show=a.datePicker.api.date(h);a.datePicker.api.createMonthView(d,f.views.month)}if(d.callbacks.onViewMonth(f,a.datePicker.api.date(h))){d.animate(f.views.year,"fadeOut",function(){f.views.year.removeClass("is-active");f.views.month.addClass("is-active");d.animate(f.views.month,"fadeIn")})}}});f.views.month.on("click",".header-title",function(g){var h=a(this);g.preventDefault();if(d.callbacks.onViewYear(f,d.views.year.show)){d.animate(f.views.month,"fadeOut",function(){if(d.views.year.show.getFullYear()!=d.views.month.show.getFullYear()){f.views.year.empty();d.views.year.show.setYear(d.views.month.show.getFullYear());a.datePicker.api.createYearView(d,f.views.year)}f.views.month.removeClass("is-active");f.views.year.addClass("is-active");d.animate(f.views.year,"fadeIn")})}});f.views.month.on("click",".action-down",function(g){var h=a(this);g.preventDefault();if(d.callbacks.onChangeMonth(f,new Date(d.views.month.show),"down")){d.animate(f.views.month,"slideLeftOut",function(){var i=d.views.month.show.getMonth()-1;if(i<0){d.views.month.show.setYear(d.views.month.show.getFullYear()-1);i=11}f.views.month.empty();d.views.month.show.setMonth(i);a.datePicker.api.createMonthView(d,f.views.month);d.animate(f.views.month,"slideRightIn")})}});f.views.month.on("click",".action-up",function(g){var h=a(this);g.preventDefault();if(d.callbacks.onChangeMonth(f,new Date(d.views.month.show),"up")){d.animate(f.views.month,"slideRightOut",function(){var i=d.views.month.show.getMonth()+1;if(i>11){d.views.month.show.setYear(d.views.month.show.getFullYear()+1);i=0}f.views.month.empty();d.views.month.show.setMonth(i);a.datePicker.api.createMonthView(d,f.views.month);d.animate(f.views.month,"slideLeftIn")})}});f.views.month.on("click",".cell-day",function(i){var g=a(this),h=g.data("date");i.preventDefault();if(!g.hasClass("cell-grayed")&&!g.hasClass("cell-forbidden")){if(d.callbacks.onChangeDay(f,a.datePicker.api.date(h))){if(d.select=="single"){d.views.month.selected=[];f.views.month.find(".cell-day").removeClass("cell-selected");if(d.mode=="popup"){a.datePicker.api.hide(f);d.element.val(d.dateFormat(h))}}g.addClass("cell-selected");d.views.month.selected.push(a.datePicker.api.date(h))}}});f.addClass(d.theme);if(d.doubleSize){f.addClass("is-2x")}d.callbacks.onCreate(f);return f},createHeader:function(d,b){var c=a(b.templates.header.replace("{title}",d));return c},createDecadeView:function(n,b){var b=b||a('<div class="datepicker-box"></div>'),q=n.views.decade,g=q.show.getFullYear()-(q.show.getFullYear()%10),r=g+"-"+(g+9),k=a.datePicker.api.createHeader(r,n),u=[];for(var l=0,t=g-3;l<16;l++,t++){u.push(t)}k.addClass("js-header-decade");b.append(k);b.addClass("box-decade");var p=[];for(var l=0;l<4;l++){var o=a('<div class="box-row row-week"></div>');p.push(o);b.append(o)}var s=new Date();s.setMonth(0);s.setDate(1);for(var l=0,m=0,c=1;l<16;l++,c++){var o=p[m],f=a('<div class="box-cell cell-day">'+u[l]+"</div>");o.append(f);if(c>3){c=0;m++}var e="01-01-"+u[l];e=a.datePicker.api.date(e);f.data("date",e);var h=false;switch(n.restrictDates){case"past":h=e>s;break;case"future":h=e.toDateString()!=s.toDateString()&&e<s;break;case"custom":h=!n.callbacks.onCheckCell(f,e,"year");break}if(l<3||l>=16-3||h){f.addClass("cell-grayed")}else{if(e.toDateString()==s.toDateString()){f.addClass("cell-today")}}n.callbacks.onRenderCell(f,e,"year")}return b},createYearView:function(m,b){var b=b||a('<div class="datepicker-box"></div>'),p=m.views.year,q=p.show.getFullYear(),h=a.datePicker.api.createHeader(q,m),s=[];for(var k=0;k<12;k++){s.push(m.strings.months[k])}h.addClass("js-header-year");b.append(h);b.addClass("box-year");var o=[];for(var k=0;k<3;k++){var n=a('<div class="box-row row-week"></div>');o.push(n);b.append(n)}var r=new Date();r.setDate(1);for(var k=0,l=0,c=1;k<12;k++,c++){var n=o[l],f=a('<div class="box-cell cell-day">'+s[k].substring(0,3)+"</div>");n.append(f);if(c>3){c=0;l++}var e=(k+1)+"-01-"+p.show.getFullYear();e=a.datePicker.api.date(e);f.data("date",e);var g=false;switch(m.restrictDates){case"past":g=e>r;break;case"future":g=e.toDateString()!=r.toDateString()&&e<r;break;case"custom":g=!m.callbacks.onCheckCell(f,e,"month");break}if(g){f.addClass("cell-grayed")}if(e.toDateString()==r.toDateString()){f.addClass("cell-today")}m.callbacks.onRenderCell(f,e,"month")}return b},createMonthView:function(y,b){var b=b||a('<div class="datepicker-box"></div>'),B=y.views.month,D=y.strings.months[B.show.getMonth()]+" "+B.show.getFullYear(),p=a.datePicker.api.createHeader(D,y),l=new Date(B.show.getFullYear(),B.show.getMonth()+1,0).getDate(),o=new Date(B.show.getFullYear(),B.show.getMonth(),1).getDay(),t=B.show.getMonth()==0?11:B.show.getMonth()-1,u=B.show.getFullYear()-(B.show.getMonth()==0?1:0),w=B.show.getMonth()==11?0:B.show.getMonth()+1,x=B.show.getFullYear()+(B.show.getMonth()==11?1:0),s=new Date(u,t+1,0).getDate(),F=[];for(var q=0;q<l;q++){F.push(q+1)}p.addClass("js-header-month");b.append(p);b.addClass("box-month");B.firstDayOfWeek=B.firstDayOfWeek<0?0:(B.firstDayOfWeek>6?6:B.firstDayOfWeek);var g=y.strings.days.slice();if(B.firstDayOfWeek>0){var z=g.splice(0,B.firstDayOfWeek);g=g.concat(z)}var A=a('<div class="box-row row-days"></div>');for(var q=0;q<7;q++){A.append('<div class="box-cell cell-day">'+g[q].substring(0,2)+"</div>")}b.append(A);var k=o-B.firstDayOfWeek,h=42-(l+k);if(k<0){k=7+k;h=42-(l+k)}var C=[];for(var q=1;q<=k;q++){C.push(s-(k-q))}F=C.concat(F);C=[];for(var q=1;q<=h;q++){C.push(q)}F=F.concat(C);var H=[];for(var q=0;q<6;q++){var G=a('<div class="box-row row-week"></div>');H.push(G);b.append(G)}var E=new Date();for(var q=0,r=0,c=1;q<42;q++,c++){var G=H[r],f=a('<div class="box-cell cell-day">'+F[q]+"</div>");G.append(f);if(c>6){c=0;r++}var e="";if(q<k){e=(t+1)+"-"+F[q]+"-"+u}else{if(q>=42-h){e=(w+1)+"-"+F[q]+"-"+x}else{e=(B.show.getMonth()+1)+"-"+F[q]+"-"+B.show.getFullYear()}}e=a.datePicker.api.date(e);f.data("date",e);var m=false;if(B.enabled.length){m=true;for(var v=0;v<B.enabled.length;v++){if(!B.enabled[v].length){continue}if(typeof B.enabled[v]==="string"){B.enabled[v]=a.datePicker.api.date(B.enabled[v])}if(e.toDateString()==B.enabled[v].toDateString()){m=false;break}}}else{switch(y.restrictDates){case"past":m=e>E;break;case"future":m=e.toDateString()!=E.toDateString()&&e<E;break;case"custom":m=!y.callbacks.onCheckCell(f,e,"day");break}}if(q<k||q>=42-h||m){f.addClass("cell-grayed")}else{if(e.toDateString()==E.toDateString()){f.addClass("cell-today")}if(B.disabled.length){for(var v=0;v<B.disabled.length;v++){if(typeof B.disabled[v]==="string"){B.disabled[v]=a.datePicker.api.date(B.disabled[v])}if(B.disabled[v]&&e.toDateString()==B.disabled[v].toDateString()){f.addClass("cell-grayed");break}}}if(B.forbidden.length){for(var v=0;v<B.forbidden.length;v++){if(typeof B.forbidden[v]==="string"){B.forbidden[v]=a.datePicker.api.date(B.forbidden[v])}if(B.forbidden[v]&&e.toDateString()==B.forbidden[v].toDateString()){f.addClass("cell-forbidden");break}}}if(B.marked.length){for(var v=0;v<B.marked.length;v++){if(typeof B.marked[v]==="string"){B.marked[v]=a.datePicker.api.date(B.marked[v])}if(B.marked[v]&&e.toDateString()==B.marked[v].toDateString()){f.addClass("cell-marked");break}}}if(B.selected.length){for(var v=0;v<B.selected.length;v++){if(typeof B.selected[v]==="string"){B.selected[v]=a.datePicker.api.date(B.selected[v])}if(B.selected[v]&&e.toDateString()==B.selected[v].toDateString()){f.addClass("cell-selected");break}}}}y.callbacks.onRenderCell(f,e,"day")}return b}}};jQuery(document).ready(function(b){b("[data-select=datepicker]").each(function(){var c=b(this);c.attr("autocomplete","off");c.on("click",function(){var e=c.val();var d=e?b.datePicker.defaults.dateParse(e):null;var f=b.datePicker.api.show({views:{month:{show:e?d:"",selected:e?[d]:[]}},element:c});c.data("widget",f)})})})})(jQuery);