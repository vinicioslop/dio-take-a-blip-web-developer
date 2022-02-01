// exemplo estrutura 
// Após 2 segundos, retornará o valor
// 'Resolvida! panssando pelo then e agora acabou!'
async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(console.log('Resolvida!'));
        }, 2000);
    });

    const resolved = await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message));

    return resolved;
}

await resolvePromise();

// Para chamar um função assincrona é preciso usar a palavra
// chave await antes da função para aguardar o seu resultado,
// se não será recebido uma mensagem de pending (que fala que
// está esperando o resultado, mas n será retornado).
// exemplo:
// resolvePromise()
// > Promise { <pending> }
// await resolvePromise()
// "Resolvida! panssando pelo then e agora acabou!"