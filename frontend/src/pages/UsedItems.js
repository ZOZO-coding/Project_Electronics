import React, { useState, useEffect } from 'react'
import DeleteButton from '../components/DeleteButton'

const UsedItems = () => {
    const [used, setUsed] = useState(null)

    useEffect(() => {
        const fetchUsed = async () => {
            const response = await fetch('/api/usedItems/')
            const json = await response.json()

            if (response.ok) {
                setUsed(json)
            }
        }

        fetchUsed()
    }, [])

    return (
        <div className='used-items-container'>
            {used && used.map(item => (
                <div className='used-item' key={item._id}>
                    <h1>{item.name}</h1>
                    <h4>${item.price}</h4>
                    <img src={item.img} alt="item" />
                    <h4 className='item-condition'>Item Condition: {item.condition}</h4>
                    <h4>{item.description}</h4>
                    <DeleteButton
                        id={item._id}
                        used={used}
                        setUsed={setUsed}
                    />
                </div>
            ))}
        </div>
    )
}

export default UsedItems