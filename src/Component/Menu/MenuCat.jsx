import SingleHomeMenu from "../Home/HomeMenu/SingleHomeMenu";


const MenuCat = ({ items }) => {
    return (
        <>
            {
                items.map(item => <SingleHomeMenu
                    key={item._id}
                    itemData={item}
                ></SingleHomeMenu>)
            }

        </>
    );
};

export default MenuCat;