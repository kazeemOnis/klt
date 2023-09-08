export function formatToMoney(
  number: string,
  currency: string,
  fractionDigits: number,
) {
  const getNumber = parseFloat(number);
  const formattedNumber = getNumber.toLocaleString('en-US', {
    minimumFractionDigits: fractionDigits,
  });

  return `${currency}${formattedNumber}`;
}

export function numberParser(number: number | string, currency: string) {
  let minimumFractionDigits = 0,
    maximumFractionDigits = 0;
  if (Number(number) % 1 !== 0) {
    maximumFractionDigits = 2;
  }
  return `${currency}${new Intl.NumberFormat('en-US', {
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(Number(number))}`;
}

export function formatNumberToDecimal(number: string, decimals: number) {
  const getNumber = parseFloat(number);
  const formattedNumber = getNumber.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
  });

  return formattedNumber;
}

export function isSameDay(first: Date, second: Date) {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
}
