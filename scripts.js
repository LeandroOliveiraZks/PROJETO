const button = document.getElementById('button-convert')
const select = document.getElementById('select-moeda')

const dolar = 4.91
const euro = 5.40
const bitcoin = 149624.78

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const dolarValueText = document.getElementById('dolar-value-text')


    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if (select.value === "US$ Dólar americano") {
        dolarValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)
    }


    if (select.value === "€ Euro") {
        dolarValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro)
    } 

    if (select.value === "₿ Bitcoin") {
        dolarValueText.innerHTML = new Intl.NumberFormat(
               { style: 'currency', currency: 'BTC'}
           ).format(inputReais / bitcoin)
       }

   

}

changeMoeda = () => {
    const moedaName = document.getElementById("moeda-name")
    const moedaImg = document.getElementById("moeda-img")

    if (select.value === 'US$ Dólar americano') {
        moedaName.innerHTML = "Dólar americano"
        moedaImg.src = "./assets/eua.png"
    }

     if (select.value === '€ Euro') {
        moedaName.innerHTML = "Euro"
        moedaImg.src = "./assets/euro.png"
    }

    if (select.value === '₿ Bitcoin') {
        moedaName.innerHTML = "bitcoin"
        moedaImg.src = "./assets/bitcoin.png"
    }


     

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeMoeda)