import React from "react"
import './SearchResultsListe.css'
import SearchResults from './SearchResults';
export default function SearchResultsListe (props) {
    return(
        <div id="results-lists" className="">
           {
            props.results.map((result,id) => {
                return(
                    <SearchResults result={result} key={id}/>
                )
            })
           }
        </div>
    )
}