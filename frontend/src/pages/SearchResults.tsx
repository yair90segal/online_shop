import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";
    // product need to be context
    // add result variable, reset to empty list. in the use effect we will assign value of filtered product list

    useEffect(() => {
        if (!query) {
            return;
        }

    }, [query]);
}

export default SearchResults;