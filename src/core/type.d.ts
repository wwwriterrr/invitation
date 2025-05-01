export type TIconProps = {
    size?: number | string,
    width?: number | string,
    height?: number | string,
    fill?: string,
    strokeWidth?: number,
    duration?: number,
}

export type TUser = {
    name: string,
}

export type TGuestData = {
    willBe?: boolean,
    alcohol?: string[],
    children?: number,
    formSended?: boolean,
}

export type TGuest = {
    name: string,
    token: string,
    data: TGuestData,
}
