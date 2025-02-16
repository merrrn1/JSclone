// (1)Конвертация температуры
function convertTemperature(value, scale) {
    if (scale === "toC") {
        return `${((value - 32) * 5/9).toFixed(2)} C`;
    } else if (scale === "toF") {
        return `${(value * 9/5 + 32).toFixed(2)} F`;
    } else {
        return "Ошибка: укажите 'toC' или 'toF'";
    }
}

console.log(convertTemperature(32, "toC")); // "0.00 C"
console.log(convertTemperature(10, "toF")); // "50.00 F"


// (2)Треугольник
function analyzeTriangle(a, b, c) {
    // Проверка существования треугольника
    if (a + b > c && a + c > b && b + c > a) {
        console.log('Треугольник существует');

        // Вычисление периметра
        const P = a + b + c;
        console.log('Периметр =', P);

        // Вычисление полупериметра
        const s = P / 2;

        // Вычисление площади по формуле Герона
        const S = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        console.log('Площадь =', S.toFixed(2));

        // Вычисление отношения периметра к площади
        const R = P / S;
        console.log('Соотношение периметра к площади =', R.toFixed(2));
    } else {
        console.log('Треугольник не существует');
    }
}
// Пример использования функции (стороны треугольника кастомно)
analyzeTriangle(3, 4, 5);



// (3)Fizz-Buzz
const limit = 15;

// Запускаем цикл от 0 до значения переменной limit
for (let i = 0; i <= limit; i++) {
    // Проверяем, делится ли число на 5
    if (i % 5 === 0) {
        console.log(`${i} fizz buzz`);
    } else if (i % 2 === 0) {
        // Проверяем, является ли число чётным
        console.log(`${i} buzz`);
    } else {
        // Если число нечётное
        console.log(`${i} fizz`);
    }
}

// (4)Ёлка
// количество уровней ёлки
const levels = 12;

// пустая строка для хранения ёлки
let tree = '';

// Генерируем уровни ёлки
for (let i = 1; i <= levels; i++) {
    // Определяем символ для текущего уровня
    const symbol = i % 2 === 0 ? '#' : '*';
    // Добавляем строку с повторяющимся символом и перенос строки
    tree += symbol.repeat(i) + '\n';
}
// Добавляем ствол ёлки
tree += '||';
// Вывод ёлки консоль
console.log(tree);


// (5)Деление
function divide(dividend, divisor) {
    // Проверка на корректность типов данных
    if (typeof dividend !== 'number' || typeof divisor !== 'number') {
        return 'Ошибка: оба аргумента должны быть числами.';
    }

    // Проверка на деление на ноль
    if (divisor === 0) {
        return 'Ошибка: деление на ноль невозможно.';
    }

    // Выполнение деления
    const result = dividend / divisor;
    return `Результат: ${result}`;
}
// консоль
console.log(divide(10, 2)); // Результат: 5
console.log(divide(10, 0)); // Ошибка: деление на ноль невозможно
console.log(divide(10, 'a')); // Ошибка: оба аргумента должны быть числами


// (6)Сендвичи с сыром
function countSandwiches(ingredients) {
    const bread = Number.isInteger(ingredients.bread) ? ingredients.bread : 0;
    const cheese = Number.isInteger(ingredients.cheese) ? ingredients.cheese : 0;

    if (bread < 0 || cheese < 0) {
        throw new Error("Количество ингредиентов не может быть отрицательным.");
    }

    return Math.min(Math.floor(bread / 2), cheese);
}
// Примеры
console.log(countSandwiches({ bread: 5, cheese: 6 })); // 2
console.log(countSandwiches({ bread: 8, cheese: 3 })); // 3


// (7)Абсолютное значение 
function absoluteValue(number) {
    return Math.abs(number);
}
// Примеры использования:
console.log(absoluteValue(-5)); // 5
console.log(absoluteValue(3));  // 3
console.log(absoluteValue(0));  // 0
console.log(absoluteValue(-123.45)); // 123.45


// (8)Случайные числа 
function getRandomInt(min, max) {
    min = Math.ceil(min); // Округляем min вверх до ближайшего целого
    max = Math.floor(max); // Округляем max вниз до ближайшего целого
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(getRandomInt(1, 10)); // Выведет случайное число от 1 до 10 включительно


// (9)Значения из массива 
function getRandomElement(arr) {
    const randomIndex = getRandomInt(0, arr.length - 1);
    return arr[randomIndex];
  }
  const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
  console.log(getRandomElement(colors)); // Выведет случайный цвет из массива

  
// (10)Фильтрация массива
function filterEvenNumbers(numbers) {
    return numbers.filter(function(number) {
      return number % 2 === 0;
    });
  }
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = filterEvenNumbers(numbers);
  console.log(evenNumbers); // [2, 4, 6, 8, 10]

  

// (11)Равенство чисел с плавающей запятой
function areNumbersEqual(num1, num2) {
    return Math.abs(num1 - num2) < 0.01;
  }
  console.log(areNumbersEqual(0.1234, 0.1235)); // true
  console.log(areNumbersEqual(0.1234, 0.1245)); // false
    
  