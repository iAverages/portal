import { IItem } from "./Item";

type ItemCategories = Record<string, IItem[]>;
export const items: ItemCategories = {
    category_name: [{ image: "Link to image", name: "name", url: "Link" }],
};

export default items;
