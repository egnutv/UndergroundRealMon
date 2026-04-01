import { services } from "./services/services.js";
import { utils } from "./utils/utils.js";
import { components } from "../components/components.js";

export const sysLib = {
    Events: () => import("./Events.js"),
    services,
    utils,
    components,
    configs: {
        config: "/frontend/configs/config.json",
        engine: {
                Sintpol: "/frontend/configs/engine/Sintpol.json",
                langPaths: "/frontend/media/langs/index.json"
            }
        }
    };