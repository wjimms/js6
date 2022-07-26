// setTimeout(() => {
//     console.log('1');
//     setTimeout(()=> {
//         console.log('1');
//     })
// }, 2000)

// setTimeout(()=> {
//     console.log('подготовка...');
//     const product = {
//         name: 'phone',
//         price: '4000'
//     }

//     setTimeout(()=> {
//         product.status = 'ordered'
//         console.log(product);
//     }, 2000)
// }, 2000)

// const req = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         console.log('подготовка...');
//         const product = {
//             name: 'phone',
//             price: '4000'
//         }
//         resolve(product)
//     }, 2000)
// })

// const resolveData = (product) => {
//     setTimeout(()=> {
//         product.status = 'ordered';
//         console.log(product);
//     }, 2000)
// }

// req.then(resolveData)
const response = {
    method: 'POST'
}

fetch('https://jsonplaceholder.typicode.com/users',response  )
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });