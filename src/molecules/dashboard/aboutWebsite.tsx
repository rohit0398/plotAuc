import { ButtonOutlined } from '@/atoms';

export function AboutWebsite() {
  return (
    <div className=" mt-20">
      <div className="grid gap-16 md:grid-cols-2">
        <div className=" flex flex-col justify-center gap-2 border-l-2 border-white pl-8 text-white">
          <span className=" text-3xl font-normal">What is</span>
          <h1 className=" text-gradient text-6xl font-bold">
            Custom Interface
          </h1>
          <span className=" text-xl font-normal opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam
            sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed
            iaculis. Mauris, curabitur scelerisque sagittis posuere mollis. In
            dolor neque et vitae lectus vulputate pellentesque luctus.
          </span>
          <div>
            <ButtonOutlined>
              <span>Learn More...</span>
            </ButtonOutlined>
          </div>
        </div>
        <div className=" flex justify-center">
          <img
            className=" w-full max-w-xl"
            src="/assets/images/custom-interface.png"
            alt="custom"
          />
        </div>

        <div className=" order-last flex justify-center md:order-3">
          <img
            className=" w-full max-w-xl"
            src="/assets/images/monitor.png"
            alt="custom"
          />
        </div>

        <div className=" flex flex-col justify-center gap-2 border-l-2 border-white pl-8 text-white">
          <span className=" text-3xl font-normal">With leaderboards</span>
          <h1 className=" text-gradient text-6xl font-bold">Analyze Data</h1>
          <span className=" text-xl font-normal opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam
            sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed
            iaculis. Mauris, curabitur scelerisque sagittis posuere mollis. In
            dolor neque et vitae lectus vulputate pellentesque luctus.
          </span>
          <div>
            <ButtonOutlined>
              <span>Learn More...</span>
            </ButtonOutlined>
          </div>
        </div>
      </div>
    </div>
  );
}
