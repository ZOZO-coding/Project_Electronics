
const DeleteButton = ({ id, used, setUsed }) => {
    const handleDelete = async () => {
        setUsed(used.filter(item => item._id !== id))
        const response = await fetch('/api/usedItems/' + id, {
            method: 'DELETE',
        })
    }

    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default DeleteButton