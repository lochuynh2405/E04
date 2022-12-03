let readline = require('readline-sync');
function xinchao(ten,namsinh){
    console.log(`Xin chào, mình tên là ${ten}.`)
    console.log(`Mình sinh năm ${namsinh}.`)
    console.log('Rất vui được gặp bạn.')
    let tuoi = 2022 - namsinh
    return tuoi
}

function cnxinchao(){
    let ten = readline.question('nhap ten: ')
    let namsinh = Number(readline.question('nhap nam sinh: '))
    xinchao(ten, namsinh)
}
  cnxinchao();