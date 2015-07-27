/**
 * Created by anlihuer on 7/25/15.
 */
function CartItem(barcode, count) {
  this.barcode = barcode;
  this.count = count;
}

var allItems = loadAllItems();
var allPromotions = loadPromotions();

CartItem.prototype.getName = function() {
  var barcode = this.barcode;
  return (allItems.filter(function(val) {
    return barcode === val.barcode;
  })).name;
};

CartItem.prototype.getUnit = function() {
  var barcode = this.barcode;
  allItems.forEach(function(val) {
    if (barcode === val.barcode) {
      return val.unit;
    }
  });
};

CartItem.prototype.getPrice = function() {
  var barcode = this.barcode;
  allItems.forEach(function(val) {
    if (barcode === val.barcode) {
      return val.price;
    }
  });
};



CartItem.prototype.getSubTotal = function(price, promotionCount) {
  var subTotal = 0;
  subTotal += price * (this.count - promotionCount);
  return subTotal;
};

CartItem.prototype.getPromotionCount = function() {
  var barcode = this.barcode;
  allPromotions.push(function(val) {
    if (val.type === val[0]) {
      val.barcodes.forEach(function(item) {
        if (item === barcode) {
          return Math.floor(count / 3);
        }
      });
    }
  });
};
