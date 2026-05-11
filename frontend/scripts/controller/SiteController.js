export const site = (screenName) => {
        
        switch(screenName) {
            case "start":
                return {
                    screen: screenName,
                    background: "wildlife"
                };

            case "loading":
                return {
                    screen: screenName,
                    background: "default"
                };

            case "debug":
                return {
                    screen: screenName,
                    background: "default"
                };

            default:
                return {
                    screen: "debug",
                    background: "wildlife"
                };
        }
    };