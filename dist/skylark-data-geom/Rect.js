/**
 * skylark-data-geom - The math features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","./geom","./Geometry","./Point","./Size"],function(t,i,n,h,e){var r=i.Rect=n.inherit({klassName:"Rect",bounds:{get:function(){var t=this._;return{x:t.x,y:this.y,width:t.width,height:t.height}}},x:{get:function(){return this._.x}},y:{get:function(){return this._.y}},width:{get:function(){return this._.width}},height:{get:function(){return this._.height}},radius:{get:function(){return this._.radius}},leftTop:{get:function(){var t=this._;return new h(t.x,t.y)}},leftBottom:{get:function(){var t=this._;return new h(t.x,t.y+t.height)}},rightTop:{get:function(){var t=this._;return new h(t.x+t.width,t.y)}},rightBottom:{get:function(){var t=this._;return new h(t.x+t.width,t.y+t.height)}},size:{get:function(){var t=this._;return new e(t.width,t.height)}},move:function(t,i){var n=this._;return new r(n.x+t,n.y+i,n.width,n.height,n.radius)},containPoint:function(t,i){if(void 0===i){var n=t;t=n.x,i=n.y}var h=this._;return t>=h.x&&t<h.x+h.width&&i>=h.y&&i<h.y+h.height},isEmpty:function(){return this.width<=0||this.height<=0},notEqual:function(t){return!t||t.x!=this.x||t.y!=this.y||t.width!=this.width||t.height!=this.height||t.radius!=this.radius},equal:function(t){return!this.notEqual(t)},isIntersect:function(t,i,n,h){var e=this.x1,r=this.y,u=this.width,s=this.height;return Math.min(e+u,t+n)-(e>t?e:t)>0&&Math.min(r+s,i+h)-(r>i?r:i)>0},intersect:function(t,i,n,h){var e=this.x1,r=this.y,u=this.width,s=this.height;return Math.min(e+u,t+n)-(e>t?e:t)>0&&Math.min(r+s,i+h)-(r>i?r:i)>0},unite:function(t,i,n,h){var e=this.x1,u=this.y,s=this.width,a=this.height,o=e<t?e:t,g=u<i?u:i,f=Math.max(e+s,t+n)-o;return height=Math.max(u+a,i+h)-g,new r(o,g,f,height)},clone:function(){var t=this._;return new r(t.x,t.y,t.width,t.height,t.radius)},init:function(t,i,n,h,e){var r=this._={};r.x=t||0,r.y=i||0,r.width=n||0,r.height=h||0,r.radius=e||0}});return r.fromString=function(t){var i=t.split(",");return new r(parseFloat(i[0]),parseFloat(i[1]),parseFloat(i[2]),parseFloat(i[3]))},r.fromPlain=function(t){return new r(t.x||t.l,t.y||t.t,t.w||t.width,t.h||t.height)},r.fromArray=function(t){return new r(t[0],t[1],t[2],t[3])},r.Zero=new r(0,0,0,0),r});
//# sourceMappingURL=sourcemaps/Rect.js.map
