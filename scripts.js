const button = document.getElementById('convert-button')

const dolar=5.2
const euro=5.9
const Bitcoin=105.237

const convertValues=()=>{
    const inputReais=document.getElementById('input').value
    const realValueText=document.getElementById('real-value-text')
    const currencyValueText=document.getElementById('currency-value-text')
    
    //realValueText.innerHTML=inputReais

    realValueText.innerHTML=new Intl.NumberFormat("pt-BR", {
    style: "currency", 
    currency: "BRL"
    }).format(inputReais)

    //currencyValueText.innerHTML=inputReais/dolar

    if(select.value==='US$ Dolar americano')
    currencyValueText.innerHTML=new Intl.NumberFormat("en-US", {
    style: "currency", 
    currency: "USD"
    }).format(inputReais/dolar)

    if(select.value==='€ euro')
    currencyValueText.innerHTML=new Intl.NumberFormat("de-DE", {
    style: "currency", 
    currency: "EUR"
    }).format(inputReais/euro)

    if(select.value==='Bitcoin')
    currencyValueText.innerHTML=new Intl.NumberFormat("en-US", {
    style: "currency", 
    currency: "BTC"
    }).format(inputReais/Bitcoin)
}

button.addEventListener("click", convertValues)

const select=document.getElementById("currency-select")

changeCurrency= () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if(select.value==='€ euro'){
        currencyName.innerHTML="euro"
        currencyImg.src ="./img/euro.svg"
    }
    if(select.value==='US$ Dolar americano'){
        currencyName.innerHTML="US$ Dolar americano"
        currencyImg.src ="./img/eua.svg"
    }
    if(select.value==='Bitcoin'){
        currencyName.innerHTML="Bitcoin"
        currencyImg.src ="./img/Btc.png"
    }
    convertValues()
}

select.addEventListener("change",  changeCurrency)
