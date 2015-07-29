/**
 * Created by anlihuer on 7/25/15.
 */
function Cart() {
  this.cartItems = [];
}




Cart.prototype.getTotalPrice = function() {
  var total = 0;
  // this.cartItems.forEach(function(val) {
  //   total += val.getPrice() * (val.count - val.getPromotionCount());
  // });
  var cartItems = this.cartItems;
  for (var i in cartItems) {
    total += cartItems[i].getPrice() * (cartItems[i].count - cartItems[i].getPromotionCount());
  }
  return total;
};


Cart.prototype.getSaving = function() {
  var saving = 0;
  // this.cartItems.forEach(function(val) {
  //   saving += val.getPrice() * val.getPromotionCount();
  // });
  var cartItems = this.cartItems;
  for (var i in cartItems) {
    saving += cartItems[i].getPrice() * cartItems[i].getPromotionCount();
  }
  return saving;
};


Cart.prototype.add = function(cartItem) {
  var cartItems = this.cartItems;
  for (var val in cartItems) {
    if (cartItems[val].barcode === cartItem.barcode) {
      cartItems[val].count += cartItem.count;
      return;
    }
  }
  cartItems.push(cartItem);
  return;
};
