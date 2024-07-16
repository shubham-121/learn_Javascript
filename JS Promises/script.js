// 'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// // ///////////////////////////////////////
// const renderError = msg => {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   // countriesContainer.style.opacity = 1;
// };

// // const getCountryData = function (country) {
// //   const request = new XMLHttpRequest();
// //   request.open(
// //     'GET',
// //     `https://countries-api-836d.onrender.com/countries/name/${country}`
// //   );
// //   request.send();

// //   request.addEventListener('load', function () {
// //     console.log(this);

// //     const [data] = JSON.parse(this.responseText);

// //     console.log(data);

// //     const html = `<article class="country">
// //           <img class="country__img" src="${data.flag}  " />
// //           <div class="country__data">
// //             <h3 class="country__name">${data.name}</h3>
// //             <h4 class="country__region">${data.region}</h4>
// //             <p class="country__row"><span>👫</span>${(
// //               +data.population / 1000000
// //             ).toFixed(1)}</p>
// //             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
// //             <p class="country__row"><span>💰</span>${
// //               data.currencies[0].name
// //             }</p>
// //           </div>
// //         </article>`;

// //     countriesContainer.insertAdjacentHTML('beforeend', html);
// //     countriesContainer.style.opacity = 1;
// //   });
// // };

// // getCountryData('portugal');
// // getCountryData('germany');

// /////////////////////////////////////////////////////////////////////////////////////
// // const renderCountry = function (data, className = '') {
// //   const html = `<article class="country" ${className}>
// //           <img class="country__img" src="${data?.flag}  " />
// //           <div class="country__data">
// //             <h3 class="country__name">${data.name}</h3>
// //             <h4 class="country__region">${data.region}</h4>
// //             <p class="country__row"><span>👫</span>${(
// //               +data.population / 1000000
// //             ).toFixed(1)}</p>
// //             <p class="country__row"><span>🗣️</span>${
// //               data.languages[0]?.name
// //             }</p>
// //             <p class="country__row"><span>💰</span>${
// //               data.currencies[0]?.name
// //             }</p>
// //           </div>
// //         </article>`;

// //   countriesContainer.insertAdjacentHTML('beforeend', html);
// //   countriesContainer.style.opacity = 1;
// // };

// // const getCountryAndNeighbour = function (country) {
// //   const request = new XMLHttpRequest();
// //   request.open(
// //     'GET',
// //     `https://countries-api-836d.onrender.com/countries/name/${country}`
// //   );
// //   request.send();

// //   request.addEventListener('load', function () {
// //     console.log(this);

// //     const [data] = JSON.parse(this.responseText);

// //     console.log(data);
// //     //render country 1
// //     renderCountry(data);

// //     //get country 2
// //     const [neighbour] = data.borders;
// //     console.log(neighbour);

// //     if (!neighbour) return;

// //     //country 2 call
// //     const request2 = new XMLHttpRequest();
// //     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);

// //     request2.send();

// //     request2.addEventListener('load', function () {
// //       //   console.log(this.responseText);
// //       const [data2] = JSON.parse(this.responseText);
// //       console.log(data2);

// //       renderCountry(data2, 'neighbour');
// //     });
// //   });
// // };

// // getCountryAndNeighbour('usa');

// // const getCountryData = function (country) {
// //   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
// //     .then(function (response) {
// //       console.log(response);
// //       return response.json();
// //     })
// //     .then(function (data) {
// //       console.log(data);
// //       renderCountry(data[0]);
// //     });
// // };

// // getCountryData('portugal');
// // const renderCountry = function (data, className = '') {
// //   const html = `<article class="country ${className}">
// //           <img class="country__img" src="${data.flags.svg}" />
// //           <div class="country__data">
// //             <h3 class="country__name">${data.name}</h3>
// //             <h4 class="country__region">${data.region}</h4>
// //             <p class="country__row"><span>👫</span>${(
// //               +data.population / 1000000
// //             ).toFixed(1)} million</p>
// //             <p class="country__row"><span>🗣️</span>${
// //               data.languages
// //                 ? data.languages[Object.keys(data.languages)[0]]
// //                 : 'N/A'
// //             }</p>
// //             <p class="country__row"><span>💰</span>${
// //               data.currencies
// //                 ? data.currencies[Object.keys(data.currencies)[0]].name
// //                 : 'N/A'
// //             }</p>
// //           </div>
// //         </article>`;

