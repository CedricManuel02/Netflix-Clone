import HeroSection from "./components/HeroSection";
import LatestMovies from "./components/LatestMovies";
import LatestTv from "./components/LatestTv";
import UpcomingMovies from "./components/UpcomingMovies";

export default function Home() {
  return (
    <div className="w-full h-auto bg-[#000]">
      <HeroSection/>
      <LatestMovies/>
      <UpcomingMovies/>
      <LatestTv/>
    </div>
  );
}
