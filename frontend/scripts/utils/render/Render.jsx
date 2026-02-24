class Render {
    constructor() {

    }

    /*
        const element = <App></App>;

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(element);

        const htmlDoc = document.getElementsByTagName("html");
        htmlDoc.lang="de";
    
    */

    root(element, mountId) {
        const root = ReactDOM.createRoot(document.getElementById(mountId));
        root.render(element);
    }
}