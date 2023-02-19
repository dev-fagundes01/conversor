const button = document.getElementById('convert-button')


const convertValues= async ()=>{
    const inputReais=document.getElementById('input').value
    const realValueText=document.getElementById('real-value-text')
    const currencyValueText=document.getElementById('currency-value-text')
   
    const data= await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(Response => Response.json())

    const dolar=data.USDBRL.high
    const euro=data.EURBRL.high
    const bitcoin=data.BTCBRL.high

    realValueText.innerHTML=new Intl.NumberFormat("pt-BR", {
    style: "currency", 
    currency: "BRL"
    }).format(inputReais)

    if(select.value==='US$ Dolar americano')
    currencyValueText.innerHTML=new Intl.NumberFormat("en-US", {
    style: "currency", 
    currency: "USD"
    }).format(inputReais/dolar)

    if(select.value==='€ Euro')
    currencyValueText.innerHTML=new Intl.NumberFormat("de-DE", {
    style: "currency", 
    currency: "EUR"
    }).format(inputReais/euro)

    if(select.value==='Bitcoin')
    currencyValueText.innerHTML=new Intl.NumberFormat("en-US", {
    style: "currency", 
    currency: "BTC"
    }).format(inputReais/bitcoin)
}

button.addEventListener("click", convertValues)

const select=document.getElementById("currency-select")

changeCurrency= () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if(select.value==='US$ Dolar americano'){
        currencyName.innerHTML="Dolar americano"
        currencyImg.src ="./img/eua.svg"
    }
    if(select.value==='€ Euro'){
        currencyName.innerHTML="Euro"
        currencyImg.src ="./img/UE.svg"
    }
    if(select.value==='Bitcoin'){
        currencyName.innerHTML="Bitcoin"
        currencyImg.src ="./img/Btc.png"
    }
    convertValues()
}

select.addEventListener("change",  changeCurrency)
