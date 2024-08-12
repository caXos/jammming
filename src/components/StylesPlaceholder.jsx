const themes = [
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

export default function StylesPlaceholder() {
  return (
    <>
      <button className="btn btn-primary"></button>
      <button className="btn btn-secondary"></button>
      <button className="btn btn-error"></button>
      <button className="btn btn-success"></button>
      <button className="btn btn-info"></button>
      <button className="btn btn-warning"></button>
      <button className="btn btn-accent"></button>

      {themes.map((theme, index) => {
        return <div data-theme={theme} key={index}>.</div>;
      })}
    </>
  );
}
