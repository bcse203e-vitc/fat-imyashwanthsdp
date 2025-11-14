function getNumbers() {
    const input = document.getElementById("numbers").value.trim();
    const errorDiv = document.getElementById("error");
    const output = document.getElementById("output");
    errorDiv.textContent = "";
    output.textContent = "";
    if (input === "") {
        errorDiv.textContent = "Error: Please enter a list of numbers.";
        return null;
    }
    const tokens = input.split(/\s+/);
    const numbers = tokens.map(num => parseFloat(num));
    if (numbers.some(isNaN)) {
        errorDiv.textContent = "Error: Input contains invalid (non-numeric) values.";
        return null;
    }
    return numbers;
}
function calculateMean() {
    const nums = getNumbers();
    if (!nums) return;
    const mean = nums.reduce((a,b)=>a+b,0) / nums.length;
    document.getElementById("output").textContent = "Mean: " + mean.toFixed(4);
}
function calculateVariance() {
    const nums = getNumbers();
    if (!nums) return;
    const mean = nums.reduce((a,b)=>a+b,0) / nums.length;
    const variance = nums.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / nums.length;
    document.getElementById("output").textContent = "Variance: " + variance.toFixed(4);
}
function calculateStdDev() {
    const nums = getNumbers();
    if (!nums) return;
    const mean = nums.reduce((a,b)=>a+b,0) / nums.length;
    const variance = nums.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / nums.length;
    const stddev = Math.sqrt(variance);
    document.getElementById("output").textContent = "Standard Deviation: " + stddev.toFixed(4);
}