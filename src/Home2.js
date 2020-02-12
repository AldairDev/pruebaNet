import React from 'react'
import { Link } from 'react-router-dom'

export default function Home2() {
    return (
        <div>
            this is the other route
            <div>
                <Link to="/">
                    Return Home
                </Link>
            </div>
        </div>
    )
}
