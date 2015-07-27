function printReceipt(inputs) {
  var scanner = new Scanner();
  var cart = new Cart();
  inputs.forEach(function(val) {
    var cartItem = scanner.scan(val);
    cart.add(cartItem);
  });

  var pos = new Pos(cart);
  var printString = "***<没钱赚商店>收据***\n" +
    "打印时间：" + new DateTime().date() + "\n" +
    "----------------------\n" +
    pos.setItemString() + "\n" +
    "----------------------\n" +
    "挥泪赠送商品：\n" +
    pos.setPromotionString + "\n" +
    "总计：" + cart.getTotalPrice() + "\n" +
    "节挥泪赠送商品：\n省：" + cart.getSaving() + "\n" +
    "**********************";
  return printString;
}
