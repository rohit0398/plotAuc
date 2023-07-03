import { ButtonOutlined, InputField } from "@/atoms";

export default function SignIn() {
  return (
    <div>
      {/* {loading && <Loader />} */}
      <div
        className=" container mb-5 flex flex-col items-center justify-center px-5 my-28"
        style={{ height: "calc(100vh - 120px)" }}
      >
        <h1 className=" text-center text-[2.5rem] font-normal text-white">
          Welcome back
        </h1>

        <div className=" mt-12 w-full max-w-sm lg:w-96">
          <InputField
            // onChange={handleEmailChange}
            filedName="email"
            label="Email"
            type="email"
          />
          {/* <ErrorText
            err={
              errors?.login ? errors?.login : errors?.email ? errors?.email : ""
            }
          /> */}
        </div>
        <div className=" mt-12 w-full max-w-sm lg:w-96">
          <InputField
            // onChange={handlePasswordChange}
            filedName="password"
            label="Password"
            type="password"
          />
          {/* <ErrorText err={errors?.password} /> */}
        </div>

        <div className=" mt-12 flex w-full max-w-sm items-center justify-between lg:w-[30rem]">
          <ButtonOutlined
          // onClick={handleLogin}
          // disabled={!(email && password)}
          // title="Login"
          // size=" h-8"
          >
            {" "}
            Login
          </ButtonOutlined>
        </div>
      </div>
    </div>
  );
}
