import { Response, Request } from "express";
import { MOCK_PRODUCTS, SET_MOCK_PRODUCTS } from "../data/products";
import { IProduct } from "../interfaces/IProduct";

export const getAllProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    res.status(200).json({ products: MOCK_PRODUCTS });
  } catch (error) {
    throw error;
  }
};

export const saveChanges = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    /**
     * In here the changes must be saved on MySQL database. But I run out of time.
     * Instead this will update the array anyway!!
     *
     * Important!!: I have to refresh my knowlodge on MySQL as recently focuced on frontend.
     */

    const body = req.body.products as Array<IProduct>;
    SET_MOCK_PRODUCTS(body);

    res.status(200).json({ products: MOCK_PRODUCTS });
  } catch (error) {
    throw error;
  }
};
