import React from "react";

const ExploreBar = () => {
  return (
    <div>
      <nav class="bg-white border-gray-200 px-4 py-8 rounded dark:bg-gray-300 mx-10">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <div class="flex md:order-2">
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-4"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-4"
          >
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text-md font-medium">
              <li>
                <a
                  href="#"
                  class="block text-purple-700 rounded font-bold mx-8"
                  aria-current="page"
                >
                  All Categories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block text-gray-600 rounded font-bold mx-8 hover:text-gray-900"
                  aria-current="page"
                >
                  Arts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block text-gray-600 rounded font-bold mx-8 hover:text-gray-900"
                  aria-current="page"
                >
                  Sports
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block text-gray-600 rounded font-bold mx-8 hover:text-gray-900"
                  aria-current="page"
                >
                  Utilities
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block text-gray-600 rounded font-bold mx-8 hover:text-gray-900"
                  aria-current="page"
                >
                  Collectibles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block text-gray-600 rounded font-bold mx-8 hover:text-gray-900"
                  aria-current="page"
                >
                  Music
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block text-gray-600 rounded font-bold mx-8 hover:text-gray-900"
                  aria-current="page"
                >
                  Trading Cards
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ExploreBar;
