const Favorites = ({children, onClick}) => {
    return(
        <button
        onClick={onClick}
        className={` cursor-pointer flex justify-start text-2xl md:text-[1rem] `}
        >
            {children}
        </button>
    );
};
export default Favorites;