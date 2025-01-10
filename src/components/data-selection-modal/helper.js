export default {
    searchCategoryFilter(allItems, searchQuery, favouritesOnly) {
        if (!searchQuery && !favouritesOnly) {
            return allItems;
        }

        return allItems
            .map(category => ({
                ...category,
                // remove items that don't match the search query
                items: (category.items || []).filter(childItem => {
                    const containsSearch = childItem.label.toLowerCase().includes(searchQuery.toLowerCase());
                    const isFavorite = !favouritesOnly || childItem.isFavorite;

                    // return only items that match the search query and favourite param
                    return containsSearch && isFavorite;
                }),
            }))
            .filter(category => category.items.length); // remove categories without items
    },
};
