import { useEffect, useState } from "react";
import ShowcaseCards from "./ShowcaseCards";

const Showcase = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <section className="overflow-scroll section bg-black">
            <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl">
              <div className="">
                <div className="grid grid-cols-1 gap-y-10 xl:grid-cols-3 xl:gap-x-2">
                {photos.map((x) => {
                  return <ShowcaseCards key={x.id} img={x.url}/>;
                })}
              </div>
              </div>
              
            </div>  

    </section>

  );
};

export default Showcase;


//      { /*

//       <div class='group relative items-center justify-center overflow-hidden cursor-pointer'>
//         <div class='h-96 w-72'>
//            <img class='h-full w-full object-cover' src='shoniah.JPG' alt=''/>
//         </div>
//          <div class='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black'></div>
//         <div class='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-[40%] transition-all'>
//          <h1 class='text-3xl font-primary bg-gradient-to-r from-gray-600 to-red-600 bg-clip-text text-transparent animate-bounce'>Shoniah</h1>
//         </div>

//        </div>

//       <div class='group relative items-center justify-center overflow-hidden cursor-pointer'>
//         <div class='h-96 w-72'>
//            <img class='h-full w-full object-cover' src='sirrea.JPG' alt=''/>
//         </div>
//          <div class='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black'></div>
//         <div class='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-[40%] transition-all'>
//           <h1 class='text-3xl font-primary bg-gradient-to-r from-gray-600 to-red-600 bg-clip-text text-transparent animate-bounce'>Sirrea</h1>
//         </div>
//       </div>
//        <div class='group relative items-center justify-center overflow-hidden cursor-pointer'>
//          <div class='h-96 w-72'>
//           <img class='h-full w-full object-cover' src='karen.JPG' alt=''/>
//        </div>
//      <div class='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-[30%] transition-all'>
//           <h1 class='text-3xl font-primary bg-gradient-to-r from-gray-600 to-red-600 bg-clip-text text-transparent animate-bounce'>Karen</h1>
//         </div>
//       </div>

//        <div class='group relative items-center justify-center overflow-hidden cursor-pointer'>
//         <div class='h-96 w-72'>
//           <img class='h-full w-full object-cover' src='cassidy.JPG' alt=''/>
//          </div>
//          <div class='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black'></div>
//         <div class='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-[30%] transition-all'>
//           <h1 class='text-3xl font-primary bg-gradient-to-r from-gray-600 to-red-600 bg-clip-text text-transparent animate-bounce'>Cassidy</h1>
//         </div>
//        </div>

//        <div class='group relative items-center justify-center overflow-hidden cursor-pointer'>
//         <div class='h-96 w-72'>
//           <img class='h-full w-full object-cover' src='rachely.JPG' alt=''/>
//         </div>
//          <div class='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black'></div>
//         <div class='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-[30%] transition-all'>
//          <h1 class='text-3xl font-primary bg-gradient-to-r from-gray-600 to-red-600 bg-clip-text text-transparent animate-bounce'>Rachely</h1>
//        </div>

//                </div>

//      </div>
//      <div class='fixed bottom-16'>

//     </div>

//     </div>

// */}


