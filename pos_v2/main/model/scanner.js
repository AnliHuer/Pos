/**
 * Created by anlihuer on 7/25/15.
 */
function Scanner() {}
Scanner.prototype.scan = function(val) {
  var barcode = val.split('-')[0];
  var count = parseFloat(val.split('-')[1]) || 1;
  return new CartItem(barcode, count);
};
