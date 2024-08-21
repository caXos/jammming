"use client";
const themesArray = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];

const changeTheme = (event) => {
  document.querySelector("html").setAttribute("data-theme", event.target.value);
};

export default function ThemeSelectorContainer() {
  return (
    <>
      <div className="flex flex-col items-center justify-between bg-base-200 my-2 p-2 rounded-md w-11/12 text-accent">
        <p className="py-4">
          Don&apos;t fancy these colors, hon? Use the menu below to change them!
        </p>
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={changeTheme}
        >
          {themesArray.map((theme, index) => {
            if (theme === "retro") {
              return (
                <option value={theme} key={index} selected>
                  {theme.charAt(0).toUpperCase() + theme.slice(1)} (default)
                </option>
              );
            } else {
              return (
                <option value={theme} key={index}>
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </option>
              );
            }
          })}
        </select>
      </div>
    </>
  );
}
