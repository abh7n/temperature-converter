const form = document.getElementById('temp-form');
const tempValue = document.getElementById('temp-value');
const fromUnit = document.getElementById('from-unit');
const toUnit = document.getElementById('to-unit');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');

form.addEventListener('input', () => {
    convertBtn.disabled = !(tempValue.value && fromUnit.value && toUnit.value);
});

convertBtn.addEventListener('click', () => {
    const temperature = parseFloat(tempValue.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    let convertedTemperature;

    if (from === 'celsius') {
        if (to === 'fahrenheit') {
            convertedTemperature = temperature * 9/5 + 32;
        } else if (to === 'kelvin') {
            convertedTemperature = temperature + 273.15;
        }
    } else if (from === 'fahrenheit') {
        if (to === 'celsius') {
            convertedTemperature = (temperature - 32) * 5/9;
        } else if (to === 'kelvin') {
            convertedTemperature = (temperature - 32) * 5/9 + 273.15;
        }
    } else if (from === 'kelvin') {
        if (to === 'celsius') {
            convertedTemperature = temperature - 273.15;
        } else if (to === 'fahrenheit') {
            convertedTemperature = (temperature - 273.15) * 9/5 + 32;
        }
    }

    result.textContent = `${temperature} ${getUnitSymbol(from)} is equal to ${convertedTemperature.toFixed(2)} ${getUnitSymbol(to)}`;
});

function getUnitSymbol(unit) {
    switch (unit) {
        case 'celsius':
            return '°C';
        case 'fahrenheit':
            return '°F';
        case 'kelvin':
            return 'K';
        default:
            return '';
    }
}


