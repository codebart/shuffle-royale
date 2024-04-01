export type PageResponse = {
    size: number,
    totalElements: number,
    totalPages: number,
    page: number
}

export const defaultPage: PageResponse = {
    size: 0,
    totalElements: 0,
    totalPages: 0,
    page: 0
}