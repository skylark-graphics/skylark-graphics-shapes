/**
 * skylark-graphics-shapes - The skylark shape class library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","../shapes","./Transform","./Matrix","../Point","../Rect"],function(n,t,e,r,i,a){return t.RotateTransform=e.inherit({klassName:"RotateTransform",value:{get:function(){return r.rotateAt(this.angle,this.centerX,this.centerY)}},angle:{get:function(){return this._.angle}},centerX:{get:function(){return this._.centerX}},centerY:{get:function(){return this._.centerY}},clone:function(){},transform:function(n){},transformBounds:function(n){},init:function(n,t,e){var r=this._={};r.angle=n||0,r.centerX=t||0,r.centerY=e||0}})});
//# sourceMappingURL=../sourcemaps/transform/RotateTransform.js.map
