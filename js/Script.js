function calculate() {
    // Ambil nilai dari input
    var sideLength = parseFloat(document.getElementById("sideLength").value);

    // Hitung luas dan keliling
    var area = sideLength * sideLength;
    var perimeter = 4 * sideLength;

    // Tampilkan cara pengerjaan
    var calculationSteps = "L: S x S<br>";
    calculationSteps += "L: " + sideLength + " x " + sideLength + "<br>";
    calculationSteps += "L: " + area;

    document.getElementById("calculation-steps").innerHTML = calculationSteps;
}

function resetForm() {
    // Reset nilai input, hasil, dan cara pengerjaan
    document.getElementById("sideLength").value = "";
    document.getElementById("area-result").innerHTML = "";
    document.getElementById("perimeter-result").innerHTML = "";
    document.getElementById("calculation-steps").innerHTML = "";
}
