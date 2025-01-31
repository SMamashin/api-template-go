function getData() {
    fetch("https://api.smamashin.ru/user")
    .then(response => response.json())
    .then(data => {
        document.getElementById("output").style.display = "none";

        const container = document.getElementById("data-container");
        const noData = "Не указано";

        const avatar =data[0]?.ava || noData;
        const firstName = data[0]?.first_name || noData;
        const lastName = data[0]?.last_name || noData;
        const fullName = data[0]?.full_name || noData;
        const age = data[0]?.age || noData;
        const nickname = data[0]?.nickname || noData;
        const location = data[0]?.location || noData;
        const occupation = data[0]?.occupation || noData;

        container.innerHTML = `
            <h1>Данные о пользователе</h1>
            <img src="${avatar}">
            <div class="data-item"><span class="label">Имя:</span> <span class="value">${firstName}</span></div>
            <div class="data-item"><span class="label">Фамилия:</span> <span class="value">${lastName}</span></div>
            <div class="data-item"><span class="label">Полное имя:</span> <span class="value">${fullName}</span></div>
            <div class="data-item"><span class="label">Возраст:</span> <span class="value">${age}</span></div>
            <div class="data-item"><span class="label">Никнейм:</span> <span class="value">${nickname}</span></div>
            <div class="data-item"><span class="label">Местоположение:</span> <span class="value">${location}</span></div>
            <div class="data-item"><span class="label">Род деятельности:</span> <span class="value">${occupation}</span></div>
        `;
    })
        .catch(error => {
            document.getElementById("output").innerText = "Ошибка: " + error;
        });
}
//df
getData();