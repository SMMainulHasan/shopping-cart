
function addQuantity(inCrease) {
    const iphoneQuantity = document.getElementById("Quantityiphone");
    const iphoneQuantityNum = parseInt(iphoneQuantity.value);
    let Quantity = iphoneQuantityNum;
    if (inCrease == true) {
        Quantity = iphoneQuantityNum + 1;
    }
    if (inCrease == false && Quantity > 1) {
        Quantity = iphoneQuantityNum - 1;
    }
    iphoneQuantity.value = Quantity;
    const price = 1219 * Quantity;
    document.getElementById("iphonePrice").innerText = "$" + price;
}
