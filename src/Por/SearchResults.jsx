import React from "react";
import './SearchResults.css';
import { Link } from "react-router-dom";

export default function SearchResults(props) {
    return (
        <div>
            {/* Use Link component to create a link to the product page */}
            <Link to={`/product2/${props.result.id}`} className="search-result-link">
                <div id="search-result">{props.result.name}</div>
            </Link>
        </div>
    );
}
