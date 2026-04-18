import { TextCore } from "./textCore.js";
export class TextDeliveryEngine extends TextCore {
    constructor(name = "lang-engine") {
        super(name);
    }
    async start() {
        await this.init();
    }
    async init() {
        await super.init();
        this.DomObserver = new (await this.sysLib.services.observer.DomObserver()).DomObserver();
        this.messageChannel = await this.initMessageChannel("message-channel");
        this.sessionStorage = new (await this.sysLib.utils.data.storage.Storage()).Storage(sessionStorage);

    }

    async initMessageChannel(ident) {
        
        let messageChannel;
        messageChannel = document.getElementById(ident)

        if (!messageChannel) {
            messageChannel = document.createElement(ident);
            messageChannel.id = ident;
            messageChannel.style.display = "none";
            messageChannel.style.visibility = "hidden";
            document.body.appendChild(messageChannel);
        }
        return messageChannel;
    }
    async initUUID() {
        let uuid = await this.sessionStorage.getItem("text-delivery-engine-uuid");
        if (uuid) {
            console.log("Existing UUID found:", uuid);
            return uuid;
        } else {
            uuid = this.generateUUID();
            await this.sessionStorage.setItem("text-delivery-engine-uuid", uuid);
            console.log("New UUID generated:", uuid);
            return uuid;
        }
        //crypto.randomUUID();
    }
}