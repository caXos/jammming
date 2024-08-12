export default function SortRadios() {
    return (
        <>
        <div className="flex justify-evenly w-full bg-base-100 rounded-md">
            <label className="label cursor-pointer">
                <span className="label-text px-2 text-accent">Title</span>
                <input type="radio" name="sort-radio" className="radio" value="title" defaultChecked />
            </label>
            <label className="label cursor-pointer">
                <span className="label-text px-2 text-accent">Artist</span>
                <input type="radio" name="sort-radio" className="radio" value="artist" />
            </label>
            <label className="label cursor-pointer">
                <span className="label-text px-2 text-accent">Album</span>
                <input type="radio" name="sort-radio" className="radio" value="album" />
            </label>
        </div>
        </>
    );
}