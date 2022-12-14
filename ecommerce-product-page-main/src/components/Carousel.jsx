import { useStore } from "@nanostores/react";
import { index, showLightbox, productImages } from "../stores/carouselStore";
import ThumbnailList from "./ThumbnailList";
import ChangeProductButton from "./ChangeProductButton";

function Carousel() {
  const $index = useStore(index);
  const $showLightbox = useStore(showLightbox);
  const $productImages = useStore(productImages);

  return (
    <>
      <div className="sm:px-6">
        <div className="max-h-[300px] sm:max-h-[450px] sm:max-w-[450px] sm:rounded-2xl grid place-content-center overflow-hidden">
          <button
            className="hidden sm:inline-block col-start-1 row-start-1"
            onClick={() => showLightbox.set(true)}
          >
            <img
              className="transition-all ease-in-out duration-1000"
              src={$productImages[$index].src}
              alt={$productImages[$index].alt}
            />
          </button>
          <div className="grid sm:hidden">
            <img
              className="sm:hidden col-start-1 row-start-1 transition-all ease-in-out duration-1000"
              src={$productImages[$index].src}
              alt={$productImages[$index].alt}
            />
            <ChangeProductButton increment={false} />
            <ChangeProductButton class="ml-auto" next={true} increment={true} />
          </div>
        </div>
        <ThumbnailList />
      </div>
    </>
  );
}

export default Carousel;
