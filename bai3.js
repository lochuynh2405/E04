let readline = require('readline-sync');
function xinchao(ten,namsinh){
    console.log(`Xin chào, mình tên là ${ten}.`)
    console.log(`Mình sinh năm ${namsinh}.`)
    console.log('Rất vui được gặp bạn.')
    let tuoi = 2022 - namsinh
    return tuoi
}
    
let t = xinchao('Loc',1996)
console.log(t);