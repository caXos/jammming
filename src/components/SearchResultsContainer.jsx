import SearchResults from "./SearchResults";
import TrackList from "./TrackList";

export default function SearchResultsContainer() {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-between bg-base-200 p-2 rounded-md w-11/12">
                <SearchResults />
                <TrackList />                
            </div>
        </>
    );
}