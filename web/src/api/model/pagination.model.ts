export type PageResponse = {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
}

export const defaultPage: PageResponse = {
    size: 0,
    totalElements: 0,
    totalPages: 0,
    number: 0
}