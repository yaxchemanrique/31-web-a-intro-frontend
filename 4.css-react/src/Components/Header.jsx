import React from 'react'

function Header() {
    return (
        <div className='flex justify-between items-center bg-yellow-200'>
            <img src="https://placeholderlogo.com/img/placeholder-logo-7.png" alt="Logopsium" />
            <div className='flex gap-4 px-8 font-medium'>
                <a href="#">Home</a>
                <a href="#">Log in</a>
                <a href="#">About us</a>
            </div>
        </div>
    )
}

export default Header