// simple footer component

function Footer() {
  return (
    <footer className=" bg-sky-50 p-5 text-slate-900">
      <div className="flex flex-col items-center justify-center">
        <p className="text-center text-xs">
          &copy; 2022 Landing Geeks. All rights reserved.
        </p>
        <p className="text-center text-xs">
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by{" "}
          <a
            href="https://github.com/justmrmendez"
            target="_blank"
            rel="noreferrer"
            className="text-slate-900 hover:text-slate-500"
          >
            Mr. Mendez
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
