"use client";

import { useEffect, useState } from "react";
import { RiFireLine } from "react-icons/ri";
import ShowSlider from "./ShowSlider";

function Trending() {
  const [movies, setMovies] = useState<any>([]);
  const [sportsposters, setSportsPosters] = useState<string[]>([
    "f1.svg",
    "jonjones.svg",
    "nba-finals.svg",
    "tank-davis.svg",
    "tennis.svg",
    "ucl.svg",
    "ufc.svg",
    "world-cup.svg",
  ]);

  const discoverMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=88dc919924bb4e8619db89825c795267"
    )
      .then((res) => res.json())
      .then((data) =>
        setMovies(
          data?.results?.map((e: any) => {
            return e.poster_path;
          })
        )
      )
      // .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    discoverMovies();
  }, []);

  return (
    <section
      className="relative w-full h-auto bg-white container-page sec-container flex flex-col text-center gap-4 lg:mb-28"
      id="trending"
    >
      <h1 className="text-black font-bold text-2xl md:text-3xl xl:text-5xl flex items-center gap-1 self-center mb-6">
        <RiFireLine className="text-black text-2xl md:text-3xl xl:text-5xl" />
        Trending
      </h1>
      <ShowSlider
        label="Movies & Series"
        Movies={movies.slice(0, 8).map((e: any) => {
          return `https://image.tmdb.org/t/p/w500${e}`;
        })}
      />
      <ShowSlider
        label="Sports"
        reverse={true}
        Movies={sportsposters.map((e: any) => {
          return `/assets/images/sports-posters/${e}`;
        })}
      />
    </section>
  );
}

export default Trending;
