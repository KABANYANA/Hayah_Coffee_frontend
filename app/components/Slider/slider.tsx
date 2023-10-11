// import React, { useState } from "react";
// import { IoIosArrowBack, IoIosArrowForward, IoMdStar } from "react-icons/io";
// import { images } from "./slide-coffee";

// export const SlideShow = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const goToPreviousImage = () => {
//     const newImageIndex = (currentImageIndex - 1 + images.length) % images.length;
//     setCurrentImageIndex(newImageIndex);
//   };

//   const goToNextImage = () => {
//     const newImageIndex = (currentImageIndex + 1) % images.length;
//     setCurrentImageIndex(newImageIndex);
//   };

//   const handleWatchNow = () => {
//     console.log("Watch Now button clicked");
//   };

//   const handleAddToFavorites = () => {
//     console.log("Add to Favorites button clicked");
//   };

//   return (
//     <>
//       <div className="carousel font-[Nunito] ">
//       <div
//   className="carouselInner h-screen w-screen bg-cover bg-center"
//   style={{ backgroundImage: `url(${images[currentImageIndex].img})`,backgroundColor: 'rgba(1.0, 1.0, 1.0, 0.8)' }}
// >

        
//           <div className="left absolute top-1/2 transform -translate-y-1/2 left-4">
//             <IoIosArrowBack
//               className="left-icon text-white text-4xl"
//               onClick={goToPreviousImage}
//             />
//           </div>

//           <div className="center flex flex-col ml-20 justify-center text-white h-full">
//             <h1 className="center-h1 text-7xl font-bold text-yellow-100">
//               {images[currentImageIndex].title}
//             </h1>
//             <p className="center-description w-1/4  text-xl mt-8">
//               <span >{images[currentImageIndex].ratio}</span>
//             </p>
//             <p className="center-description w-1/3 text-3xl mt-8">
//               <span >{images[currentImageIndex].cup}</span>
//             </p>


//             <p className="center-description w-1/3 text-3xl mt-8">
//               <span >{images[currentImageIndex].description}</span>
//             </p>

//             <div className="center-buttons flex gap-4 mt-8">
//               <button
//                 className="watch bg-yellow-900 text-white text-lg py-5 px-8 rounded-md"
//                 onClick={handleWatchNow}
//               >
//                 BUY NOW
//               </button>
//               <button
//                 className="favorite bg-transparent text-white text-lg py-5 px-7 rounded-md border border-yellow-900"
//                 onClick={handleAddToFavorites}
//               >
//                 Add To Favorite
//               </button>
//             </div>
//           </div>

//           <div className="right absolute top-1/2 transform -translate-y-1/2 right-4">
//             <IoIosArrowForward
//               className="right-icon text-white text-4xl"
//               onClick={goToNextImage}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SlideShow;

import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoMdStar } from "react-icons/io";
import { images } from "./slide-coffee";

export const SlideShow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    const newImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newImageIndex);
  };

  const goToNextImage = () => {
    const newImageIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newImageIndex);
  };

  const handleWatchNow = () => {
    console.log("Watch Now button clicked");
  };

  const handleAddToFavorites = () => {
    console.log("Add to Favorites button clicked");
  };

  return (
    <>
      <div className="carousel font-[Nunito] ">
        <div
          className="carouselInner h-screen w-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentImageIndex].img})`,backgroundColor: 'rgba(1.0, 1.0, 1.0, 0.8)' }}
        >
          <div className="left absolute top-1/2 transform -translate-y-1/2 left-4">
            <IoIosArrowBack
              className="left-icon text-white text-4xl"
              onClick={goToPreviousImage}
            />
          </div>

          <div className="center flex flex-col ml-20 justify-center text-white h-full">
            <h1 className="center-h1 text-7xl font-bold text-yellow-100">
              {images[currentImageIndex].title}
            </h1>
            <p className="center-description w-1/4  text-xl mt-8">
              <span>{images[currentImageIndex].ratio}</span>
            </p>
            <p className="center-description w-1/3 text-3xl mt-8">
              <span>{images[currentImageIndex].cup}</span>
            </p>

            <p className="center-description w-1/3 text-3xl mt-8">
              <span>{images[currentImageIndex].description}</span>
            </p>

            <div className="center-buttons flex gap-4 mt-8">
              <button
                className="watch bg-yellow-900 text-white text-lg py-5 px-8 rounded-md"
                onClick={handleWatchNow}
              >
                BUY NOW
              </button>
              <button
                className="favorite bg-transparent text-white text-lg py-5 px-7 rounded-md border border-yellow-900"
                onClick={handleAddToFavorites}
              >
                Add To Favorite
              </button>
            </div>
          </div>

          <div className="right absolute top-1/2 transform -translate-y-1/2 right-4">
            <IoIosArrowForward
              className="right-icon text-white text-4xl"
              onClick={goToNextImage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideShow;
