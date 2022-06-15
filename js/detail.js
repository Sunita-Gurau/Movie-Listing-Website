const movieId = parseInt(localStorage.getItem("movieId"));


let response = fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`)
  .then((data) => data.json())
  .then(async ({ data }) => {
    let review = await fetch(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${movieId}`).then(data => data.json()).then(({ data }) => data.movies)
    console.log(review)
    return { data, suggestions: review }
  })
  .then(({ data, suggestions }) => {
    let data1 = `<section class="mx-48 my-8 flex">
        <div class="w-1/4 mr-5">
        <a href="${data.movie.url}">
          <img
            src="${data.movie.medium_cover_image}"
            alt="${data.movie.title}"
            class="w-full border-4 border-white mb-2"
          />
          </a>
          <button
            class="w-full bg-green-500 rounded py-2 mb-2 text-white text-xl font-bold"
          >
            <i class="fa-solid fa-download text-black"></i>
            Download
          </button>
          <button
            class="w-full bg-cyan-400 rounded py-2 text-white text-xl font-bold"
          >
            Watch Now
          </button>
        </div>
        <div class="w-2/4 px-12 ml-6">
          <h1 class="text-4xl text-white font-bold pb-5">
          ${data.movie.title}
          </h1>
          <p class="text-white text-sm font-bold">${data.movie.year}</p>
          <p class="text-white font-bold">${data.movie.genres}</p>
          <div class="flex items-center">
            <p class="text-white font-bold italic mr-2">Available in:</p>
            <p class="text-white text-xs border-[1px] border-white px-2 mr-2">
            ${data.movie.type}
            </p>
          </div>
          <p class="text-white text-sm my-2 font-semibold">
            WEB: same quality as BlueRay, but ripped earlier from a streaming
            service
          </p>
          <p class="text-white text-sm mb-4 font-semibold">
            BlueRay estimated Date:
            <span class="text-green-500 font-bold pl-2">${data.movie.date_uploaded}</span>
          </p>
          <button
            class="rounded py-2 px-4 text-white text-xs border-[1px] border-white font-bold my-4"
          >
            <i class="fa-solid fa-download text-green-500 pr-2"></i>
            Request Subtitles
          </button>
          <div class="flex items-center">
            <i class="fa-solid fa-heart text-green-500 text-2xl mr-8"></i>
            <p class="text-white text-xl font-bold px-2 mr-2">${data.movie.like_count}</p>
          </div>
          <div class="flex items-center">
            <i class="fa-solid fa-popcorn"></i>
            <i class="fa-solid fa-heart text-green-500 text-2xl mr-8"></i>
            <p class="text-white text-xl font-bold px-2 mr-2">86% Critics</p>
          </div>
          <div class="flex items-center">
            <i class="fa-solid fa-people-group text-green-500 text-2xl mr-8"></i>
            <p class="text-white text-xl font-bold px-2 mr-2">97% - Audience</p>
          </div>
          <div class="flex items-center">
            <i class="fa-solid fa-heart text-green-500 text-2xl mr-8"></i>
            <p class="text-white text-xl font-bold px-2 mr-2">
              ${data.movie.rating}<i class="fa-solid fa-star text-green-500 text-xl pb-3 ml-2"></i>
            </p>
          </div>
          <div class="flex items-center mt-8">
            <p class="text-white font-bold italic mr-2">Keyboards:</p>
            <p
              class="text-white font-bold text-xs border-[1px] border-white rounded px-4 py-2 mr-2"
            >
              period drama
            </p>
            <p
              class="text-white font-bold text-xs border-[1px] border-white rounded px-4 py-2 mr-2"
            >
              country house
            </p>
            <p
              class="text-white font-bold text-xs border-[1px] border-white rounded px-4 py-2 mr-2"
            >
              britian
            </p>
          </div>
        </div>
        <div class="w-1/4">
        <p class="pl-3 pb-3 text-xl text-white font-bold">Similar Movies</p>
        <div class="grid gap-x-2 gap-y-2 grid-cols-2">
          ${suggestions.map(suggestion => (
      ` <div onclick="openDetail(${suggestion.id})">
              <img
                class="border-4 border-white ml-3 w-40 h-40"
                src="${suggestion.medium_cover_image}"
                alt="${suggestion.title}"
              />    
            </div>`
    ))
      }
          </div>
          </div>
        </div>
      </section>
      <section class="mx-48 my-8 flex">
        <div class="w-2/3 mr-12">
          <p class="pb-3 text-xl text-white font-bold">Plot Summary</p>
          <p class="text-base text-[#919191] mb-12">
            ${data.movie.description_intro}
          </p>
          <p class="text-white text-sm my-2 italic font-semibold">
            Uploaded By: OTTO
          </p>
          <span class="text-white text-sm font-bold italic"
            >${data.movie.date_uploaded}</span
          >
        </div>
        <div class="w-1/3 pl-12">
          <div>
            <p class="pb-3 text-xl text-white font-bold">Director</p>
            <div class="flex items-center border-b border-white-500 pb-3">
              <img
                src="https://img.yts.mx/assets/images/actors/thumb/nm0001756.jpg"
                class="rounded-full mr-3"
                alt="director"
              />
              <p
                class="text-[#919191] hover:text-white hover:font-semibold text-sm"
              >
                Barry Sonnenfeld
              </p>
            </div>
          </div>
          <div>
            <p class="pb-3 text-xl text-white font-bold mt-8">Top Casts</p>
            <div class="flex items-center border-b border-white-500 pb-3">
              <img
                src="https://img.yts.mx/assets/images/actors/thumb/nm0001756.jpg"
                class="rounded-full mr-3"
                alt="director"
              />
              <p
                class="text-[#919191] hover:text-white hover:font-semibold text-sm"
              >
                Barry Sonnenfeld
              </p>
            </div>
            <div class="flex items-center border-b border-white-500 pb-3 mt-2">
              <img
                src="https://img.yts.mx/assets/images/actors/thumb/nm0001756.jpg"
                class="rounded-full mr-3"
                alt="director"
              />
              <p
                class="text-[#919191] hover:text-white hover:font-semibold text-sm"
              >
                Barry Sonnenfeld
              </p>
            </div>
            <div class="flex items-center border-b border-white-500 pb-3 mt-2">
              <img
                src="https://img.yts.mx/assets/images/actors/thumb/nm0001756.jpg"
                class="rounded-full mr-3"
                alt="director"
              />
              <p
                class="text-[#919191] hover:text-white hover:font-semibold text-sm"
              >
                Barry Sonnenfeld
              </p>
            </div>
            <div class="flex items-center border-b border-white-500 pb-3 mt-2">
              <img
                src="https://img.yts.mx/assets/images/actors/thumb/nm0001756.jpg"
                class="rounded-full mr-3"
                alt="director"
              />
              <p
                class="text-[#919191] hover:text-white hover:font-semibold text-sm"
              >
                Barry Sonnenfeld
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="mx-48 my-12 flex">
        <div class="w-1/2">
          <p class="pb-3 text-xl text-white font-bold">
            <i class="fa-solid fa-star text-green-500 text-xl pr-2"></i> 5
            comments
          </p>
          <div class="flex items-center justify-between p-2 mt-2 bg-black mr-8">
            <div class="flex items-center pb-3 mt-2">
              <img
                src="https://img.yts.mx/assets/images/users/thumb/61666861639828782.jpg"
                class="rounded-full mr-3"
                alt="director"
              />
              <div class="pr-12">
                <p
                  class="text-[#919191] hover:text-white hover:font-semibold text-sm"
                >
                  turq82 April 02, 2022 at 09:55 am
                </p>
                <p class="text-white font-semibold text-sm">Men to slap</p>
              </div>
            </div>
            <div class="flex items-center">
              <p class="text-white text-base font-bold">
                5 <i class="fa-solid fa-heart text-green-500 text-2xl"></i>
              </p>
            </div>
          </div>
        </div>
        <div class="w-1/2 ml-8">
          <p class="pb-3 text-xl text-white font-bold">
            <i class="fa-solid fa-star text-green-500 text-xl pr-2"></i> Movie Reviews
          </p>
          <p class="text-[#919191] text-sm my-2 font-semibold">
            Reviewed by
            <span class="text-white text-sm font-bold">The LightSongbird</span>
            <i class="fa-solid fa-star text-green-500 text-base pr-2"></i>
            <span class="text-white text-xs font-bold">9/10</span>
          </p>
  
          <p class="text-base text-[#919191] mb-2">
            Men in Black is great fun from start to finish. If you care to look
            past the rather ridiculous plot (only occasionally), this is hugely
            enjoyable. The cinematography is skillful likewise with the direction,
            and the special effects are wonderful. The script is irreverent, and
            there are some truly great performances. Will Smith proves here he CAN
            act, and Tommy Lee Jones as usual is marvellous. Both make a unique
            and hilarious double act. Then there is fine support from underrated
            actor Rip Torn and from Linda Fiorentino, who is a talented actress
            that hasn't earned herself a high acting profile yet. The finale is a
            little overblown, but you cannot deny this is a fun film.
          </p>
          <p class="text-base text-[#919191]">Read More</p>
        </div>
      </section>`;
    document.getElementById("detailPage").innerHTML = data1;

  }).catch((error) => {
    console.log("Unable to fetch data", error);
  })



function openDetail(id) {
  localStorage.setItem("movieId", id);
  window.location.href = "detail.html";
}


