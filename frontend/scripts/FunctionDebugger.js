import { Fetching } from "./utils/data/Fetching.js";
import { Storage } from "./utils/data/storage/Storage.js";
import { DomObserver} from "./services/observer/DomObserver.js";
import { TwoPointInterpolation } from "./utils/calc/TwoPointInterpolation.js";
import { JsonObjectConvert} from "./utils/data/convert/JsonObjectConvert.js";
import { Events } from "./Events.js";
import { SintpolEngine } from "./services/engine/SintpolEngine.js";

export class FunctionDebugger {
    constructor() {
        console.log("FunctionDebugger loaded");
    }

    async start() {
        console.log("FunctionDebugger run");
        await this.testFunction();
    }

    async testFunction() {
        console.log("testFunction called");
        const input = await this.testFetch();
        console.log("config.json:", input);

        const lang = input.langs.default;
        const design_mode = input.design_mode.added;
        console.log("default language:", lang);
        console.log("design mode:", design_mode);

        this.testStorage(sessionStorage);
        this.testStorage(localStorage);
        this.testObserver();
        this.testTwoPointInterpolation();
        await this.testStorageFetch();
        new SintpolEngine().start()
        
    }

    async testFetch() {
        const fetching = new Fetching();
        return await fetching.json("/frontend/configs/config.json");
    }

    testStorage(storage) {
        const sName = Object.toString(storage);
        const s = new Storage(storage);
        s.set("testKey", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
        const value = s.get("testKey");
        console.log(sName + "storage - testKey:", value);
        s.clear("testKey");
    }
    async testStorageFetch() {
    const p = "/frontend/configs/config.json";
    const f = await new Fetching().json(p);

    const s = new Storage(sessionStorage);
    s.set(p, JSON.stringify(f));

    if (s.exists(p)) {
        console.log("it exists");

        const raw = s.get(p);
        console.log("raw from storage:", raw);

        const parsed = JSON.parse(raw);
        console.log("parsed object:", parsed);

        const design_mode = parsed.design_mode.added;
        console.log("TEST VAL:", design_mode);
    } else {
        console.warn(`The value with the key ${p} is not visible`);
        }
    }
    testObserver() {
    const domObserver = new DomObserver();
    domObserver.observe(
        document.body,
        el => el.id.includes("dummy1"),
        el => {
            el.style.background = "blue";
        }
    );
    }
    testTwoPointInterpolation() {
        const twoPointInterpolation = new TwoPointInterpolation();
        let num = twoPointInterpolation.calc(10, 90, 800, 3300, window.innerWidth);
        console.log("the current num is " + num);
    }

}