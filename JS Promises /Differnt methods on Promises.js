//1- Promise.all()

const dataa = async function (c1, c2, c3) {
  //using 3 fetch request one by  one which are not dependetnt
  // const response1 = await fetch(
  //   `https://countries-api-836d.onrender.com/countries/name/${c1}`
  // );
  // const response2 = await fetch(
  //   `https://countries-api-836d.onrender.com/countries/name/${c2}`
  // );
  // const response3 = await fetch(
  //   `https://countries-api-836d.onrender.com/countries/name/${c3}`
  // );

  // const data1 = await response1.json();
  // const data2 = await response2.json();
  // const data3 = await response3.json();

  // console.log(data1[0]?.capital, data2[0]?.capital, data3[0]?.capital);

  // always run Promises in parallel using Promise.all() for fast speed only if all fetch are not dependent on each other
  //Running all 3 promises request in parallel
  const responses = await Promise.all([
    fetch(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
    fetch(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
    fetch(`https://countries-api-836d.onrender.com/countries/name/${c3}`),
  ]);

  const data = await Promise.all(responses.map(res => res.json));
  console.log(data[0][0]?.capital, data[1][0]?.capital, data[2][0]?.capital);
};

dataa('portugal', 'austria', 'germany');


 //2- Promise.race()-> whicher promise if fulfilled first will be returned
// only one result, no array o result

(async function () {
  const res = await Promise.race([
    fetch(`https://countries-api-836d.onrender.com/countries/name/egypt`),
    fetch(`https://countries-api-836d.onrender.com/countries/name/austria`),
    fetch(`https://countries-api-836d.onrender.com/countries/name/germany`),
  ]);

  console.log(res);
})();

// Real life application -> reject fetch request if it takes too long to fetch data from api
const timeout = function (sec) {
  return new Promise((_, reject) => {
    setTimeout(function () {
      reject(new Error('Request took tooo long'));
    }, sec * 1000);
  });
};

Promise.race([
  fetch(`https://countries-api-836d.onrender.com/countries/name/egypt`),
  timeout(1), //both run side by side, whicherver returns promise first
])
  .then(res => console.log(res))
  .catch(err => console.log(err));


//3-Promise.allSettled() -> returns all the result of the promises where sucess or failed

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('ANother success'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));

//4-Promise.any() ->returns first fulfilled promise and ignores rejected promises. Hence, the result will always be a fullfiled promise

Promise.any([
  Promise.reject('Error'),
  Promise.resolve('Success'),
  Promise.resolve('ANother success'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));

//Remember -> async func always returns a promise.
// When used with map method, it return an array of promises,
//  which can be resolved using Promise.all() method on the array

//Example below 

// const loadAll = async function (imgArr) {
//   try {
//     const imgs = imgArr.map(async img => await createImage(img)); //async func always returns a promise

//     console.log(imgs);
//     const imgsEl = await Promise.all(imgs);
//     console.log(imgsEl);

//     imgsEl.forEach(img => img.classList.add('parallel'));
//   } catch (err) {
//     console.log(err);
//   }
// };

// loadAll(['image1.jpg', 'image1.jpg', 'image1.jpg']);



