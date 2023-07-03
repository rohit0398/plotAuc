const review = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque,
duis tellus nec aliquam volutpat. Dui dictum tortor dapibus
integer convallis ut facilisi leo semper. Tristique nisl risus
tristique nunc quis id elit. Suspendisse felis, tellus in
sollicitudin.`;
const data = [
  {
    name: 'Saul Ramirez',
    designation: 'CEO, Mirrorly',
    review,
  },
  {
    name: 'Isiah Walls',
    designation: 'Marketing Lead, Zamora',
    review,
  },
  {
    name: 'Forest Barrera',
    designation: 'Managing Director, Teri',
    review,
  },
  {
    name: 'Ruby Schwartz',
    designation: 'Marketing Intern, Thornton',
    review,
  },
  {
    name: 'Isaias Martinez',
    designation: 'Head of Marketing, Moore',
    review,
  },
  {
    name: 'Deidre Braun',
    designation: 'CEO, Wilbert',
    review,
  },
];
export function Reviews() {
  return (
    <div className=" mt-20">
      <div className=" text-gradient mx-auto mb-6 max-w-xl text-center text-6xl font-bold">
        {' '}
        Our Customer’s Reviews
      </div>

      <div className="grid justify-center gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.map((val, ind) => (
          <div key={ind} className="border-gradient max-w-md rounded-3xl">
            <div className="rounded-3xl bg-black">
              <div className=" background-linear-gradient flex flex-col gap-3 rounded-3xl p-6 text-white">
                <span className=" font-normal opacity-70">{val.review}</span>
                <div className=" flex items-center gap-3">
                  <div>
                    {' '}
                    <img
                      className=" overflow-hidden rounded-full"
                      src="https://source.unsplash.com/random/46x46?person"
                      alt="user"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className=" text-gradient text-xl font-bold">
                      {val.name}
                    </span>
                    <span className=" text-xs opacity-70">
                      {val.designation}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
