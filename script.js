let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let even = [];   
let odd = [];     

for (let i = 0; i < data.length; i++) {
  if (data[i] % 2 === 0) {
    even.push(data[i]); 
  } else {
    odd.push(data[i]);  
  }
}

console.log("Чётные числа:", even);
console.log("Нечётные числа:", odd);