//1./////////////////////////////////////
// const user = {
//     id: 101,
//     name: "user",
//     age: 28,
//     job: "Frontend Developer",
//     skills: {
//         programming: ["JavaScript", "TypeScript", "React"],
//         softSkills: ["communication", "teamwork"],
//     },
//     contacts: {
//         email: "user@example.com",
//         phone: "+996555123456",
//     },
// };
//
// if (!user?.address) {
//     console.log("Адрес не указан");
// }
//
//
// const{name,age,job}=user;
// const{skills:{programming}}=user;
// console.log(name,age,job,programming[0]);
//
// const experience=function (...skills){
//     console.log(...skills);
// };
// experience(["JavaScript", "TypeScript", "React"]);
//
///2./////////////////////////////////////

// const users = [
//     { name: "Анна", age: 29, address: { city: "Bishkek" } },
//     { name: "Сергей", age: 23 },
//     { name: "Никита", age: 35, address: { city: "Madrid" } },
// ];
//
// const updateUsers=users.map((el) => {
//     return {
//         ...el,
//         address: {
//             city: el.address?.city ?? "НЕ известно",
//         },
//     };
// });
//
// console.log(updateUsers);

///////3.///////////////////////////////
function calculateSum(multiplier, ...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum * multiplier;
}
console.log(calculateSum(5, 1, 2, 5));
