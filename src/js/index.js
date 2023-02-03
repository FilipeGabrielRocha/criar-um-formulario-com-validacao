const camposCompletar = document.querySelectorAll('.campos-preencher')

const botaoEnviar = document.querySelector('.btn-enviar')

camposCompletar.forEach(item => {
    item.addEventListener('change', (event) => {
        const temClassePreenchida = document.querySelector('.preenchido')
        const temClasseNaoPreenchida = document.querySelector('.nao-preenchido')

        if (event.target.value != '') {
            if (temClasseNaoPreenchida){
                item.classList.remove('nao-preenchido')
            }
            item.classList.add('preenchido')

        } else {
            if (temClassePreenchida) {
                item.classList.remove('preenchido')
            }

            item.classList.add('nao-preenchido')
        }
    })
})

botaoEnviar.addEventListener('click', () => {
    camposCompletar.forEach((item) => {
        if (!item.classList.contains('preenchido')){
            item.classList.add('nao-preenchido')
        }
    })
})

