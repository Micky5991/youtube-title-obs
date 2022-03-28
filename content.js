function post(url = "", data = {}) {
    const response = fetch(url, {
        method: "POST",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        });

}

async function main() {
    try {
        // console.log("--- I'm TRYING ---");
        let videoTitleElement = document.getElementsByClassName("title style-scope ytd-video-primary-info-renderer");
        let videoTitle = videoTitleElement[0].textContent;

        let videoViewsElement = document.getElementsByClassName("view-count style-scope ytd-video-view-count-renderer");
        let videoViews = videoViewsElement[0].textContent;

        let channelNameElement = document.getElementsByClassName("style-scope ytd-channel-name");
        let channelName = channelNameElement[2].textContent;

        let channelAvatarElement = document.getElementById("avatar");
        let channelAvatar = channelAvatarElement.children["img"].src;

        let channelSubscribersElement = document.getElementById("owner-sub-count");
        let channelSubscribers = channelSubscribersElement.textContent;
        console.log("--- before neww ---");
        let neww = {
            videoTitle: videoTitle,
            videoViews: videoViews,
            channelName: channelName,
            channelAvatar: channelAvatar,
            channelSubscribers: channelSubscribers
        };
        // console.log("--- after neww ---");

        await fetch("http://localhost:5000/current", {
            method: "GET",
        })
            .then(response => response.text())
            .then(data => {
                data = data ? JSON.parse(data) : {};
                // @ts-ignore
                if (data.videoTitle !== neww.videoTitle || data.channelName !== neww.channelName) {
                    console.log("--- we are not the same ---");
                    post("http://localhost:5000", neww);
                    console.log("--- I probably deed it ---");
                } else {
                    console.log("--- the past is now ---");
                }

            }).catch(error => console.error(error));

        console.log("--- i made it past? ---");
    } catch (err) {
        if (err instanceof TypeError) {

        } else {

        }
    }
}

setInterval(main, 10000);
