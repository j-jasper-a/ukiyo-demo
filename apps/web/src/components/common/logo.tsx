"use client";

function clickHandler() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  if (window.history.pushState) {
    window.history.pushState({}, document.title, window.location.pathname);
  }
}

export function Logo() {
  return (
    <button
      onClick={clickHandler}
      className={"group flex w-fit cursor-pointer items-center"}
    >
      <div className="relative h-8 w-auto">
        <img
          src={`/assets/images/logos/logo.svg`}
          width={256}
          height={256}
          alt="Logo"
          className="h-full w-full"
        />
      </div>
      <p className="font-special group-hover:text-brand text-nowrap text-2xl font-bold transition-all duration-300">
        / Ukiyo
      </p>
    </button>
  );
}
