// (1-2)
document.addEventListener('DOMContentLoaded', () => {
    // Найти секцию ЛР2
    const lab2Section = document.getElementById('lab2');

    // Создать контейнер для кнопок
    const buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('role', 'group');
    buttonContainer.setAttribute('aria-label', 'Кнопки Like и Dislike');

    // Создать кнопку "Like"
    const likeButton = document.createElement('button');
    likeButton.textContent = '👍 Like';
    likeButton.setAttribute('aria-pressed', 'false');
    likeButton.setAttribute('aria-label', 'Поставить лайк');
    likeButton.classList.add('like-button');

    // Создать кнопку "Dislike"
    const dislikeButton = document.createElement('button');
    dislikeButton.textContent = '👎 Dislike';
    dislikeButton.setAttribute('aria-pressed', 'false');
    dislikeButton.setAttribute('aria-label', 'Поставить дизлайк');
    dislikeButton.classList.add('dislike-button');

    // Добавить кнопки в контейнер
    buttonContainer.appendChild(likeButton);
    buttonContainer.appendChild(dislikeButton);

    // Добавить контейнер в секцию ЛР2
    lab2Section.appendChild(buttonContainer);

    // Функция для сброса состояния кнопок
    const resetButtons = () => {
        likeButton.classList.remove('active');
        likeButton.setAttribute('aria-pressed', 'false');
        dislikeButton.classList.remove('active');
        dislikeButton.setAttribute('aria-pressed', 'false');
    };

    // Обработчик для кнопки "Like"
    likeButton.addEventListener('click', () => {
        const isActive = likeButton.classList.contains('active');
        resetButtons();
        if (!isActive) {
            likeButton.classList.add('active');
            likeButton.setAttribute('aria-pressed', 'true');
        }
    });

    // Обработчик для кнопки "Dislike"
    dislikeButton.addEventListener('click', () => {
        const isActive = dislikeButton.classList.contains('active');
        resetButtons();
        if (!isActive) {
            dislikeButton.classList.add('active');
            dislikeButton.setAttribute('aria-pressed', 'true');
        }
    });
});


// (3) КОРЗИНА
document.addEventListener('DOMContentLoaded', () => {
    // Получаем элементы интерфейса
    const productNameInput = document.getElementById('product-name');
    const addProductButton = document.getElementById('add-product');
    const cartList = document.getElementById('cart-list');
    const errorMessage = document.getElementById('error-message');

    // Функция для добавления товара в корзину
    const addProduct = () => {
        const productName = productNameInput.value.trim();

        // Проверка на пустое значение
        if (productName === '') {
            errorMessage.style.display = 'block';
            return;
        }

        errorMessage.style.display = 'none';

        // Создаем элемент списка для нового товара
        const listItem = document.createElement('li');
        listItem.textContent = productName;

        // Создаем кнопку для удаления товара
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', () => {
            cartList.removeChild(listItem);
        });

        // Добавляем кнопку в элемент списка
        listItem.appendChild(deleteButton);

        // Добавляем новый товар в список корзины
        cartList.appendChild(listItem);

        // Очищаем поле ввода
        productNameInput.value = '';
    };

    // Обработчик события для кнопки "Добавить"
    addProductButton.addEventListener('click', addProduct);

    // Обработчик события для нажатия клавиши "Enter" в поле ввода
    productNameInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addProduct();
        }
    });
});


// (4) -    СОРТИРОВКА
document.addEventListener('DOMContentLoaded', () => {
    // 1. Генерируем массив случайных чисел
    const originalNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    let numbers = [...originalNumbers];

    // 2. Получаем элементы DOM
    const numberList = document.getElementById('number-list');
    const sortAscButton = document.getElementById('sort-asc');
    const sortDescButton = document.getElementById('sort-desc');
    const sortOriginalButton = document.getElementById('sort-original');

    // 3. Функция для отображения списка
    function renderList(arr) {
        numberList.innerHTML = ''; // Очищаем список
        arr.forEach(num => {
            const li = document.createElement('li');
            li.textContent = num;
            numberList.appendChild(li);
        });
    }

    // 4. Обработчики событий для кнопок
    sortAscButton.addEventListener('click', () => {
        numbers.sort((a, b) => a - b);
        renderList(numbers);
    });

    sortDescButton.addEventListener('click', () => {
        numbers.sort((a, b) => b - a);
        renderList(numbers);
    });

    sortOriginalButton.addEventListener('click', () => {
        numbers = [...originalNumbers]; // Восстанавливаем исходный массив
        renderList(numbers);
    });

    // 5. Отображаем числа при загрузке
    renderList(numbers);
});


// (5)  КООРДИНАТЫ
document.addEventListener('DOMContentLoaded', () => {
    const coordinatesText = document.getElementById('coordinates');

    document.addEventListener('click', (event) => {
        const x = event.clientX; // Координата X относительно окна браузера
        const y = event.clientY; // Координата Y относительно окна браузера
        const targetElement = event.target.tagName.toLowerCase(); // Название элемента

        coordinatesText.textContent = `X: ${x}, Y: ${y} - ${targetElement}`;
    });
});
