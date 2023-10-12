export default class Server {
    constructor(HOST) {
        this.HOST = HOST;
    }

    async request(method, params) {
        if (method) {
            try {
                const str = Object.keys(params)
                    .map(key => `${key}=${params[key]}`)
                    .join('&');
                const res = await fetch(
                    `${this.HOST}?method=${method}&${str}`
                );
                console.log(1001, res);
                const answer = await res.json();
                console.log(1002);
                if (answer.result === 'ok') {
                    return answer.data;
                }
                // обработать влетевшую ошибку
            } catch (e) {
                return null;
            }
        }
        return null;
    }

    login(login, password) {
        return this.request('login', { login, password });
    }
}