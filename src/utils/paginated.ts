
interface ReturnedPaginated {
    page: number;
    limit: number;
    total: number;
    items: any[]
}

export const returnedPaginated = ({page, limit, total, items}: ReturnedPaginated) => {
    const totalPages = Math.ceil(total / limit);

    return {
        items,
        meta: {
            page,
            limit,
            total,
            totalPages,
            hasNext: page < totalPages,
            hasPrev: page > 1,
            nextPage: page < totalPages ? page + 1 : null,
            prevPage: page > 1 ? page - 1 : null,
            lastPage: totalPages > 0 ? totalPages : 1, // 🔥 nueva propiedad
        },
    }
    
}