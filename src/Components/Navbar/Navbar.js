import React from 'react'
import './Navbar.css'
import search from '../Images/search.webp'
import not from '../Images/not.png'
import prof from '../Images/prof.png'
import mes from '../Images/mes.png'



export default function Navbar() {
    return (
        <div className='mainNavbar'>
            <div className='logoContainer'>
                <p>Social</p>
            </div>
            <div>
                <div className='searchContainer'>
                    <img src={search} className='searchIcons' alt='' />
                    <input type='text' className='searchInput' placeholder='Search...' />
                </div>
            </div>
            <div className='IconsContainer'>
                <img src={not} alt='' className='Icons' />
                <img src={mes} alt='' className='Icons' />
                <div style={{display:'flex',alignItems:'center' }}>
                    <img src={prof} alt='' className='ProfileImage' />
                    <p style={{marginLeft:'5px'}}>Arif</p>
                </div>
            </div>

        </div>
    )
}
