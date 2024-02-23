import React from "react";
import './SearchResults.css'
export default function SearchResults(props){
    return(
        <div>
            <div id="search-result">{props.result.name}</div>
        </div>
    )
}