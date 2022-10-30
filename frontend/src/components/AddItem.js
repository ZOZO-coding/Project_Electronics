import React, { useState } from 'react'

const AddItem = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [img, setImg] = useState("")
    const [category, setCategory] = useState("")
    const [condition, setCondition] = useState("")
    const [description, setDescription] = useState("")

    const [error, setError] = useState("");

    const handleFormSubmission = async (e) => {
        e.preventDefault()

        const item = { name, price, img, category, condition, description }

        const response = await fetch('/api/usedItems', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (response.ok) {
            setName("")
            setPrice(0)
            setDescription("")
            setImg("")
        }
    }

    return (
        <div>
            <div className="form-container">
                <form
                    autoComplete="off"
                    onSubmit={(e) => {
                        return handleFormSubmission(e);
                    }}
                >
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    />
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        required
                    />
                    <label>Image</label>
                    <input
                        type="text"
                        name="img"
                        onChange={(e) => setImg(e.target.value)}
                        value={img}
                        required
                    />
                    <label>Category</label>
                    <input
                        type="text"
                        name="category"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                        required
                    />
                    <label>Condition</label>
                    <select name='condition' value={condition}
                        onChange={(e) => setCondition(e.target.value)}
                        required>
                        <option value="Like New" selected>Like New</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                        <option value="Poor">Poor</option>
                        <option value="Defunct">Defunct</option>
                    </select>
                    <label>Description</label>
                    <input
                        type="text"
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        required
                    />
                    <button type="submit" >
                        Add Item
                    </button>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    );
};

export default AddItem