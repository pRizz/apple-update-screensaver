// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('apple_update_screensaver.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('goog.string.format');
apple_update_screensaver.core.loadingBarPath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"M 0 0 h 100 c 2 0 2 2 0 2 h -100 c -2 0 -2 -2 0 -2 Z"], null)], null);
apple_update_screensaver.core.loadingBarCmp = (function apple_update_screensaver$core$loadingBarCmp(percentFilled){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$viewBox,"0 0 140 10",cljs.core.cst$kw$width,(400),cljs.core.cst$kw$height,(20)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clipPath,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"loadingBarClipPath"], null),apple_update_screensaver.core.loadingBarPath], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"loadingBarPath",cljs.core.cst$kw$d,"M 0 0 h 100 c 2 0 2 2 0 2 h -100 c -2 0 -2 -2 0 -2 Z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cx,"0",cljs.core.cst$kw$cy,"50",cljs.core.cst$kw$r,"1000",cljs.core.cst$kw$id,"mycircle"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"loadingBarContent",cljs.core.cst$kw$transform,"translate(20, 0)",cljs.core.cst$kw$clip_DASH_path,"url(#loadingBarClipPath)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#loadingBarPath",cljs.core.cst$kw$fill,"gray"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,"filledLoadingBar",cljs.core.cst$kw$fill,"white",cljs.core.cst$kw$x,((-210) + ((percentFilled * 0.01) * (120))),cljs.core.cst$kw$y,(0),cljs.core.cst$kw$width,(200),cljs.core.cst$kw$height,(20)], null)], null)], null)], null);
});
apple_update_screensaver.core.max_minutes_remaining = (59);
apple_update_screensaver.core.minutes_remaining_atm = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((45));
apple_update_screensaver.core.percent_finished = (function apple_update_screensaver$core$percent_finished(){
return ((100) * ((apple_update_screensaver.core.max_minutes_remaining - cljs.core.deref(apple_update_screensaver.core.minutes_remaining_atm)) / apple_update_screensaver.core.max_minutes_remaining));
});
apple_update_screensaver.core.home_page = (function apple_update_screensaver$core$home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$align_DASH_items,"center",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$justify_DASH_content,"center"], null),cljs.core.cst$kw$onClick,(function (){
console.log("test peter");

return document.getElementById("app").requestFullscreen();
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"assets/Apple_logo_white.svg",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"7%"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_top,(50),cljs.core.cst$kw$margin_DASH_bottom,(0)], null)], null),apple_update_screensaver.core.loadingBarCmp(apple_update_screensaver.core.percent_finished())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$color,"white",cljs.core.cst$kw$font_DASH_weight,"bold",cljs.core.cst$kw$font_DASH_size,(12),cljs.core.cst$kw$margin_DASH_top,(12)], null)], null),(function (){var G__26409 = "Installing Software Update: About %f minutes";
var G__26410 = (function (){var x__4219__auto__ = (2);
var y__4220__auto__ = (function (){var G__26411 = cljs.core.deref(apple_update_screensaver.core.minutes_remaining_atm);
return Math.floor(G__26411);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return goog.string.format(G__26409,G__26410);
})()], null)], null);
});
apple_update_screensaver.core.updates_per_second = 3.0;
apple_update_screensaver.core.updates_per_ms = (apple_update_screensaver.core.updates_per_second / 1000.0);
apple_update_screensaver.core.interpolate_loading = (function apple_update_screensaver$core$interpolate_loading(from_minutes_remaining,to_minutes_remaining,duration_ms){
var steps = (function (){var G__26412 = (apple_update_screensaver.core.updates_per_ms * duration_ms);
return Math.floor(G__26412);
})();
var minutes_remaining_delta = (to_minutes_remaining - from_minutes_remaining);
var minutes_remaining_delta_per_step = (minutes_remaining_delta / steps);
var minutes_remaining_range = cljs.core.range.cljs$core$IFn$_invoke$arity$3(from_minutes_remaining,to_minutes_remaining,minutes_remaining_delta_per_step);
var duration_step_size = (duration_ms / steps);
var timeout_range = cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),duration_ms,duration_step_size);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (steps,minutes_remaining_delta,minutes_remaining_delta_per_step,minutes_remaining_range,duration_step_size,timeout_range){
return (function apple_update_screensaver$core$interpolate_loading_$_iter__26413(s__26414){
return (new cljs.core.LazySeq(null,((function (steps,minutes_remaining_delta,minutes_remaining_delta_per_step,minutes_remaining_range,duration_step_size,timeout_range){
return (function (){
var s__26414__$1 = s__26414;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26414__$1);
if(temp__5735__auto__){
var s__26414__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26414__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26414__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26416 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26415 = (0);
while(true){
if((i__26415 < size__4522__auto__)){
var step = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26415);
cljs.core.chunk_append(b__26416,setTimeout(((function (i__26415,step,c__4521__auto__,size__4522__auto__,b__26416,s__26414__$2,temp__5735__auto__,steps,minutes_remaining_delta,minutes_remaining_delta_per_step,minutes_remaining_range,duration_step_size,timeout_range){
return (function (){
return cljs.core.reset_BANG_(apple_update_screensaver.core.minutes_remaining_atm,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(minutes_remaining_range,step));
});})(i__26415,step,c__4521__auto__,size__4522__auto__,b__26416,s__26414__$2,temp__5735__auto__,steps,minutes_remaining_delta,minutes_remaining_delta_per_step,minutes_remaining_range,duration_step_size,timeout_range))
,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(timeout_range,step)));

var G__26417 = (i__26415 + (1));
i__26415 = G__26417;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26416),apple_update_screensaver$core$interpolate_loading_$_iter__26413(cljs.core.chunk_rest(s__26414__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26416),null);
}
} else {
var step = cljs.core.first(s__26414__$2);
return cljs.core.cons(setTimeout(((function (step,s__26414__$2,temp__5735__auto__,steps,minutes_remaining_delta,minutes_remaining_delta_per_step,minutes_remaining_range,duration_step_size,timeout_range){
return (function (){
return cljs.core.reset_BANG_(apple_update_screensaver.core.minutes_remaining_atm,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(minutes_remaining_range,step));
});})(step,s__26414__$2,temp__5735__auto__,steps,minutes_remaining_delta,minutes_remaining_delta_per_step,minutes_remaining_range,duration_step_size,timeout_range))
,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(timeout_range,step)),apple_update_screensaver$core$interpolate_loading_$_iter__26413(cljs.core.rest(s__26414__$2)));
}
} else {
return null;
}
break;
}
});})(steps,minutes_remaining_delta,minutes_remaining_delta_per_step,minutes_remaining_range,duration_step_size,timeout_range))
,null,null));
});})(steps,minutes_remaining_delta,minutes_remaining_delta_per_step,minutes_remaining_range,duration_step_size,timeout_range))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(steps));
})());
});
apple_update_screensaver.core.small_interpolation = (function apple_update_screensaver$core$small_interpolation(){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["doing small-interpolation"], 0));

