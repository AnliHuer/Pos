/**
 * Created by anlihuer on 7/25/15.
 */
function Pos(){
}



Pos.prototype.setItemString = function(cart){
  var itemString = '';

  cart.cartItems.forEach(function(val){
    itemString += "名称："+val.getName()+
    "，数量："+val.count+val.getUnit()+
    "，单价："+val.getPrice().toFixed(2)+"(元)"+
    "，小计："+val.getSubTotal().toFixed(2)+"(元)"+"\n";
  });
  return itemString;
};


Pos.prototype.setPromotionString = function(cart){
  var promotionString = '';
  cart.cartItems.forEach(function(val){
    if(val.getPromotionCount()){
      promotionString += "名称："+val.getName()+
      "，数量："+val.getPromotionCount()+val.getUnit()+"\n";
    }
  });
  return promotionString;
};
