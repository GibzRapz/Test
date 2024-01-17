function calculate() {
    // Get the side length value
    var sideLength = parseFloat(document.getElementById('sideLength').value);

    // Validate input
    if (isNaN(sideLength) || sideLength <= 0) {
        alert('Masukkan panjang sisi yang valid.');
        return;
    }

    // Calculate area and perimeter
    var area = sideLength * sideLength;
    var perimeter = 4 * sideLength;

    // Display the result
    document.getElementById('areaResult').innerText = 'Luas: ' + area.toFixed(2);
    document.getElementById('perimeterResult').innerText = 'Keliling: ' + perimeter.toFixed(2);

    // Show the result container
    document.getElementById('resultContainer').style.display = 'block';
}

function resetForm() {
    // Reset input value
    document.getElementById('sideLength').value = '';

    // Hide the result container
    document.getElementById('resultContainer').style.display = 'none';
}
