const BASE_URL = "https://dummyjson.com/products";

const productApi = {
    fetchAll : async () => {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        return data;
    },
}


export default productApi;