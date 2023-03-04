import React from "react";

function Login() {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-50 flex rounded-2xl shadow-lg px-3">
        <div className="w-1/2 ">
          <h2 className="font-bold text 2xl px-2">Login</h2>
          <form action="" class="flex flex-col gap-4">
            <input
              class="p-2 mt-8 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
            />
            <div class="relative">
              <input
                class="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </div>
            <button class="bg-slate-600 rounded-xl text-white py-2 hover:scale-105 duration-300">
              Login
            </button>
          </form>
          <p className=" text-right text-red-500 ">Forget Password</p>
          <div className="mt-4 grid grid-cols items-center text-gray-500">
            <hr className="border-grey-400" />
          </div>
          <div className="flex mt-3">
            <p className="">Don't have an account </p>
            <p className="px-2 text-red-400">Create one</p>
          </div>
        </div>

        <div className="w-1/2 p-5">
          <img
            className="rounded-2xl"
            src="https://assets.website-files.com/626f5d0ae6c15cea8c2dd5dd/6309fc4305a883fc64b964cc_DrawKit0041_E-commerce_and_Online_Shopping_Banner.png"
            alt="React Image"
          />
        </div>
      </div>
    </section>
  );
}

export default Login;
