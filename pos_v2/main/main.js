function printReceipt(inputs) {
  var scanner = new Scanner();
  var cart = new Cart();
  inputs.forEach(function(val) {
    var cartItem = scanner.scan(val);
    cart.add(cartItem);
  });

  var pos = new Pos();
  var temp = cart.getTotalPrice();
  var printString = "***<没钱赚商店>收据***\n" +
    "打印时间：" + new DateTime().date() + "\n" +
    "----------------------\n" +
    pos.setItemString(cart) +
    "----------------------\n" +
    "挥泪赠送商品：\n" +
    pos.setPromotionString(cart) + 
    "----------------------\n" +
    "总计：" + cart.getTotalPrice().toFixed(2) + "(元)\n" +
    "节省：" + cart.getSaving().toFixed(2) + "(元)\n" +
    "**********************";

  console.log(printString);
}
