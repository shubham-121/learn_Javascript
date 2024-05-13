'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

//5 steps procedure of receving calls:
//  Readystate 0- request not intialized
//  Readystate 1- server connection established
//  Readystate 2- request received
//  Readystate 3- preocessing request
//  Readystate 4- request finished and response is ready

const renderCountry = function (data, className = '') {
  const language = Object.values(data.languages)[0]; //convert property values into an array
  const currency = Object.keys(data.currencies)[0];

  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${language}</p>
            <p class="country__row"><span>💰</span>${currency}</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;          //used again in final() block
  console.log(html);
};

// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send(); //request is send in background

//   request.addEventListener('load', function () {
//     //   console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     renderCountry(data);

//     //get neighbour country

//     // const [neighbour] = data.borders;
//     const neighbour = data.borders[3];
//     console.log(data.borders[3]);
//     if (!neighbour) return;

//     //AJAX country call 2

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

//2- USING FETCH CALL

// const request = fetch(`https://restcountries.com/v3.1/name/India`)
//   .then(response => response.json())
//   .then(data => console.log(data));

//to show msg on screen below func is used
const renderError = function (msg) {
  //to show msg on screen
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`); //throw error manually
      //this then() will return rejected peomise, which will be encountered directly by catch block
    }

    return response.json();
  });
};
const getCountryData = function (country) {
  //country 1

  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      // const neighbour = 'fdgfs';

      if (!neighbour) throw new Error('No neighbour found!');

      //country 2

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => {
      renderCountry(data[0], 'neighbour');
    })
    .catch(err => {
      console.error(`${err}🎆🎆`);
      renderError(`Something went wrong 🎆🎆 ${err.message}. Try again`); //to show msg on screen
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    }); //no matter whether the promise is rejected or not, this function will always execute
};

btn.addEventListener('click', function () {
  // getCountryData('australia');
  getCountryData('india');
  // getCountryData('dfgfd');
});
//

// //callback hell
// // setTimeout(() => {
// //   console.log('1 second passed');
// //   setTimeout(() => {
// //     console.log('2 second passed');
// //     setTimeout(() => {
// //       console.log('3 second passed');
// //       setTimeout(() => {
// //         console.log('4 second passed');
// //         setTimeout(() => {
// //           console.log('5 seconds passed ');
// //         }, 1000);
// //       }, 1000);
// //     }, 1000);
// //   }, 5000);
// // }, 1000);

//without DRY principle
// const getCountryData = function (country) {
//   //country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`The country name is not available ${response.status}`); //throw error manually
//         //this then() will return rejected peomise, which will be encountered directly by catch block
//       }

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       //country 2

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0], 'neighbour');
//     })
//     .catch(err => {
//       console.error(`${err}🎆🎆`);
//       renderError(`Something went wrong 🎆🎆 ${err.message}. Try again`); //to show msg on screen
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     }); //no matter whether the promise is rejected or not, this function will always execute
// };

// btn.addEventListener('click', function () {
//   getCountryData('india');
//   // getCountryData('dfgfd');
// });
// //
