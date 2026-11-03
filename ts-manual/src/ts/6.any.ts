



/* any type */


let obj:any;


obj = 1;
obj = '1';
obj = {x:10};
obj = [1,2,3];
obj = ()=>{};
obj.toUpperCase();
obj.toFixed();
obj.includes();




/* unknown type */

let arr:unknown;

arr = 1;
// arr = 'hello'

// 타입 좁히기 narrowing

if(typeof arr === 'number'){
  arr.toFixed()
}

/* 

  any: 그냥 ㅇㅋ 너 믿을게 / 눈 감고 운전 책임은 너가 져 
  unknown: 증명해봐. 그때까진 못믿어. / 눈 뜨고 운전

  any는 타입 검사를 포기하는 타입이고, unknown은 타입을 아직 모르는 상태를 표현하는 타입.
  
*/




































