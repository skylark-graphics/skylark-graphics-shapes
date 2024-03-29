/**
 * skylark-graphics-shapes - The skylark shape class library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","./shapes","./geometry"],function(t,n,i){return n.Polystar=i.inherit({klassName:"Polystar",bounds:{get:function(){var t=this._.points,n=t.length,i=t[0];bbox={l:i.x,t:i.y,r:i.x,b:i.y};for(var b=1;b<n;++b)i=t[b],bbox.l>i.x&&(bbox.l=i.x),bbox.r<i.x&&(bbox.r=i.x),bbox.t>i.y&&(bbox.t=i.y),bbox.b<i.y&&(bbox.b=i.y);return{x:bbox.l,y:bbox.t,width:bbox.r-bbox.l,height:bbox.b-bbox.t}}},x:{get:function(){return this._.x}},y:{get:function(){return this._.y}},radius:{get:function(){return this._.radius}},sides:{get:function(){return this._.sides}},pointSize:{get:function(){return this._.pointSize}},angle:{get:function(){return this._.angle}},init:function(t,n,i,b,e,o){var r=this._;r.x=t,r.y=n,r.radius=i,r.sides=b,r.pointSize=e,r.angle=o}})});
//# sourceMappingURL=sourcemaps/polystar.js.map
