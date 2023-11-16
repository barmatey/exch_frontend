export enum AlertColor {
    NONE,
    SUCCESS,
    ERROR,
}

export type Alert = {
    show: boolean,
    message: string,
    color: AlertColor,
}