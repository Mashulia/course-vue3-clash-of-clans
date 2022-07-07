export const process = {
    dev: 'false'
}
export const site = {
    home: process.dev? "http://localhost:8080": "https://ivanov.ru"
}

export const links = [
    {
        title: 'Home',
        alias: 'home',
        url: '/'
    },
    {
        title: 'About',
        alias: 'about',
        url: '/about'
    },

]

export const app = {
    title: 'Hello Vue'
}
