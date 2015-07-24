
function map_new_inputs(val,inputs_new){
  for(var i in inputs_new){
    if(val.barcode === inputs_new[i].barcode){
      inputs_new[i].count ++;
      return;
    }
  }
  inputs_new.push({
    barcode:val.barcode, name:val.name, price:val.price, unit:val.unit, count:1
  });
  return;
}

function printReceipt(inputs) {
  var result = "***<没钱赚商店>收据***"+'\n';
  var sum_price = 0;;
  var inputs_new = [];
  inputs.forEach(function(val){
    map_new_inputs(val,inputs_new);
  })
  inputs_new.forEach(function(item){
      result += "名称："+item.name+
      "，数量："+item.count+item.unit+
      "，单价："+item.price.toFixed(2)+
      "(元)，小计："+(item.count * item.price).toFixed(2)+"(元)"+"\n";
      sum_price += item.count * item.price;
  })
  result += '----------------------\n'+'总计：'+sum_price.toFixed(2)+'(元)\n'+"**********************";
  console.log(result);
}
