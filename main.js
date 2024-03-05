let jumlahAngka = document.getElementById('jumlahAngka')
let hasil = document.getElementById('hasil')
let ucapan = document.getElementById('ucapan')

var array1 = [""]
var array2 = [""]
var array3 = [""]
var array4 = [""]

// generate passs
let generate = (len) => {
    const fusion1 = (array1.join("")+array2.join(""))
    const fusion2 = (array3.join("")+array4.join(""))
    console.log(fusion1+fusion2)

    const angka = fusion1 + fusion2
    let buat = ''
    console.log(angka)
    for (let i = 0; i < len; i++) {
        buat += angka[~~(Math.random() * angka.length)]
    }
    return buat
}

const buatAngka = () => {
    const get = generate(jumlahAngka.value)
    hasil.value = get
    ucapan.innerText = "✨🎉Dibuat oleh : Faizal🎉✨"
}
// generate pass end
// copy button
function copy() {
    navigator.clipboard.writeText(hasil.value)
    alert('copied to clipboard')
}
// copy button end
// delete pass
function eraseOut() {
    hasil.value = ''
}
// delete pass end
// checkbox 
let j = 0
function pushAlphabet() {
    let alphabet = "qwertyuiopasdfghjklzxcvbnm"
    j += 1
    if (j % 2 == 0) {
        array1.pop()
    }
    if (j % 2 == 1) {
        array1.push(alphabet)
    }
}

let k = 0
function pushAlphabetUp() {
    let alphabet = "QWERTYUIOPASDFGHJKLZXCVBNM"
    k += 1
    if (k % 2 == 0) {
        array2.pop()
    }
    if (k % 2 == 1) {
        array2.push(alphabet)
    }
}

let i = 0;
function pushSymbol() {
    i += 1
    let symbol = "`~!@#$%^&*()_+=-[]{}:;'/?.>,<"

    if (i % 2 == 0) {
        array3.pop()
    }
    if (i % 2 == 1) {
        array3.push(symbol)
    }

}
let a = 0;
function pushNumber() {
    a += 1
    let number = "1234567890"

    if (a % 2 == 0) {
        array4.pop()
    }
    if (a % 2 == 1) {
        array4.push(number)
    }

}
// checkbox end