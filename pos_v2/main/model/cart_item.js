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
  var item = allItems.filter(function(val) {
     return barcode === val.barcode;
  });
  return item[0].name;
};

CartItem.prototype.getUnit = function() {
  var barcode = this.barcode;
  var item = allItems.filter(function(val) {
     return barcode === val.barcode;
  });
  return item[0].unit;
};

CartItem.prototype.getPrice = function() {
    var barcode = this.barcode;
    var item = allItems.filter(function(val) {
       return barcode === val.barcode;
    });
    return item[0].price;
  };

CartItem.prototype.getPromotionCount = function() {
  var barcode = this.barcode;
  var that = this;
  var temp = 0;
  allPromotions.forEach(function(val) {
    if (val.type === 'BUY_TWO_GET_ONE_FREE') {
      val.barcodes.forEach(function(item) {
        if (item === barcode) {
           temp = Math.floor(that.count / 3);
        }
      });
    }
  });
  return temp;
};


CartItem.prototype.getSubTotal = function() {
  var subTotal = 0;
  var temp = this.getPromotionCount();
  subTotal += this.getPrice() * (this.count - this.getPromotionCount());
  return subTotal;
};
