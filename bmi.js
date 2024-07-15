function bmi() {
    var h = document.getElementById('height').value;
    var w = document.getElementById('Weight').value;

    if (!h || !w || h <= 0 || w <= 0) {
        document.getElementById('result').innerHTML = 'Please enter valid height and weight values.';
        return;
    }

    var bmi = w / ((h / 100) * (h / 100));
    var total = bmi.toFixed(2);

    var category = '';
    if (bmi < 16.0) {
        category = 'Severely underweight';
    } else if (bmi < 16.9) {
        category = 'Underweight (Severe thinness)';
    } else if (bmi < 18.4) {
        category = 'Underweight (Moderate thinness)';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight (Pre-obese)';
    } else if (bmi < 34.9) {
        category = 'Obese (Class I)';
    } else if (bmi < 39.9) {
        category = 'Obese (Class II)';
    } else {
        category = 'Obese (Class III)';
    }

    document.getElementById('result').innerHTML = 'Your BMI is ' + total + '<br>Weight Status: ' + category;
}
