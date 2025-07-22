const AddCarts = ({children, onClick}) => {
    return(
        <button
        onClick={onClick}
        className={`bg-[#4e9622] w-[100px] py-1 rounded-3xl text-[1.2rem] text-white cursor-pointer hover:scale-110 transition-transform duration-100 md:text-[0.8rem] md:w-[70px] `}
        >
            {children}

        </button>
    );
};
export default AddCarts;