import { ButtonOutlined } from '@/atoms';

export function ContactUs() {
  return (
    <div className=" mt-20">
      <div className=" text-center text-white">
        <span className=" text-gradient inline-block text-6xl font-bold">
          {' '}
          Contact us
        </span>
        <p className=" mx-auto max-w-xl text-xl font-normal opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          purus odio tempor rutrum...
        </p>
      </div>

      <div className=" mx-auto max-w-6xl bg-black">
        <form action="#" method="POST">
          <div className="overflow-hidden text-white shadow sm:rounded-md">
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-bold opacity-70"
                  >
                    Your name
                  </label>
                  <div className="border-gradient mt-1 rounded-3xl">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block  h-[4.3rem] w-full rounded-3xl bg-black focus:ring-0"
                    />
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-bold opacity-70"
                  >
                    Email address
                  </label>
                  <div className="border-gradient mt-1 rounded-3xl">
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      className="block  h-[4.3rem] w-full rounded-3xl bg-black focus:ring-0"
                    />
                  </div>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="about"
                    className="block text-sm font-bold opacity-70"
                  >
                    Your message
                  </label>
                  <div className="border-gradient mt-1 rounded-3xl">
                    <textarea
                      id="about"
                      name="about"
                      rows={4}
                      className="block w-full rounded-3xl bg-black focus:ring-0"
                      placeholder="type message"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 text-center">
              <ButtonOutlined>Submit</ButtonOutlined>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
