export type Id = string

export function Id(value: any): Id {
    if (value === null || value === undefined) return ""
    return String(value)
}

export type Ticker = string

export const BASE_HOST = '127.0.0.1:9999'
export const BASE_URL = 'http://127.0.0.1:9999'

export const TEMP_ACC_ID = Id("3fa85f64-5717-4562-b3fc-2c963f66afa6")