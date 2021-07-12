function calcDecimal(decimal: string|number): string {
  // 타입 변경
  if(typeof decimal === "number"){
      decimal = String(decimal)
  }

  // e 지수 처리
  const exponent = decimal.indexOf("e");
  if (exponent >= 0) {
    decimal = Number(decimal)
      .toFixed(8)
      .replace(/(\.0*$)|(0*$)/, "");
    return String(decimal);
  }

  // 소수점 처리(내림처리를 하기 위함)
  const strPoint = decimal.indexOf(".");
  if (strPoint !== -1) {
    const mainStr = decimal.substr(0, strPoint);
    const subStr = decimal.substr(strPoint, 9);
    decimal = mainStr + subStr;
  }

  // 뒷자리 0처리
  decimal = Number(decimal)
    .toFixed(8)
    .replace(/(\.0*$)|(0*$)/, "");

  return String(decimal);
  }

console.log(calcDecimal(0.1231312414214124))
