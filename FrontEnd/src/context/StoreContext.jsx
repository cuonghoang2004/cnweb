import axios from "axios";
import { useState, createContext, useEffect } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const url = import.meta.env.VITE_API_URL;

    const [cartItems, setCartItems] = useState({});
    const [food_list, setFoodList] = useState([]);
    const [token, setToken] = useState(
        localStorage.getItem("token") || ""
    );

    const fetchFoodList = async () => {
        const res = await axios.get(url + "/api/food/list");
        setFoodList(res.data.data);
    };

    const addToCart = async (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));

        if (token) {
            await axios.post(
                url + "/api/cart/add",
                { itemId },
                { headers: { token } }
            );
        }
    };

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => {
            const updated = { ...prev };
            if (updated[itemId] > 1) updated[itemId]--;
            else delete updated[itemId];
            return updated;
        });

        if (token) {
            await axios.post(
                url + "/api/cart/remove",
                { itemId },
                { headers: { token } }
            );
        }
    };

    const getTotalCartAmount = () => {
        let total = 0;
        for (const id in cartItems) {
            const item = food_list.find((i) => i._id === id);
            if (item) total += item.price * cartItems[id];
        }
        return total;
    };

    useEffect(() => {
        fetchFoodList();
    }, []);

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
            setCartItems({});
        }
    }, [token]);

    return (
        <StoreContext.Provider
            value={{
                food_list,
                cartItems,
                addToCart,
                removeFromCart,
                getTotalCartAmount,
                token,
                setToken,
                url,
            }}
        >
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
