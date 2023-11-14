import React from 'react'
import {Link, useSearchParams} from 'react-router-dom'
import PdfComponent from './Pdfcomponent'
export default function Header() {
    const [searchParam, setSearchParam] = useSearchParams()
    console.log("searchParam", searchParam)
    console.log("my name")
    return (
        <>
            <PdfComponent />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/service">Service</Link></li>
            </ul>
            <input onChange={(e) => {
                setSearchParam({"adsf": e.target.value})
            }} ></input>
        </>
    )
}
