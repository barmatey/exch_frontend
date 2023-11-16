export type Id = string

export function Id(value: any): Id {
    if (value === null || value === undefined) return ""
    return String(value)
}

export type Ticker = string