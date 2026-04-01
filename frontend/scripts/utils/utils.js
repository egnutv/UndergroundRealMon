export const utils = {
    calc: {
        TwoPointInterpolation: () => import("./calc/TwoPointInterpolation.js")
    },
    data: {
        cache: {
            FileDelivery: () => import("./data/cache/FileDelivery.js")
        },
        convert: {
            Parsing: () => import("./data/convert/Parsing.js")
        },
        formatter: {
            CSSFormatter: () => import("./data/formatter/CSSFormatter.js")
        },
        storage: {
            Storage: () => import("./data/storage/Storage.js")
        },
        Fetching: () => import("./data/Fetching.js")
    }
};