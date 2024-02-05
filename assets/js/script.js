// Render scores from the JSON file //
fetch("./docs/data.json")
    .then(response => response.json())
    .then(data => {
        const scoresContainer = document.getElementById('scores-container');

        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('scores-item', `${item.category.toLowerCase()}`);

            const categoryContainer = document.createElement('div');
            categoryContainer.classList.add('category-container');

            const iconElement = document.createElement('img');
            iconElement.classList.add('icon');
            iconElement.src = item.icon;
            iconElement.alt = `${item.category}`; 

            const categoryElement = document.createElement('p');
            categoryElement.classList.add('category');
            categoryElement.textContent = item.category;

            categoryContainer.appendChild(iconElement);
            categoryContainer.appendChild(categoryElement);

            const scoreElement = document.createElement('p');
            scoreElement.classList.add('score');

            const slashElement = document.createElement('span');
            slashElement.classList.add('slash');
            slashElement.textContent = ' / 100';

            scoreElement.appendChild(document.createTextNode(`${item.score} `)); 
            scoreElement.appendChild(slashElement);

            itemElement.appendChild(categoryContainer);
            itemElement.appendChild(scoreElement);

            scoresContainer.appendChild(itemElement);
        });
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));

// Render average score from the JSON file //
fetch("./docs/data.json")
    .then(response => response.json())
    .then(data => {
      const totalScore = data.reduce((sum, item) => sum + item.score, 0);

      const averageScore = Math.round(totalScore / data.length);
  
      const averageScoreElement = document.getElementById('average-score');
      averageScoreElement.textContent = `${averageScore}`;
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
  