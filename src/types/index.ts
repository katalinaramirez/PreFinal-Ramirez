export interface Product {
    id: number;
    name: string;
    price: number;
    rating: number;
    quantity: number;
    image: string;
    category: string;
    shortDesc: string;
    fullDesc: string;
    specs: string;
}

export interface CartItem extends Product {
    cartQuantity: number;
}