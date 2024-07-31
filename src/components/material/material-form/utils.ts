export function checkLastRowFilled<T>(rows: T[]): boolean {
  if (rows.length === 0) {
    return true;
  }
  const lastIndex = rows.length - 1;
  const lastRow = rows[lastIndex];

  if (!lastRow) {
    return false;
  }

  return Object.values(lastRow).every((value) => {
    return value !== '' && value !== undefined && value !== null;
  });
}
