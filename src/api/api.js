class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _checkResult(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }
    //получить данные
    getData() {
        return fetch(
            `${this._url}`,
            {
                method: 'GET',
                headers: {
                    "Content-type": 'application/json',
                },
            })
            .then(this._checkResult)
    }
    // редактирование записи
    updateData(id, newName, newAge) {
        return fetch(
            `${this._url}/${id}`,
            {
                method: "POST",
                headers: {
                    "Content-type": 'application/json',
                },
                body: JSON.stringify({ data: { name: newName, age: newAge } })
            })
            .then(this._checkResult)
    }

    // добавление новой записи
    loadNewData(name, age) {
        return fetch(`${this._url}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: { name: name, age: age } })
        })
            .then(this._checkResult)
    }

    //удаление записи
    deleteData(id) {
        console.log(id);
        return fetch(`${this._url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(this._checkResult);
    }

}

export const api = new Api({
    url: 'http://178.128.196.163:3000/api/records',
    headers: {
        "Content-type": "application/json",
    },
})