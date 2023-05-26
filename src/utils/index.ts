export function getRandomInteger(
  start: number,
  end: number
): number | undefined {
  let min = Math.min(start, end);
  let max = Math.max(start, end);

  if (min < 0 && max < 0) {
    return;
  }

  min = min < 0 ? 0 : Math.ceil(min);
  max = max < 0 ? 0 : Math.floor(max);

  return min === max ? min : Math.floor(Math.random() * (max - min + 1) + min);
}
