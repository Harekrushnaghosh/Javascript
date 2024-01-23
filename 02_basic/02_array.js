const myheros = ["a","b","c"]
const myheross = ["d","e","f"]
//myheros.push(myheross)
const allheros = myheros.concat(myheross);

//console.log(allheros);

//const all_new_heros = [...myheros, ...myheross]
//console.log(all_new_heros);



//console.log(Array[score1,score2, score3]);


const another_array = [1,2,3,[4,5,6], [7,8,[9,10]]]
const real_another_array  = another_array.flat(Infinity);

console.log(real_another_array);




console.log(Array.isArray("harekrushnaGhosh"));
console.log(Array.from("harekrushnaGhosh"));
console.log(Array.from({name:"harekrushnaGhosh"}));
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2,score3));