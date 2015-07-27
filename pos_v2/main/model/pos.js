/**
 * Created by anlihuer on 7/25/15.
 */
function Pos(cart){
  this.cart = cart;
}



Pos.prototype.setItemString = function(){
  var itemString = '';
  this.cart.cartItems.forEach(function(val){
    itemString += "名称："+val.name+
    "，数量："+val.count+val.unit+
    "，单价："+val.price+"(元)"+
    "，小计："+val.subTotal+"(元)"+"\n";
  });
  return itemString;
};


Pos.prototype.setPromotionString = function(){
  var itemString = '';
  this.cart.cartItems.forEach(function(val){
    itemString += "名称："+val.name+
    "，数量："+val.promotionCount+val.unit+"\n";
  });
};
