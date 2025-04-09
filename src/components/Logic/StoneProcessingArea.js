function StoneProcessingArea(array) {
  let totalArea = 0;

  array.forEach((item) => {
    // Извлекаем размеры из строки и преобразуем их в числа
    const dimensions = item.dimensions.split('x').map(Number);
    const length = dimensions[0]; // 2000
    const width = dimensions[1]; // 300
    const thickness = dimensions[2]; // 12 (не используется в расчетах, но можно оставить)

    const count = Number(item.count); // Преобразуем в число
    const volume = length * width * count; // Рассчитываем объем текущего объекта

    totalArea += volume; // Складываем общий объем
  });
  const totalAreaInSquareMeters = totalArea / 1_000_000;
  return totalAreaInSquareMeters;
}
export { StoneProcessingArea };