// //   countriesContainer.insertAdjacentHTML('beforeend', html);
// //   // countriesContainer.style.opacity = 1;
// // };

// // const getCountryData = country => {
// //   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
// //     .then(response => {
// //       console.log(response);
// //     })
// //     .then(data => {
// //       console.log(data);
// //       renderCountry(data[0]);

// //       const neighbour = data[0].borders[0];
// //       if (!neighbour) return;

// //       // Fetch data for the neighboring country
// //       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
// //     })
// //     .then(response => {
// //       return response.json();
// //     })
// //     .then(data => {
// //       console.log(data);

// //       renderCountry(data[0], 'neighbour');
// //     })
// //     .catch(err => {
// //       console.error(`${err}🎆🎆🎆🎆`);
// //       renderError(`something went wrong ${err.message}Try again!!`);
// //     })
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     });
// // };

// // // Example usage with a valid country name

// // btn.addEventListener('click', () => {
// //   // getCountryData('germany');
// //   getCountryData('germany'); //fetch will still return a promise here
// // });

// const renderCountry = function (data, className = '') {
//   const html = `<article class="country ${className}">
//           <img class="country__img" src="${data.flags.svg}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)} million</p>
//             <p class="country__row"><span>🗣️</span>${
//               data.languages
//                 ? data.languages[Object.keys(data.languages)[0]]
//                 : 'N/A'
//             }</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies
//                 ? data.currencies[Object.keys(data.currencies)[0]].name
//                 : 'N/A'
//             }</p>
//           </div>
//         </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   // countriesContainer.style.opacity = 1;
// };

