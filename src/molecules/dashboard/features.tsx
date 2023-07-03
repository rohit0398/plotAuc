import {
  AnalyticsIcon,
  CustomAiIcon,
  SeoLoveIcon,
  SettingIcon,
  WorldIcon,
} from '@/public/assets/svgIcons';

const data = [
  {
    title: 'AI Based winning bid price',
    icon: <WorldIcon />,
  },
  {
    title: 'Detailed Contents about plot',
    icon: <SeoLoveIcon />,
  },
  {
    title: 'Maintain site with Artificial Intelligence',
    icon: <SettingIcon />,
  },
  {
    title: 'Analyzing data with Leaderboards',
    icon: <AnalyticsIcon />,
  },
  {
    title: 'Show custom interface with Ai',
    icon: <CustomAiIcon />,
  },
];
export function Features() {
  return (
    <div className=" mt-20">
      <div className="text-center md:text-left">
        <h4>
          <span className="text-gradient text-6xl font-bold">
            Explore the features!
          </span>
        </h4>
        <span className="mx-auto mt-3 inline-block max-w-xl text-xl text-white opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          purus odio tempor rutrum...
        </span>
      </div>

      <div className="mt-10 grid flex-wrap items-center justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((val, ind) => (
          <div
            key={ind}
            className=" border-gradient group relative z-10 max-w-md cursor-pointer overflow-hidden rounded-3xl "
          >
            <div className="rounded-3xl bg-black">
              <div className="background-linear-gradient flex min-h-[20rem] flex-col justify-center rounded-3xl p-12 pr-0 2xl:min-h-[16rem] 2xl:p-8">
                <div className="">{val.icon}</div>
                <div className="mt-3 text-3xl font-bold text-white">
                  {val.title}
                </div>
              </div>
              <span className="absolute top-0 left-0 z-10 h-full w-0 rounded-3xl bg-gradient-to-r from-cyan via-blue to-pink opacity-20 transition-all duration-[2500ms] ease-in-out group-hover:w-full"></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
