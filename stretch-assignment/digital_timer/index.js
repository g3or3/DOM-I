let msTens = 0
let msHundreds = 0
let secOnes = 0
let secTens = 0

function timer() {
    document.querySelector('#msTens').textContent = msTens
    document.querySelector('#msHundreds').textContent = msHundreds
    document.querySelector('#secondOnes').textContent = secOnes
    document.querySelector('#secondTens').textContent = secTens
    
    if (secTens === 1) {
        clearInterval(interval)
        document.querySelector('.digits').classList.add('redDigit')
    }
    
    msTens = msTens += 1
    if (msTens === 10) {
        msTens = 0
        msHundreds = msHundreds += 1
    }
    if (msHundreds === 10) {
        msHundreds = 0
        secOnes = secOnes += 1
    }
    if (secOnes === 10) {
        secTens += 1
        secOnes = 0
    }
}

let interval =  setInterval(timer, 10)