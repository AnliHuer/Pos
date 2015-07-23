function calculateBuyCount(val, result) {
    for (var i in result) {
        if (val.split('-')[0] === result[i].barcode) {
            result[i].count += val.indexOf('-') > -1 ? val.split('-')[1] : 1;
            return;
        }
    }
    result.push({
        barcode: (val.split('-')[0]), count: (val.indexOf('-') > -1 ? val.split('-')[1] : 1)
    });
    return;
}


function getBuyItems(item, allItems, buyItems) {
    for (var i in allItems) {
        if (item.barcode === allItems[i].barcode) {
            buyItems.push({
                barcode: allItems[i].barcode,
                name: allItems[i].name,
                unit: allItems[i].unit,
                price: allItems[i].price,
                count: item.count
            });
            return;
        }
    }
}


function addPromotions(val, allPromotions) {
    var newBuyItems = [];
    var obj = {
            barcode: val.barcode,
            name: val.name,
            unit: val.unit,
            price: val.price,
            count: val.count,
            countPromotion: 0,
            sumPrice: (val.count * val.price),
            sumPriceReal: (val.price * val.count)
        };
    for (var i in allPromotions[0].barcodes) {
        if (val.barcode === allPromotions[0].barcodes[i] && val.count >= 2) {
            obj.countPromotion = 1;
            obj.sumPriceReal = (val.price * (val.count - 1));
            newBuyItems.push(obj);
            return newBuyItems;
        }
    }
    newBuyItems.push(obj);
    return newBuyItems;
}


function printText1(val, obj) {
    obj.text1 += "名称：" + val[0].name +
        "，数量：" + val[0].count + val[0].unit +
        "，单价：" + val[0].price.toFixed(2) + "(元)"+
        "，小计：" + ((val[0].count - val[0].countPromotion) * val[0].price).toFixed(2) + "(元)" + "\n";
    if (val[0].countPromotion !== 0) {
        obj.text2 += "名称：" + val[0].name +
            "，数量：" + val[0].countPromotion + val[0].unit + '\n';
    }
    obj.total += val[0].sumPriceReal;
    if (val[0].countPromotion !== 0) {
        obj.saveTotal += val[0].price * val[0].countPromotion;
    }
}


function textResult(obj, text) {
    text += obj.text1 + '----------------------\n';
    if (obj.text2 !== "") {
        text += '挥泪赠送商品：\n' + obj.text2 + '----------------------\n' +
            '总计：' + obj.total.toFixed(2) + '(元)\n';
    }
    if (obj.saveTotal !== 0) {
        text += '节省：' + obj.saveTotal.toFixed(2) + '(元)\n';
    }
    text += '**********************';
    return text;
}


function printReceipt(inputs) {
    var allItems = loadAllItems();
    var allPromotions = loadPromotions();
    var buyItemCount = [], buyItems = [];
    var text = "***<没钱赚商店>收据***" + '\n';
    var obj = {
        text1: "", text2: "", total: 0, saveTotal: 0
    };
    inputs.forEach(function (val) {
        calculateBuyCount(val, buyItemCount)
    })
    buyItemCount.forEach(function (val) {
        getBuyItems(val, allItems, buyItems);
    })
    var newBuyItems = buyItems.map(function (val) {
        return addPromotions(val, allPromotions);
    })
    newBuyItems.forEach(function (val) {
        printText1(val, obj);
    })
    text = textResult(obj, text);
    console.log(text);
}
