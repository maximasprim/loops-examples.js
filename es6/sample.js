// const add = (a,b)=>{
//     return a+b
// }

// const calculation=(add)=>{
//     console.log(add())
// }
// calculation(()=> add(2,3))




const person = {
    name:'Michael',
    school:'kirinyaga',
    home:{
        city:'nairobi',
        country:'kenya'
    }
}
const {name,school,home:{city,country}}=person;

console.log(person.name)
console.log(school)
console.log(city)
console.log(country)