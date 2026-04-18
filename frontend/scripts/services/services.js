export const services = {
    engine: {
        LangEngine: () => import("./engine/LangEngine/LangEngine.js"),
        SintpolEngine: () => import("./engine/SintpolEngine/SintpolEngine.js"),
        TextEngine: () => import("./engine/TextEngine/TextCore.js")
    },
    observer: {
        DomObserver: () => import("./observer/DomObserver.js")
    },
    LocalValueServices: () => import("./LocalValueServices.js")
};