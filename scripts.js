const convertBtn = document.querySelector('.convert-btn')

const convertValue = async () => {
    const inputCurrencyValue = document.querySelector('.input').value
    const currencyValueConvert = document.querySelector('.currency-value-convert')
    const currencyValueResult = document.querySelector('.currency-value-result')

    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,CNY-BRL,BTC-BRL,BRL-USD,EUR-USD,GBP-USD,CNY-USD,BTC-USD,BRL-EUR,USD-EUR,GBP-EUR,CNY-EUR,BTC-EUR,BRL-CNY,USD-CNY,EUR-CNY,BRL-GBP,USD-GBP,EUR-GBP').then( response => response.json())

    const todayDolarToReal = data.USDBRL.high
    const todayEuroToReal = data.EURBRL.high
    const todayLibraToReal = data.GBPBRL.high
    const todayYuanToReal = data.CNYBRL.high
    const todayBitcoinToReal = data.BTCBRL.high

    const todayRealToDolar = data.BRLUSD.high
    const todayEuroToDolar = data.EURUSD.high
    const todayLibraToDolar = data.GBPUSD.high
    const todayYuanToDolar = data.CNYUSD.high
    const todayBitcoinToDolar = data.BTCUSD.high

    const todayDolarToEuro = data.USDEUR.high
    const todayRealToEuro = data.BRLEUR.high
    const todayLibraToEuro = data.GBPEUR.high
    const todayYuanToEuro = data.CNYEUR.high
    const todayBitcoinToEuro = data.BTCEUR.high

    const todayDolarToLibra = data.USDGBP.high
    const todayEuroToLibra = data.EURGBP.high
    const todayRealToLibra = data.BRLGBP.high
    const todayYuanToLibra = 0.109
    const todayBitcoinToLibra = 53567.90

    const todayDolarToYuan = data.USDCNY.high
    const todayEuroToYuan = data.EURCNY.high
    const todayRealToYuan = data.BRLCNY.high
    const todayLibraToYuan = 9.139
    const todayBitcoinToYuan = 487887.16

    if (fromSelect.value == 'real') {
        currencyValueConvert.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrencyValue)

        if (toSelect.value == 'dolar') {
            currencyValueResult.innerHTML = 'US' + new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputCurrencyValue / todayDolarToReal)
        } else if (toSelect.value == 'euro') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(inputCurrencyValue / todayEuroToReal)
        } else if (toSelect.value == 'libra') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('en-GP', { style: 'currency', currency: 'GBP' }).format(inputCurrencyValue / todayLibraToReal)
        } else if (toSelect.value == 'bitcoin') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(inputCurrencyValue / todayBitcoinToReal);
        } else if (toSelect.value == 'yuan') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY' }).format(inputCurrencyValue / todayYuanToReal)
        } else if (toSelect.value == 'real') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrencyValue)
        }
    } else if (fromSelect.value == 'dolar') {
        currencyValueConvert.innerHTML = 'US' + new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputCurrencyValue)

        if (toSelect.value == 'dolar') {
            currencyValueResult.innerHTML = 'US' + new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputCurrencyValue)
        } else if (toSelect.value == 'real') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrencyValue / todayRealToDolar)
        } else if (toSelect.value == 'euro') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(inputCurrencyValue / todayEuroToDolar)
        } else if (toSelect.value == 'libra') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('en-GP', { style: 'currency', currency: 'GBP' }).format(inputCurrencyValue / todayLibraToDolar)
        } else if (toSelect.value == 'bitcoin') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(inputCurrencyValue / todayBitcoinToDolar);
        } else if (toSelect.value == 'yuan') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY' }).format(inputCurrencyValue / todayYuanToDolar)
        }
    } else if (fromSelect.value == 'euro') {
        currencyValueResult.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(inputCurrencyValue)

        if (toSelect.value == 'euro') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(inputCurrencyValue)
        } else if (toSelect.value == 'real') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrencyValue / todayRealToEuro)
        } else if (toSelect.value == 'dolar') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputCurrencyValue / todayDolarToEuro)
        } else if (toSelect.value == 'libra') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('en-GP', { style: 'currency', currency: 'GBP' }).format(inputCurrencyValue / todayLibraToEuro)
        } else if (toSelect.value == 'bitcoin') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(inputCurrencyValue / todayBitcoinToEuro);
        } else if (toSelect.value == 'yuan') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY' }).format(inputCurrencyValue / todayYuanToEuro)
        }
    } else if (fromSelect.value == 'libra') {
        currencyValueConvert.innerHTML = new Intl.NumberFormat('en-GP', { style: 'currency', currency: 'GBP' }).format(inputCurrencyValue)

        if (toSelect.value == 'libra') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('en-GP', { style: 'currency', currency: 'GBP' }).format(inputCurrencyValue)
        } else if (toSelect.value == 'real') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrencyValue / todayRealToLibra)
        } else if (toSelect.value == 'euro') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(inputCurrencyValue / todayEuroToLibra)
        } else if (toSelect.value == 'dolar') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputCurrencyValue / todayDolarToLibra)
        } else if (toSelect.value == 'yuan') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY' }).format(inputCurrencyValue / todayYuanToLibra)
        } else if (toSelect.value == 'bitcoin') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(inputCurrencyValue / todayBitcoinToLibra);
        }
    } else if (fromSelect.value == 'yuan') {
        currencyValueConvert.innerHTML = new Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY' }).format(inputCurrencyValue)

        if (toSelect.value == 'yuan') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY' }).format(inputCurrencyValue)
        } else if (toSelect.value == 'real') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrencyValue / todayRealToYuan)
        } else if (toSelect.value == 'euro') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(inputCurrencyValue / todayEuroToYuan)
        } else if (toSelect.value == 'dolar') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputCurrencyValue / todayDolarToYuan)
        } else if (toSelect.value == 'libra') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('en-GP', { style: 'currency', currency: 'GBP' }).format(inputCurrencyValue / todayLibraToYuan)
        } else if (toSelect.value == 'bitcoin') {
            currencyValueResult.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(inputCurrencyValue / todayBitcoinToYuan);
        }
    }
}

