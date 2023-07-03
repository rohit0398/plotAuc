import { ButtonOutlined } from '@/atoms';

export function IncreaseSales() {
  // md:bg-gradient-to-r bg-gradient-to-b from-black via-black to-[#00f0ff]

  return (
    <div className=" mt-20">
      <div className=" border-gradient mx-auto max-w-7xl rounded-3xl">
        <div
          className=" flex flex-col gap-3 rounded-3xl bg-black
         "
        >
          <div className=" background-linear-gradient rounded-3xl px-3  py-2 text-white md:px-32 md:py-24">
            <h1 className=" md:text-gradient bg-gradient-to-b from-cyan via-blue to-pink bg-clip-text text-7xl font-bold text-transparent">
              Increase your chance of winning a bid by analyzing AI data!
            </h1>
            <span className=" text-xl font-normal opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
              est ac nulla faucibus proin nisl augue. Vestibulum sem scelerisque
              suspendisse praesent pretium non. At mattis bibendum ut sed
              praesent. Nam at id elementum gravida.
            </span>
            <div>
              <ButtonOutlined>
                <span>Learn More...</span>
              </ButtonOutlined>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
