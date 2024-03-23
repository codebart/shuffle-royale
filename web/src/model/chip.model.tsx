export type ChipValue = '1' | '10' | '100' | '1K' | '10K' | '100K' | '1M' | '10M' | '100M';
export type ChipCounts = Record<ChipValue, number>;
export const chipValueTypesAsc: ChipValue[] = ['1', '10', '100', '1K', '10K', '100K', '1M', '10M', '100M'];
export const chipValueTypesDesc: ChipValue[] = [...chipValueTypesAsc].reverse();
export const chipValues: Record<ChipValue, number> = {
    '1': 1, 
    '10': 10, 
    '100': 100,
    '1K': 1000,
    '10K': 10000,
    '100K': 100000,
    '1M': 1000000,
    '10M': 10000000,
    '100M': 100000000
}
