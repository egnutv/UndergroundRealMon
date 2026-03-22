import { Fetching } from "./utils/data/Fetching.js";
import { Storage } from "./utils/data/storage/Storage.js";
import { DomObserver} from "./services/observer/DomObserver.js";
import { TwoPointInterpolation } from "./utils/calc/TwoPointInterpolation.js";
import { JsonObjectConvert} from "./utils/data/convert/JsonObjectConvert.js";
import { Events } from "./Events.js";
import { SintpolEngine } from "./services/engine/SintpolEngine/SintpolEngine.js";

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
        //await this.debugJsonDelivery();
        
    }

    async testFetch() {
        //const fetching = new Fetching();
        //return await fetching.json("/frontend/configs/config.json");
        const fetching = new Fetching(Response.prototype.json);
        return await fetching.fetch("/frontend/configs/config.json");
    }

    testStorage(storage) {
        const sName = Object.toString(storage);
        const s = new Storage(storage);
        s.setItem("testKey", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
        const value = s.getItem("testKey");
        console.log(sName + "storage - testKey:", value);
        s.clear("testKey");
    }
    async testStorageFetch() {
    const p = "/frontend/configs/config.json";
    //const f = await new Fetching().json(p);
    const f = await new Fetching(Response.prototype.json).fetch("/frontend/configs/config.json");
    

    const s = new Storage(sessionStorage);
    s.setItem(p, JSON.stringify(f));

    if (s.existsItem(p)) {
        console.log("it exists");

        const raw = s.getItem(p);
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
   /* async debugJsonDelivery() {
        const { JsonDelivery } = await import("./utils/data/cache/JsonDelivery.js");
        const jd = new JsonDelivery(sessionStorage);
        await console.log(jd.deliver("/frontend/configs/config.json"));
        const demoData = await jd.deliver("/frontend/configs/config.json");
        console.log("DemoData: " +  demoData.design_mode.added);
        let demoDataVal = demoData.design_mode.added;
        console.log(demoDataVal.length);
    }*/

}