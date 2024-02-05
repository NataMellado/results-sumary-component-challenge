fetch('../data.json')
    .then(response => response.json())
    .then(data => {
        const scoresContainer = document.getElementById('scores-container');

        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('scores-item');

            // Crear elemento de imagen y establecer la ruta desde el JSON
            const iconElement = document.createElement('img');
            iconElement.classList.add('icon');
            iconElement.src = item.icon;
            iconElement.alt = `${item.category}`; // Agrega un atributo alt para accesibilidad

            // Crear párrafo con categoría y establecer clase
            const categoryElement = document.createElement('p');
            categoryElement.classList.add('category');
            categoryElement.textContent = item.category;

            // Crear contenedor para el puntaje
            const scoreWrapper = document.createElement('div');
            scoreWrapper.classList.add('score-wrapper');

            // Crear párrafo con puntaje y establecer clase
            const scoreElement = document.createElement('p');
            scoreElement.classList.add('score');
            scoreElement.textContent = item.score;

            // Crear párrafo con "/ 100" y establecer clase
            const slashElement = document.createElement('span');
            slashElement.classList.add('slash');
            slashElement.textContent = ' / 100';

            // Agregar párrafos al contenedor de puntaje
            scoreWrapper.appendChild(scoreElement);
            scoreWrapper.appendChild(slashElement);

            // Agregar elementos al contenedor principal
            itemElement.appendChild(iconElement);
            itemElement.appendChild(categoryElement);
            itemElement.appendChild(scoreWrapper);

            // Agregar el elemento al contenedor principal
            scoresContainer.appendChild(itemElement);
        });
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
