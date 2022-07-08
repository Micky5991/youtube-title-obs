function fetchJSON() {
    fetch("http://localhost:5000/current")
        .then(response => {
            return response.json();
        })
        .then(data => {
            let avatar = document.getElementById("avatar");
            if (avatar.src !== data.channelAvatar && data.channelAvatar != null && data.channelAvatar.trim().length > 0) {
                avatar.src = data.channelAvatar;
            }

            let title = document.getElementById("title");
            title.textContent = data.videoTitle;

            let channelName = document.getElementById("channel");
            channelName.textContent = data.channelName;

        })
        .catch(err => {
            console.log(err);
        });
}

setInterval(fetchJSON, 1000);
fetchJSON();
