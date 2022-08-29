export class GeraEmail {

    geraEmailSenha(tamanho) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = ' ';

        const charactersLength = characters.length;
        for (let i = 0; i < tamanho; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}