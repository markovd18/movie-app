
export enum Sort {
    NONE = 0,
    EP_NUM_ASC = 1,
    EP_NUM_DESC = 2
}

export const getNextSort = (sort: Sort) => {
    if (sort === Sort.NONE) {
        return Sort.EP_NUM_ASC;
    }

    return sort === Sort.EP_NUM_ASC ? Sort.EP_NUM_DESC : Sort.NONE;
}