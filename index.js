// conversion functions and event handling
function convert() {
    var valueInput = document.getElementById('value');
    var conversionTypeSelect = document.getElementById('conversionType');
    var conversionResult = document.getElementById('conversionResult');
    var value = parseFloat(valueInput.value);
    var conversionType = conversionTypeSelect.value;

    if (isNaN(value)) {
      conversionResult.innerText = 'Please enter a valid numeric value.';
      return;
    }

    
    if (conversionType === 'weight') {
      var result = weightConversion(value);
      conversionResult.innerText = result;
    } else if (conversionType === 'length') {
        // Call length conversion function
      var result = lengthConversion(value);
      conversionResult.innerText = result;
      
      
    } else if (conversionType === 'currency') {
        // Call currency conversion function
      var result = currencyConversion(value);
      conversionResult.innerText = result;
      
    
    }
  }

  // Weight Conversion Functions
  function weightConversion(value) {
    var result;
    var poundsToKilograms = value * 0.45359237;
    var kilogramsToPounds = value / 0.45359237;
    var gramsToOunces = value * 0.03527396;
    var ouncesToGrams = value / 0.03527396;

    result = value + " lbs = " + poundsToKilograms + " kg\n";
    result += value + " kg = " + kilogramsToPounds + " lbs\n";
    result += value + " g = " + gramsToOunces + " oz\n";
    result += value + " oz = " + ouncesToGrams + " g";

    return result;
  }
  // Length Conversion Functions
  function lengthConversion(value) {
    var result;
    var yardsToMeters = value * 0.9144;
    var metersToYards = value / 0.9144;
    var kmToMiles = value * 0.62137119;
    var milesToKm = value / 0.62137119;
    var feetToMeters = value * 0.3048;
    var metersToFeet = value / 0.3048;
    var inchesToCm = value * 2.54;
    var cmToInches = value / 2.54;

    result = value + " yards = " + yardsToMeters + " meters\n";
    result += value + " meters = " + metersToYards + " yards\n";
    result += value + " km = " + kmToMiles + " miles\n";
    result += value + " miles = " + milesToKm + " km\n";
    result += value + " feet = " + feetToMeters + " meters\n";
    result += value + " meters = " + metersToFeet + " feet\n";
    result += value + " inches = " + inchesToCm + " cm\n";
    result += value + " cm = " + cmToInches + " inches";

    return result;
  }
  // Currency Conversion Functions
  function currencyConversion(value) {
    var result;
    var kenyaToUSD = value * 0.0072; 
    // 1 Kenyan Shilling (KES) = 0.0072 USD

    var ugandaToUSD = value * 0.00027; 
    // 1 Ugandan Shilling (UGX) = 0.00027 USD

    var rwandaToUSD = value * 0.00087; 
    // 1 Rwandan Franc (RWF) = 0.00087 USD

    var tanzaniaToUSD = value * 0.00041; 
    // 1 Tanzanian Shilling (TZS) = 0.00041 USD

    result = value + " KES = " + kenyaToUSD + " USD\n";
    result += value + " UGX = " + ugandaToUSD + " USD\n";
    result += value + " RWF = " + rwandaToUSD + " USD\n";
    result += value + " TZS = " + tanzaniaToUSD + " USD";

    return result;
  }