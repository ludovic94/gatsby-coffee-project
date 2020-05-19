import React from 'react'

export default function Footer() {
    return (
        <footer className="footer py-3">
            <div className="div container">
                <div className="div row">
                    <div className="div col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">

    <h3>All rights reserved &copy;{new Date().getFullYear().toString()}</h3>
                    </div>
                </div>
            </div>
        </footer>
    )
}
