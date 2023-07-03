export function WrittingPartner() {
  return (
    <div className=" mt-20">
      <div className="flex flex-col items-center gap-3 text-center text-white">
        <div className=" text-3xl font-normal">Let’s introduce with</div>
        <div className=" text-gradient pb-2 text-6xl font-bold">
          Your Biding Partner!
        </div>
        <div className=" max-w-xl text-xl font-normal opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          purus odio tempor rutrum...
        </div>
      </div>
      <div className="flex justify-center relative">
        <div className=" absolute inset-0 bg-black/60"></div>
        <img
          className=" mt-10 w-full max-w-7xl rounded-2xl"
          src="/assets/images/video-thumbnail.jpg"
          alt="thumb-nail"
        />
      </div>
    </div>
  );
}
