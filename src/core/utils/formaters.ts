export const formattedDateString = (milliseconds: number): string => {
  if (!milliseconds) return '';

  const date = new Date(milliseconds);
  const auxDate = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());

  return auxDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

export const formatNumberWithDecimals = (num: number, decimals: number): number => {
  let aux = num.toString();
  const needsTruncation = aux.indexOf('.') !== -1 && aux.length - aux.indexOf('.') > decimals;
  if (needsTruncation) aux = aux.slice(0, aux.indexOf('.') + decimals);

  return Number(aux);
};

export const truncateNumberDecimals = (num: number, decimals: number) => {
  const integer = num.toString().split('.')[0];
  const dec = num.toString().split('.')[1];
  return !dec ? Number(integer) : Number(integer + '.' + dec.slice(0, decimals));
};