convertBtn.addEventListener('click', convertValue)

const fromSelect = document.querySelector('.current-selection-currency-convert')
const toSelect = document.querySelector('.current-result-currency-selection')


fromSelect.addEventListener('change', function () {
    const currencyImgConvert = document.querySelector('.currency-img-convert')
    const currencyNameConvert = document.querySelector('.currency-name-convert')

    if (fromSelect.value == 'dolar') {
        currencyImgConvert.src = './img/eua.svg'
        currencyNameConvert.innerHTML = 'Dólar Americano'
    } else if (fromSelect.value == 'real') {
        currencyImgConvert.src = './img/brasil 2.png'
        currencyNameConvert.innerHTML = 'Real Brasileiro'
    } else if (fromSelect.value == 'euro') {
        currencyImgConvert.src = './img/UE.svg'
        currencyNameConvert.innerHTML = 'Euro'
    } else if (fromSelect.value == 'libra') {
        currencyImgConvert.src = './img/GP.webp'
        currencyNameConvert.innerHTML = 'Libra Esterlina'
    } if (fromSelect.value == 'yuan') {
        currencyImgConvert.src = './img/china-flag.png'
        currencyNameConvert.innerHTML = 'Yuan'
    } else if (fromSelect.value == 'bitcoin') {
        currencyImgConvert.src = './img/Btc.png'
        currencyNameConvert.innerHTML = 'Bitcoin'
    }
    convertValue()
})

toSelect.addEventListener('change', function () {
    const currencyImgResult = document.querySelector('.currency-img-result')
    const currencyNameResult = document.querySelector('.currency-name-result')

    if (toSelect.value == 'dolar') {
        currencyImgResult.src = './img/eua.svg'
        currencyNameResult.innerHTML = 'Dólar Americano'
    } else if (toSelect.value == 'real') {
        currencyImgResult.src = './img/brasil 2.png'
        currencyNameResult.innerHTML = 'Real Brasileiro'
    } else if (toSelect.value == 'euro') {
        currencyImgResult.src = './img/UE.svg'
        currencyNameResult.innerHTML = 'Euro'
    } else if (toSelect.value == 'libra') {
        currencyImgResult.src = './img/GP.webp'
        currencyNameResult.innerHTML = 'Libra Esterlina'
    } else if (toSelect.value == 'yuan') {
        currencyImgResult.src = './img/china-flag.png'
        currencyNameResult.innerHTML = 'Yuan'
    } else if (toSelect.value == 'bitcoin') {
        currencyImgResult.src = './img/Btc.png'
        currencyNameResult.innerHTML = 'Bitcoin'
    }
    convertValue()
})