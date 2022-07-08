import { IProduct } from "../interfaces/IProduct";

export let MOCK_PRODUCTS: Array<IProduct> = [
  {
    id: "5001",
    name: "",
    i18name:
      "Water Smart Flow Meter,Wassermengenzähler,Průtokoměr,Vandmængdetæller,Nutikas voolumõõdik,计流器,wassermeter",
    modelNumber: "8188,8188-20,8188-24,8188-29",
  },
  {
    id: "5002",
    name: "Product2",
    i18name: "المحصول الثانی",
    modelNumber: "987HH7767",
  },
];

export const SET_MOCK_PRODUCTS = (newItems: Array<IProduct>) => {
  MOCK_PRODUCTS = [...newItems];
};
