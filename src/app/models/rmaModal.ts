export class RmaModal {
    imeiNumber: string;
    boxex: CheckBoxex[];
    description: string;
}

export class CheckBoxex {
    display:boolean;
    staklo:boolean;
    kamera:boolean;
    baterija:boolean;
    mikrofon:boolean;
    zvucnik:boolean;
    konektor:boolean;
    ostalo: boolean;
}
