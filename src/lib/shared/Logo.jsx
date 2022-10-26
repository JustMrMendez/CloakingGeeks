export function Logo({ menuOpen }) {
  return (
    <div className="flex items-center">
      <a href="#home">
        <svg
          className="group h-8 w-8 overflow-visible transition-all duration-300"
          viewBox="96.684 126.878 275.604 264.532"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M 120.128 357.052 L 352.949 357.052 L 372.288 391.41 L 96.684 391.41 L 120.128 357.052"
            className={`${
              menuOpen
                ? "translate-x-10 translate-y-4 text-blue-500"
                : "text-red-500 group-hover:translate-y-4 group-hover:translate-x-10 group-hover:text-blue-500"
            }  transition-all duration-300`}
            id="path14"
          />
          <path
            fill="currentColor"
            className={`${
              menuOpen
                ? "-translate-x-10 -translate-y-4 text-blue-500 "
                : "text-red-500 group-hover:-translate-x-10 group-hover:-translate-y-4 group-hover:text-blue-500"
            }  transition-all duration-300`}
            d="M 120.128 161.236 L 348.846 161.236 L 372.288 126.878 L 96.684 126.878 L 120.128 161.236"
            id="path16"
          />
          <path
            fill="currentColor"
            className={`${
              menuOpen
                ? "text-red-500"
                : "text-blue-500 group-hover:text-red-500"
            }  transition-all duration-300`}
            d="M 290.884 272.838 L 290.884 243.611 L 334.528 243.611 L 334.528 341.119 L 240.967 341.119 L 240.967 177.226 L 334.528 177.226 L 334.528 208.286 L 275.325 208.286 L 275.325 310.002 L 300.606 310.002 L 300.606 297.47 L 300.606 284.939 L 300.606 274.677 L 290.884 274.677 L 290.884 272.838"
            id="path18"
          />
          <path
            fill="currentColor"
            className={`${
              menuOpen
                ? "text-red-500"
                : "text-blue-500 group-hover:text-red-500"
            }  transition-all duration-300`}
            d="M 164.262 208.286 L 164.262 310.002 L 223.466 310.002 L 223.466 341.119 L 159.346 341.119 L 152.593 341.119 L 129.905 341.119 L 129.905 318.43 L 129.905 306.709 L 129.905 177.226 L 164.262 177.226 L 164.262 208.286"
            id="path20"
          />
        </svg>
      </a>
    </div>
  );
}
