const convertButton = document.querySelector(".convert-buton")
const currencySelect = document.querySelector(".currency-select")

function converValues() {
    const inputCurrentcyValue = document.querySelector(".input-currency").value
    const currentValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConvert = document.querySelector(".currency-value")



    const dolarToday = 4.92
    const euroToday = 6.2
    const libraToday = 6.26
    const bitcoinToday = 205
    

    if (currencySelect.value == "dolar")   {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrentcyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrentcyValue / euroToday)
    }
    if(currencySelect.value == "libra"){
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-GB",{
        style:"currency",
        currency:"GBP"
        }).format(inputCurrentcyValue / libraToday);
        }
        
    if(currencySelect.value == "bitcoin"){
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE",{
        style:"currency",
        currency:"BTC"
        }).format(inputCurrentcyValue / bitcoinToday);
        }

    currentValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrentcyValue)

}
// function converValuesone() {
//     const inputCurrentcyValue = document.querySelector(".input-currency").value
//     const currentValueToConvert = document.querySelector(".currency-value-to-convert")
//     const currencyValueConvert = document.querySelector(".currency-value")



//     const dolarToday = 4.92
//     const euroToday = 6.2
//     const libraToday = 6.26
//     const bitcoinToday = 205
    

//     if (currencySelectone.value == "dolar")   {
//         // const result = inputCurrentcyValue * dolarToday
//         currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrentcyValue)
//         }
//     if (currencySelectone.value == "euro") {
//          currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrentcyValue)
//      }
//     // if(currencySelectone.value == "libra"){
//     //     currencyValueConvert.innerHTML = new Intl.NumberFormat("en-GB",{
//     //     style:"currency",
//     //     currency:"GBP"
//     //     }).format(inputCurrentcyValue / libraToday);
//     //     }
        
//     // if(currencySelectone.value == "bitcoin"){
//     //     currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE",{
//     //     style:"currency",
//     //     currency:"BTC"
//     //     }).format(inputCurrentcyValue / bitcoinToday);
//     //     }
//     currentValueToConvert.innerHTML = currencyValueConvert.value
//     console.log(inputCurrentcyValue)
    
// }
function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImg.src = "./assets/estados-unidos.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/Euro.png"

    }
    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }
    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }
    

}
function reset(){
    const currencyValueConvert = document.querySelector(".currency-value")
    const currentValueToConvert = document.querySelector(".currency-value-to-convert")
    currentValueToConvert.innerHTML = "0,00"
    currencyValueConvert.innerHTML = "0.00"
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", converValues)
currencySelect.addEventListener("change",reset)





