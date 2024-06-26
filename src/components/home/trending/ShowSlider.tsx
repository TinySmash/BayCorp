import Image from "next/image";

type sliderProps = {
  Movies: {}[];
  label: string;
};

function ShowSlider(props: sliderProps) {
  return (
    <div className="slide mb-5 lg:mb-8">
      <h1 className="self-start flex mb-1 lg:mb-3  text-lg md:text-xl xl:text-4xl font-semibold text-black text-opacity-75">
        {props.label}
      </h1>
      <div className="slide-track">
        {props.Movies.map((e, i) => {
          return (
            <div className="slide-item" key={i}>
              {/* @ts-ignore */}
              <img alt="Movie poster" src={e} className="slide-image"></img>
            </div>
          );
        })}
        {props.Movies.map((e, i) => {
          return (
            <div className="slide-item" key={i}>
              {/* @ts-ignore */}
              <img alt="Movie poster" src={e} className="slide-image"></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowSlider;
