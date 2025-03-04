// import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export const ALLC1 = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Ikuti Latihan Course Dari Berbagai Sumber
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-10 mt-12">
          <div className="col-span-3 ">
            <div className="bg-white rounded-lg shadow-lg p-5 h-96">
              <p className="text-2xl font-bold">Kategori</p>
              <Menu
                as="div"
                className="Pemgrograman relative inline-block text-left mb-3"
              >
                <div>
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                    Pemrograman Web
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 size-5 text-gray-400"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="mt-2 w-full origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 
                            transition focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 
                            data-[enter]:duration-[600ms] data-[enter]:ease-out 
                            data-[leave]:duration-[400ms] data-[leave]:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                      >
                        HTML
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>

              <Menu
                as="div"
                className="Software relative inline-block text-left mb-3"
              >
                <div>
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                    Software Development
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 size-5 text-gray-400"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="mt-2 w-full origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 
                            transition focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 
                            data-[enter]:duration-[600ms] data-[enter]:ease-out 
                            data-[leave]:duration-[400ms] data-[leave]:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                      >
                        Git & Github
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>

              <Menu
                as="div"
                className="framework relative inline-block text-left"
              >
                <div>
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                    Framewok
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 size-5 text-gray-400"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="mt-2 w-full origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 
                            transition focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 
                            data-[enter]:duration-[600ms] data-[enter]:ease-out 
                            data-[leave]:duration-[400ms] data-[leave]:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                      >
                        Laravel
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                      >
                        React Js
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </div>
          </div>

          <div className="col-span-9">
            <div className="grid max-w-md grid-cols-1 mx-auto lg:max-w-full  lg:grid-cols-3 gap-x-16 gap-y-12">
              <div className="bg-gray-50 rounded shadow p-3">
                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg"
                    alt=""
                  />
                </a>
                <div className="flex justify-between items-center">
                  <span className="inline-flex px-4 py-2 mt-3 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9">
                    {" "}
                    Technology{" "}
                  </span>
                </div>
                <p className="mt-6 text-xl font-semibold">
                  <a href="#" title="" className="text-black">
                    {" "}
                    How to mange your remote team?{" "}
                  </a>
                </p>
                <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase mt-5">
                  {" "}
                  Gratis{" "}
                </span>
              </div>

              <div className="bg-white rounded shadow p-3">
                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-2.jpg"
                    alt=""
                  />
                </a>
                <div className="flex justify-between items-center">
                  <span className="inline-flex px-4 py-2 mt-3 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9">
                    {" "}
                    Technology{" "}
                  </span>
                </div>
                <p className="mt-6 text-xl font-semibold">
                  <a href="#" title="" className="text-black">
                    {" "}
                    emails you want to use on next campaign.{" "}
                  </a>
                </p>
                <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase mt-3">
                  {" "}
                  Gratis{" "}
                </span>
              </div>

              <div className="bg-white rounded shadow p-3">
                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                  <img
                    className="object-cover w-full h-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-3.jpg"
                    alt=""
                  />
                </a>
                <div className="flex justify-between items-center">
                  <span className="inline-flex px-4 py-2 mt-3 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9">
                    {" "}
                    Technology{" "}
                  </span>
                </div>
                <p className="mt-6 text-xl font-semibold">
                  <a href="#" title="" className="text-black">
                    {" "}
                    Learn from the best: 7 email marketing ideas you can use{" "}
                  </a>
                </p>
                <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase mt-3">
                  Gratis{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ALLC1;
