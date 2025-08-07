import React from 'react'

const Layout = ({
    className = "",
    children
}) => {
    return <div className={`w-full min-h-screen bg-white/95 ${className}`}>{ children} </div>
}

export default Layout
