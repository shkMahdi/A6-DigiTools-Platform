import { ImCart } from "react-icons/im";
import { FaRegFaceSadTear } from "react-icons/fa6";

const Cart = ({ selected, setSelected }) => {
    const isEmpty = (selected.length === 0);

    const handleRemove = (prod) => {
        setSelected(selected.filter(p => p.name !== prod.name));
    }

    const removeAll = () => {
        setSelected([]);
    }
    return (
        <>
            <div className="w-[95%] md:max-w-300 mx-auto mb-20" hidden={!isEmpty}>
                <div className="bg-white border border-gray-300 text-center py-20 rounded-3xl">
                    <div className="flex justify-center"><ImCart /></div>
                    <p className="text-xl text-gray-500">Cart Is Empty :/</p>
                </div>
            </div>
            <div className="w-[95%] md:max-w-300 mx-auto mb-20 border border-gray-200 p-4 rounded-3xl" hidden={isEmpty}>
                <h3 className="text-xl font-bold mb-5">Your Cart</h3>

                <div className="grid grid-cols-1 gap-2 mb-5">
                    {
                        selected.map((p) => (
                            <div key={p.id} className="flex items-center gap-4 px-4 py-3 rounded-xl bg-gray-100/80">
                                <div className='flex justify-start p-1 border border-gray-300 rounded-full w-fit items-center'>
                                    {p.icon}
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <div>
                                        <p className="text-xl font-bold">{p.name}</p>
                                        <p className="text-gray-500">${p.price}</p>
                                    </div>
                                    <div className="text-red-600 flex justify-end text-sm">
                                        <button onClick={() => handleRemove(p)}>Remove</button> 
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="flex justify-between px-3 mb-5">
                    <p className="text-gray-500 text-sm">Total: </p>
                    <p className="text-xl font-bold">$78</p>
                </div>

                <div>
                    <button onClick={() => removeAll()} className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full rounded-3xl text-white">Proceed To Checkout</button>
                </div>
            </div>
        </>

    );
};

export default Cart;