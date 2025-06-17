"use client";

type LogoProps = {
  white?: boolean;
  black?: boolean;
  small?: boolean;
  className?: string;
};

function clickHandler() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  if (window.history.pushState) {
    window.history.pushState({}, document.title, window.location.pathname);
  }
}

export function Logo({ white, black, small, className }: LogoProps) {
  return (
    <button
      onClick={clickHandler}
      className={`w-fit cursor-pointer ${className}`}
    >
      <img
        src={`/assets/images/logos/logo${small ? "-small" : ""}.svg`}
        width={256}
        height={256}
        alt="Logo"
        className={`h-full ${
          white ? "brightness-0 invert" : black ? "brightness-0" : ""
        }`}
      />
    </button>
  );
}
