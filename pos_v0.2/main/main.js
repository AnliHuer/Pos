function calculate_count(val,result_count){
    for(var i in result_count){
        if (val === result_count[i].barcode) {
            result_count[i].count++;
            return;
        }
    }
    result_count.push({
        barcode: val,
        count: 1
    });
    return;
}

function find_same_barcode(item,allItems,result){
    for(var i in allItems){
        if(item.barcode === allItems[i].barcode){
            result.push({
                barcode:allItems[i].barcode,
                name:allItems[i].name,
                unit:allItems[i].unit,
                price:allItems[i].price,
                count:item.count
            });
            return;
        }
    }
}

function print_text(val){
    text += "名称："+val.name+
        "，数量："+val.count+val.unit+
        "，单价："+val.price.toFixed(2)+
        "(元)，小计："+(val.count * val.price).toFixed(2)+"(元)"+"\n";
    sum_price += val.count * val.price;
}


var text = "***<没钱赚商店>收据***"+'\n';
var sum_price = 0;
function printReceipt(inputs) {
    var allItems = loadAllItems();
    var result_count = [];
    var result = [];
    inputs.forEach(function(val){
        calculate_count(val,result_count);
    })
    result_count.forEach(function(item){
        find_same_barcode(item,allItems,result);
    })
    result.forEach(function(val){
        print_text(val);
    })
    text += '----------------------\n'+'总计：'+sum_price.toFixed(2)+'(元)\n'+"**********************";
    console.log(text);
}