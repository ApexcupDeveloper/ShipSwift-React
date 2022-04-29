import { CRISP_CHAT_ID } from "./auth0-token";

var script = document.createElement("script");

export const onSupport = (email, username, token) => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = CRISP_CHAT_ID;
    window.CRISP_TOKEN_ID = token;

    script.src = "https://client.crisp.chat/l.js";
    script.async = 1;

    document.getElementsByTagName("head")[0].appendChild(script);
    window.$crisp.push(["set", "user:nickname", [username || 'nicename']]);
    window.$crisp.push(["set", "user:email", email]);
    window.$crisp.push(["do", "chat:hide"]);
}

export const onShowLiveChat = () => {
    window.$crisp.push(["do", "chat:show"]);
    window.$crisp.push(['do', 'chat:open']);
    window.$crisp.push(["do", "message:read"])
    window.$crisp.push(["on", "chat:closed", function () {
        window.$crisp.push(["do", "chat:hide"]);
    }])
}