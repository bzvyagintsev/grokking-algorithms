/**
 * Поиск в ширину
 * Breadth-first search
 */ 

var graph = {};
// Нужно построить граф

function bfs(startingPoint) {
  var queue = [...graph[startingPoint]];
  var searched = [];

  while(queue) {
    var element = queue.shift();

    if (!element in searched) {
      if (check(element)) {
        return true; // Если элемент найден, завершаем цикл
      } else {
        queue.push(graph[element]); // Добавляем соседние узлы
        searched.push(element); // Добавляем узел в список проверенных
      }
    }
  }

  return false;
}

// Просто для примера
function check(name) {
  if (name && name.length > 5) {
    return true;
  }

  return false;
}