// const createAmI = function (lat, lng) {
//   const location = fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
//   )
//     .then(response => {
//       if (!response.countryName) {
//         throw new Error(
//           `Problem with geocoding!!!${response.status}-> ${response.countryName} Not found`
//         );
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(
//         `You are currently present in ${data.city}, ${data.countryName}`
//       );
//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/name/${data.countryName}`
//       );
//     })
//     .then(data => renderCountry(data))
//     .catch(err => console.log(`Something went wrong${err}`));

//   // console.log(location);
// };
// createAmI(52.508, 13.381);
// // createAmI(19.037, 72.873);
// // createAmI(-33.933, 18.474);

//

/************              Promissifying -> building promises   ***********************************  */
//Conversion of a callback function into a function returning a promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw happening');
//   const randomNumber = Math.random().toFixed(1);

//   setTimeout(function () {
//     if (randomNumber > 0.5) resolve('You win 💰💰');
//     else reject(new Error('You lose money 💩💩'));
//   }, 2000);

//   console.log(randomNumber);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err)); //consuming promise
// //Promisifying setTimeout

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     console.log(resolve);
//     setTimeout(resolve, seconds * 1000); //promise state changes from pending to fullfilled.
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 seconds passed');
//     return wait(2);
//   });

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

//Excersicse
// const imageContainer = document.querySelector('.images');
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imageContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImag;
// createImage('/image1.jpg')
//   .then(img => {
//     currentImag = img;
//     console.log('image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImag.style.display = 'none';
//     return createImage('/image1.jpg');
//   })
//   .then(img => {
//     currentImag = img;
//     console.log('image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImag.style.display = 'none';
//     return createImage('/image1.jpg');
//   })

//   .catch(err => console.log(err));

// const lotteryPromise = new Promise(function (resolve, reject) {
//   const randomNumber = Math.random().toFixed(1);
//   console.log(randomNumber);

//   console.log('Lottery Draw happening 🎆🎆');
//   setTimeout(function () {
//     if (randomNumber > 0.5) resolve('You win Money 💰💰');
//     else reject(new Error('You lose money 💩💩'));
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

//promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve, reject) {
//     console.log(resolve); //pending promise
//     setTimeout(resolve, seconds * 1000); //pending promise->fulfilled promise
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('1 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 seconds passed ');
//     return wait(1);
//   });

/***********************************ASYNC / AWAIT */

// const renderCountry = function (data, className = '') {
//   const html = `<article class="country" ${className}>
//           <img class="country__img" src="${data?.flag}  " />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${
//               data.languages[0]?.name
//             }</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0]?.name
//             }</p>
//           </div>
//         </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const whereAmI = async country => {
//   try {
//     //runs the code in the backgroudn
//     const res = await fetch(
//       `https://countries-api-836d.onrender.com/countries/name/${country}`
//     ); //will pause the execution of the code below it until a promise is returned

//     const countryData = await res.json();
//     // console.log(countryData[0].name);
//     renderCountry(countryData[0]);
//     return `You are in ${countryData[0].name}`;
//   } catch (err) {
//     console.log(`Something went wrong ${err}`);
//     //Reject promise returned from async function
//     //the catch statement below (line 417) wont execute as the preomise is returned no matter how so we throw an error here to execute the catch block
//     throw err;
//   }
// };

// console.log('1:Will get location');
// //
// const x = whereAmI('portugal')
//   .then(city => console.log(city))
//   .catch(err => console.log(err))
//   .finally(() => console.log('2: Finished getting location'));
//

// IFFEs
// (async function () {
//   try {
//     const x = whereAmI('portugal');
//     console.log(x);
//   } catch (err) {
//     console.log(err);
//   }
//   console.log('2: Finished getting location');
// })();

// const dataa = async function (c1, c2, c3) {
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
//   const responses = await Promise.all([
//     fetch(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
//     fetch(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
//     fetch(`https://countries-api-836d.onrender.com/countries/name/${c3}`),
//   ]);

//   const data = await Promise.all(responses.map(res => res.json));
//   console.log(data[0][0]?.capital, data[1][0]?.capital, data[2][0]?.capital);
// };

// dataa('portugal', 'austria', 'germany');

// // Promise.race()-> whicher promise if fulfilled first will be returned
// // only one result, no array o result

// (async function () {
//   const res = await Promise.race([
//     fetch(`https://countries-api-836d.onrender.com/countries/name/egypt`),
//     fetch(`https://countries-api-836d.onrender.com/countries/name/austria`),
//     fetch(`https://countries-api-836d.onrender.com/countries/name/germany`),
//   ]);

//   console.log(res);
// })();

// // Real life application -> reject fetch request if it takes too long to fetch data from api
// const timeout = function (sec) {
//   return new Promise((_, reject) => {
//     setTimeout(function () {
//       reject(new Error('Request took tooo long'));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   fetch(`https://countries-api-836d.onrender.com/countries/name/egypt`),
//   timeout(1), //both run side by side, whicherver returns promise first
// ])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// //Promise.all() -> returns all the result of the promises whether sucess or failed

// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('ANother success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// //Promise.any() ->returns first fulfilled promise and ignores rejected promises. Hence, the result will always be a fullfiled promise

// Promise.any([
//   Promise.reject('Error'),
//   Promise.resolve('Success'),
//   Promise.resolve('ANother success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

//Exercise 3
const wait = function (seconds) {
  return new Promise(function (resolve) {
    console.log(resolve);
    setTimeout(resolve, seconds * 1000); //promise state changes from pending to fullfilled.
  });
};
const imageContainer = document.querySelector('.images');
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imageContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImag;
createImage('/image1.jpg')
  .then(img => {
    currentImag = img;
    console.log('image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImag.style.display = 'none';
    return createImage('/image1.jpg');
  })
  .then(img => {
    currentImag = img;
    console.log('image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImag.style.display = 'none';
    return createImage('/image1.jpg');
  });
//

const loadNPause = async function () {
  try {
    //load image 1
    let img = await createImage('image1.jpg');
    console.log('image 1 loaded');
    await wait(2);
    currentImag.style.display = 'none';

    //load image 2
    img = await createImage('image1.jpg');
    console.log('image 1 loaded');
    await wait(2);
    currentImag.style.display = 'none';

    //load image 3
    img = await createImage('image1.jpg');
    console.log('image 1 loaded');
    await wait(2);
    currentImag.style.display = 'none';
  } catch (err) {
    console.log(err);
  }
};

// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img)); //async func always returns a promise

    console.log(imgs);
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);

    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.log(err);
  }
};

loadAll(['image1.jpg', 'image1.jpg', 'image1.jpg']);

//Remember -> async func always returns a promise.
// When used with map method, it return an array of promises,
//  which can be resolved using Promise.all() method on the array
