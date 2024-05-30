export interface TBasePropsInput {
    errorMessage?   : string;
    label?          : string;
    variant?        : "v1" | "v2" | "v3" | "v4" | "v5",
    customeClass?   : {
        label?  : string;
        input?  : string;
        ciV1?   : string;
        ciV2?   : string;
        ciV3?   : string;
        ciV4?   : string;

    },
    customeElement?: {
        start?  : React.ReactNode;
        end?    : React.ReactNode;
    }
}