import { useEffect, useState, useContext } from "react";
import ShowcaseCards from "./ShowcaseCards";
import { UserContext } from "../context/userContext";

const Showcase = () => {
  const [photos, setPhotos] = useState([]);
  const { showOverlay, setShowOverlay } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:3001/photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <div>
      {showOverlay && <div className="modal-background"></div>}
      <section className="overflow-scroll section bg-black">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl">
          <div className="cursor-pointer">
            <div className="grid grid-cols-1 gap-y-10 xl:grid-cols-3 xl:gap-x-2">
              {photos.map((photo, index) => {
                return (
                  <ShowcaseCards
                    key={index}
                    id={photo.id}
                    img={photo.url}
                    setShowOverlay={setShowOverlay}
                    showOverlay={showOverlay}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Showcase;
