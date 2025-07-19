
const Descriptions = ({menu}) => {
    return(
        <>

        <h1 className="text-[1rem font-bold">{menu.flavor}</h1>
        <span className="text-[1rem]">{menu.addedFlavor}</span>
        </>
    );
};
export default Descriptions;