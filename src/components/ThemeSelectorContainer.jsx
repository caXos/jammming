const themesArray = ["light", "dakr", "retro", "emerald"];

export default function ThemeSelectorContainer() {
  const changeTheme = (event) => {
    let container = document.querySelector('html')
    // container.attributes.data-theme = event.target.value
  };

  return (
    <>
      <div className="flex flex-col items-center justify-between bg-base-200 mt-2 p-2 rounded-md w-11/12">
        <p>Don't fancy these colors, hon? Use the menu below to change them!</p>
        <select className="select select-bordered w-full max-w-xs" onChange={() => {changeTheme}}>
          {themesArray.map(theme => {
            return <option value={theme}>{theme}</option>
          })}
        </select>
      </div>
    </>
  );
}
