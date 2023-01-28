import { GalleryBtnProps } from "../../../utils/type";

export default function GalleryBtn({ moveSlide, direction }: GalleryBtnProps) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img
        src={
          direction === "next"
            ? "/Images/RightArrow.svg"
            : "/Images/LeftArrow.svg"
        }
        alt="left arrow"
      />
    </button>
  );
}
