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
const abbreviationScales = [
    {scale: 9, abbreviation: 'B'},
    {scale: 6, abbreviation: 'M'},
    {scale: 3, abbreviation: 'K'},
]
export const abbreviated = (coins: number) => {
    const scale = Math.floor(Math.log10(coins));
    for (const abbreviationScale of abbreviationScales) {
        if (abbreviationScale.scale <= scale) {
            return `${parseFloat((coins / Math.pow(10, abbreviationScale.scale)).toFixed(1))}${abbreviationScale.abbreviation}`;
        }
    }
    return coins;
}