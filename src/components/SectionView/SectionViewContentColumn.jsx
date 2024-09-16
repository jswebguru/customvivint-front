import TrendingCard from "../TrendingCard";
import "./style.css";

const SectionViewContentColumn = ({ size = "small" }) => {
  return (
    <div className="px-3 flex flex-col gap-[15px] relative">
      <TrendingCard />
      <TrendingCard />
      <TrendingCard />
      <div class="items-center flex flex-row gap-2 justify-center">
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-white"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-white"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-white"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-white"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
      </div>
    </div>
  );
};

export default SectionViewContentColumn;
