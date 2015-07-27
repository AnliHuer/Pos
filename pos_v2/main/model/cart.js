/**
 * Created by anlihuer on 7/25/15.
 */
function Cart() {
  this.cartItems = [];
}




Cart.prototype.getTotalPrice = function() {
  var total = 0;
  this.cartItems.forEach(function(val) {
    total += val.price * (val.count - val.promotionCount);
  });
  return total;
};


Cart.prototype.getSaving = function() {
  var saving = 0;
  this.cartItems.forEach(function(val) {
    saving += val.price * val.promotionCount;
  });
  return saving;
};


Cart.prototype.add = function(cartItem) {
  var cartItems = this.cartItems;
  cartItems.forEach(function(val) {
    if (val.barcode === cartItem.barcode) {
      val.count += cartItem.count;
    }
    return;
  });
  cartItems.push({
    barcode: cartItem.barcode,
    name: cartItem.getName(),
    price: cartItem.getPrice(),
    unit: cartItem.getUnit(),
    count: cartItem.count,
    promotionCount: cartItem.getPromotionCount(),
    subTotal:cartItem.getSubTotal(cartItem.getPrice(),cartItem.getPromotionCount())
  });
  return;
};
