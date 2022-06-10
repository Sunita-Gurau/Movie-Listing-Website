let response= fetch("https://yts.mx/api/v2/list_movies.json")
.then((data) => {
    return data.json();
}).then((completeData) => {
    console.log(completeData);
    let data1="";
    completeData.map((values) => {
        data1+=`<div>
        <a href="#" class="relative z-1 ">
            <img src="images/movie1.jpg" class="border-4 border-white hover:border-green-500" alt="movie">
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div class="text-center">
                    <i class="fa-solid fa-star text-green-500 text-3xl pb-3 "></i>
                    <p class="text-white text-2xl font-bold">${values.genres}</p>
                    <p class="text-white text-2xl font-bold pt-5">Action</p>
                    <p class="text-white text-2xl font-bold">Comedy</p>
                    <button class="bg-green-500 text-white text-sm px-2 py-2 mt-5 font-semibold rounded">View Details</button>
                </div>
            </div>
        </a>
        <div class="pl-2">
            <a href="#" class="text-white text-lg font-bold">Partner</a>
            <p class="text-neutral-300 text-sm">2007</p>
        </div>
    </div>`;
    });
   document.getElementById("Movie1").innerHTML=data1;
    
}).catch((error) => {
    console.log("Unable to fetch data",error);
})