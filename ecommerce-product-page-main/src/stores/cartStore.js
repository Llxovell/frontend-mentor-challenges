import { atom } from "nanostores";

const showCart = atom(false);

const quantity = atom(0);

const totalQuantity = atom(0);

export { showCart, quantity, totalQuantity };
