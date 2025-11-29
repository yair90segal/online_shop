import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";
    // product need to be context

    useEffect(() => {
        if (!query) {
            return;
        }

    }, [query]);
}

export default SearchResults;