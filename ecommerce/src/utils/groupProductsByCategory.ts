import { Product } from '@/pages';
import { type } from 'os';

type GroupedProducts = {
[key: string]: Product[];
};

export function groupProductsByCategory(products: Product[]) {
    const groups: GroupedProducts = {};

    for (const product of products) {
        const category = product.category;

        if (!groups[category]) {
            groups[category] = [];
        }

        groups[category].push(product);
    }
    return groups
}