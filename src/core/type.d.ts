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
    formSend?: boolean,
    willBe?: boolean,
    alcohol?: string[],
    vineType?: string,
    currentAlcohol?: string,
    placement?: boolean,
    name?: string,
    childrenSelect?: boolean,
    childrenCount?: string,
    local?: boolean,
}

export type TGuest = {
    name: string,
    token: string,
    data: TGuestData,
}
