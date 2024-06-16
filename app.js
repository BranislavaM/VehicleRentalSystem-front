// Get the elements for Car Value
const carValueInput = document.getElementById('carValue');
const carValueRange = document.getElementById('carValueRange');

// Update the input value when slider changes
carValueRange.addEventListener('input', function() {
    carValueInput.value = carValueRange.value;
});

// Update the slider value when input changes
carValueInput.addEventListener('input', function() {
    let value = parseInt(carValueInput.value);
    if (value < parseInt(carValueRange.min)) {
        value = carValueRange.min;
    } else if (value > parseInt(carValueRange.max)) {
        value = carValueRange.max;
    }
    carValueRange.value = value;
    carValueInput.value = value;
});

// Initialize input value with slider value
carValueInput.value = carValueRange.value;

// Get the elements for Down Payment
const downPaymentInput = document.getElementById('downPayment');
const downPaymentRange = document.getElementById('downPaymentRange');

// Update the input value when slider changes
downPaymentRange.addEventListener('input', function() {
    downPaymentInput.value = downPaymentRange.value;
});

// Update the slider value when input changes
downPaymentInput.addEventListener('input', function() {
    let value = parseInt(downPaymentInput.value);
    if (value < parseInt(downPaymentRange.min)) {
        value = downPaymentRange.min;
    } else if (value > parseInt(downPaymentRange.max)) {
        value = downPaymentRange.max;
    }
    downPaymentRange.value = value;
    downPaymentInput.value = value;
});

// Initialize input value with slider value
downPaymentInput.value = downPaymentRange.value;