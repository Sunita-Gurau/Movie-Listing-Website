let response= fetch("https://yts.mx/api/v2/list_movies.json")
.then((data) =>data.json())
.then(({data}) => {
    console.log(data);
    let data1="";
    data.movies.map((values) => {
        data1+=`<div>
        <div
          class="border-4 border-white hover:border-green-500 relative group"
        >
          <a href="review.html">
            <img src="${values.medium_cover_image}" alt="${values.title}" />
          </a>
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div
              class="text-center hidden group-hover:block hover:transition-all hover:duration-500 hover:delay-300 hover:ease-in-out"
            >
              <i class="fa-solid fa-star text-green-500 text-3xl pb-3"></i>
              <p class="text-white text-2xl font-bold">${values.rating}</p>
              <p class="text-white text-2xl font-bold pt-5">${values.genres[0]}</p>
              <p class="text-white text-2xl font-bold">${values.genres[1]}</p>
              <button
                class="bg-green-500 text-white text-sm px-2 py-2 mt-5 font-semibold rounded"
              >
                View Details
              </button>
            </div>
          </div>
        </div>

        <div class="pl-2">
          <a href="#" class="text-white text-lg font-bold">${values.title}</a>
          <p class="text-neutral-300 text-sm">${values.year}</p>
        </div>
      </div>`;
    });
   document.getElementById("Movie1").innerHTML=data1;
    
}).catch((error) =>{
    console.log("Unable to fetch data",error);
})