return apple_update_screensaver.core.interpolate_loading(cljs.core.deref(apple_update_screensaver.core.minutes_remaining_atm),(cljs.core.deref(apple_update_screensaver.core.minutes_remaining_atm) - cljs.core.rand.cljs$core$IFn$_invoke$arity$1((4))),(5000));
});
apple_update_screensaver.core.big_interpolation = (function apple_update_screensaver$core$big_interpolation(){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["doing big-interpolation"], 0));

return apple_update_screensaver.core.interpolate_loading(cljs.core.deref(apple_update_screensaver.core.minutes_remaining_atm),(cljs.core.deref(apple_update_screensaver.core.minutes_remaining_atm) - cljs.core.rand.cljs$core$IFn$_invoke$arity$1((30))),(5000));
});
apple_update_screensaver.core.mount_root = (function apple_update_screensaver$core$mount_root(){
reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [apple_update_screensaver.core.home_page], null),document.getElementById("app"));

setInterval((function (){
if((cljs.core.deref(apple_update_screensaver.core.minutes_remaining_atm) < (3))){
return cljs.core.reset_BANG_(apple_update_screensaver.core.minutes_remaining_atm,(55));
} else {
if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < 0.1)){
return apple_update_screensaver.core.big_interpolation();
} else {
return apple_update_screensaver.core.small_interpolation();
}
}
}),(15000));

return setTimeout((function (){
return apple_update_screensaver.core.small_interpolation();
}));
});
apple_update_screensaver.core.init_BANG_ = (function apple_update_screensaver$core$init_BANG_(){
return apple_update_screensaver.core.mount_root();
});
