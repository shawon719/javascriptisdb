var p = parseInt(prompt("Enter the value of P:"));
var count = 0;
if (p == 0 || p == 1) {
  document.write("Entered number is not prime or composite.");
} else {
  for (var i = 2; i < p; i++) {
    if (p % i == 0) {
      count++;
      break;
    }
  }
  if (count > 0) {
    document.write(p, "  is not prime number.");
  } else {
    document.write(p, "    is prime number.");
  }
}
