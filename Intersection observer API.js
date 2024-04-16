// A more effeicient way of implementing dynamic class when intersection of two elements happen

//Basic skeleton of the API below
// const obsCallback = (enteries, observer) => {
//   //called when target element is intersecting the threshold or the viewport
//   enteries.forEach(entry => console.log(entry));
// };

// const obsOptions = {
//   root: null, //observe action performed on this element
//   threshold: 0.1, //obsCallback will be triggered when 10% of the section is visible to the viewport  // or percentage that we want to be visible in the viewport
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);



/*application of the above skeleton*/
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const headCallback = (enteries, observer) => {
  enteries.forEach(entry => {
    console.log(entry.isIntersecting);

    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
  });
};

const headOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, //so that it doesnt oerlap into new section
};

const headerObserver = new IntersectionObserver(headCallback, headOptions);
headerObserver.observe(header);
