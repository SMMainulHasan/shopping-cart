//plus button
const plusBtn = document.getElementById("plusiphone");
plusBtn.addEventListener("click", function () {
    const iphoneQuentity = document.getElementById("quentityiphone").value;
    const iphoneQuentityNum = parseFloat(iphoneQuentity);
    document.getElementById("quentityiphone").value = iphoneQuentityNum + 1;
})
//minus button
const minusBtn = document.getElementById("minusiphone");
minusBtn.addEventListener("click", function () {
    const iphoneQuentity = document.getElementById("quentityiphone").value;
    const iphoneQuentityNum = parseFloat(iphoneQuentity);
    document.getElementById("quentityiphone").value = iphoneQuentityNum - 1;
})
