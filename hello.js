//plus button
const plusBtn = document.getElementById("plusiphone");
plusBtn.addEventListener("click", function () {
    const iphoneQuentity = document.getElementById("quentityiphone").value;
    const iphoneQuentityNum = parseFloat(iphoneQuentity);
    const Quentity = document.getElementById("quentityiphone").value = iphoneQuentityNum + 1;
    // const iphonePrice = document.getElementById("iphonePrice").innerText;
    // const iphonePriceNum = parseFloat(iphonePrice);
    const price = 1219 * Quentity;
    document.getElementById("iphonePrice").innerText = price;
})
//minus button
const minusBtn = document.getElementById("minusiphone");
minusBtn.addEventListener("click", function () {
    const iphoneQuentity = document.getElementById("quentityiphone").value;
    const iphoneQuentityNum = parseFloat(iphoneQuentity);
    const quentity = document.getElementById("quentityiphone").value = iphoneQuentityNum - 1;
    // const iphonePrice = document.getElementById("iphonePrice").innerText;
    // const iphonePriceNum = parseFloat(iphonePrice);
    const price = 1219 * quentity;
    document.getElementById("iphonePrice").innerText = price;
})
