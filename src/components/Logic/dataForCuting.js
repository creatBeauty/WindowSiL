// функция prepareDataForCutting обрабатывает входные данные, проверяет их на корректность и возвращает массив объектов, представляющих детали, которые могут быть использованы для дальнейшей обработки или раскроя.

const CUTTING_MARGIN = 10; // 10 мм - это дополнительный размер для раскроя

function prepareDataForCutting(basketItems) {
  // Проверяем входные данные
  if (!Array.isArray(basketItems) || basketItems.length === 0) {
    console.warn('Корзина пуста или неверный формат данных');
    return [];
  }

  // Обновленная валидация для обработки входных данных
  const invalidItems = basketItems.filter((item) => {
    if (!item || typeof item.count === 'undefined' || !item.dimensions) {
      return true;
    }

    const dimensions = item.dimensions.split('x');
    const width = parseFloat(dimensions[0]);
    const length = parseFloat(dimensions[1]);
    const thickness = parseFloat(dimensions[2]);

    return (
      isNaN(width) ||
      isNaN(length) ||
      isNaN(thickness) ||
      width <= 0 ||
      length <= 0 ||
      thickness <= 0 ||
      parseFloat(item.count) <= 0
    );
  });

  if (invalidItems.length > 0) {
    console.error('Некорректные данные в элементах корзины:', invalidItems);
    return [];
  }

  // Преобразуем данные в новый формат
  const result = [];
  let detailCounter = 0; // Счетчик для нумерации деталей

  basketItems.forEach((item) => {
    const dimensions = item.dimensions.split('x');
    const width = parseFloat(dimensions[0]) + CUTTING_MARGIN;
    const length = parseFloat(dimensions[1]) + CUTTING_MARGIN;
    const thickness = parseFloat(dimensions[2]);
    const count = parseInt(item.count) || 0;

    if (count <= 0) return;

    for (let i = 0; i < count; i++) {
      // Основная деталь
      result.push({
        id: detailCounter.toString(),
        width: width,
        height: length,
      });
      detailCounter++;

      // Боковые детали
      result.push({
        id: detailCounter.toString(),
        width: thickness,
        height: length,
      });
      detailCounter++;

      // Короткие боковые детали (спереди и сзади)
      result.push({
        id: detailCounter.toString(),
        width: width,
        height: thickness,
      });
      detailCounter++;

      result.push({
        id: detailCounter.toString(),
        width: width,
        height: thickness,
      });
      detailCounter++;
    }
  });

  return result;
}

export { prepareDataForCutting };
