import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import VideoContainer from "./components/videoContainer/VideoContainer";
import Recommendation from "./components/recommendation/Recommendation";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-hidden bg-gray-900">
      <Navbar />

      {/* Main Video container */}
      <div className="w-full h-[70%] max-h-[480px] grid grid-cols-3 gap-2 py-2 px-3 md:px-10">
        {/* video container */}
        <div className="col-span-6 md:col-span-2 w-full h-[100%] flex items-center justify-center rounded-lg overflow-hidden">
          <VideoContainer />
        </div>

        <div className="col-span-6 md:col-span-1 w-full h-full rounded-lg overflow-y-auto bg-gray-800">
          <h2 className="text-white text-2xl p-4 font-bold w-full">Recommendation</h2>
          <Recommendation />
          <Recommendation />
          <Recommendation />
          <Recommendation />
          <Recommendation />
          <Recommendation />
          <Recommendation />
          <Recommendation />
          <Recommendation />
          <Recommendation />
          <Recommendation />
          <Recommendation />
          <Recommendation />
        </div>
      </div>
      <div className="px-3 md:px-10 h-[30%]">
        <Footer />
      </div>
    </main>
  );
}
