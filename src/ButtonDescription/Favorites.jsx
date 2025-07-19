const Favorites = ({children, className}) => {
    function handleClick () {
        alert('Added to your favorites matcha.')
    }
    return(
        <button
        onClick={handleClick}
        className={` cursor-pointer flex justify-start text-2xl ${className}`}
        >
            {children}
        </button>
    );
};
export default Favorites;