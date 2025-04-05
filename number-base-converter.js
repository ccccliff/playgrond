//진법 변환기
//NOTE - n 은 숫자 base는 몇 진법인지

function toBase(n, base) {
  if (n === 0) {
    return 0;
  }
  if (base > 16) {
    return "16진법 초과";
  }
  const charset = "0123456789ABCDEF";

  let numLength = 0;

  while (base ** numLength <= n) {
    numLength++;
  }

  let digits = [];
  let variableNum = n;

  for (let i = 1; i <= numLength; i++) {
    let digitValue = base ** (numLength - i);
    let maxDigit = Math.floor(variableNum / digitValue);
    digits.push(maxDigit);
    variableNum -= maxDigit * digitValue;
  }

  return digits.map((d) => charset[d]).join("");
}
