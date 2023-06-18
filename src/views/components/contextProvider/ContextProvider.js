import { createContext, useState } from "react";


export const ProductContext = createContext();

const ContextProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(1);

    const ecommInfo = {
        loading,
        setLoading,
        categoryId,
        setCategoryId,
    }

    return (
        <div>
            <ProductContext.Provider value={ecommInfo} >{children}</ProductContext.Provider>
        </div>
    )
};
export default ContextProvider;