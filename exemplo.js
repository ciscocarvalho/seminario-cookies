function logCookies() {
    console.log("Valores dos cookies:", document.cookie);
}

const data = new Date(9999, 0, 1);

document.cookie = 'nome=Francisco; expires=' + data.toUTCString();

logCookies()

document.cookie = 'sobrenome=Carvalho; expires=' + data.toUTCString();

logCookies()