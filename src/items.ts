import { type } from "os";
import { IItem } from "./Item";

type ItemCategories = Record<string, IItem[]>;
export const items: ItemCategories = {
    examples: [
        {
            name: "Example Item 1",
            image: "https://cdn.danielraybone.com/assets/local/portal/prometheus.png",
            url: "http://local.danielraybone.com/#",
        },
        {
            name: "Example Item 2",
            image: "https://cdn.danielraybone.com/assets/local/portal/grafana.png",
            url: "http://local.danielraybone.com/#",
        },
    ],
    another: [
        {
            name: "Example Item 3",
            image: "https://cdn.danielraybone.com/assets/local/portal/pihole.png",
            url: "http://local.danielraybone.com/#",
        },
        {
            name: "Example Item 4",
            image: "https://cdn.danielraybone.com/assets/local/portal/router.png",
            url: "http://local.danielraybone.com/#",
        },
    ],
};

export default items;
