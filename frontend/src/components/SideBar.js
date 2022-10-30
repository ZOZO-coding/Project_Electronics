import React from 'react'

const SideBar = ({ items, setItems }) => {
    
    const handleClick = async (e) => {
        let category = e.target.innerText
        const response = await fetch("/api/items/category/" + category)
        const json = await response.json()
        setItems(json)
    }

    const handleClickAll = async (e) => {
        const response = await fetch("/api/items")
        const json = await response.json()
        setItems(json)
    }

    return (
        <div className='side-bar'>
            <div onClick={handleClickAll}>All</div>
            <div onClick={handleClick}>Monitor</div>
            <div onClick={handleClick}>televisions</div>
            <div onClick={handleClick}>Keyboard & Mouse</div>
            <div onClick={handleClick}>Headphones</div>
            <div onClick={handleClick}>Cell Phones</div>
        </div>
    )
}

export default SideBar