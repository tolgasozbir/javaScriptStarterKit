console.log("Merhaba Kodlama io")

let UsdYesterday = 9.20
let UsdToday = 9.30

{
    let UsdYesterday=9.10
}

console.log(UsdYesterday)

const euroYesterday=11.2
//euroYesterday=11

console.log(euroYesterday)

//Array
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]
console.log(konutKredileri);

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

console.log(konutKredileri)

//  object

let student={id:1,name:"Tolga"};

console.log(student.name);
console.log(student);

// functions

function save(puan=10,ogrenci) {
    console.log(ogrenci.name+ " : " +puan);
}

save(undefined,student);

console.log("-------")

//Rest
//params c#
//varArgs java

let showProducts= function (id,...products) {
    console.log(id);
    console.log(products[0][1]);
}

showProducts(15,["Tolga","Levent","Bülent"],[1,2,3]);


//Spread

let values=[5,6,1,8,3,7,2];

console.log(...values)
console.log(Math.max(...values))
console.log(..."ABC","D",..."EFG","H")

//Destructuring

let populations=[10000,20000,30000,[40000,50000]]
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

let product ={id:1,name:"Saat"}
console.log(product.id)
console.log(product["name"])

let {id,name} = product
console.log(id);
console.log(name);