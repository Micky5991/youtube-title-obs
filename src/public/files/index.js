function fetchJSON() {
    fetch("http://localhost:5000/current")
        .then(response => {
            return response.json();
        })
        .then(data => {
            let avatar = document.getElementById("avatar");
            let img = document.createElement("img");
            img.className = "avatar_img";
            img.src = data.channelAvatar;
            img.width = 250;
            avatar.appendChild(img);

            let title = document.getElementById("title");
            let titleDiv = document.createElement("div");
            titleDiv.textContent = data.videoTitle;
            title.appendChild(titleDiv);

            let views = document.getElementById("views");
            let viewsDiv = document.createElement("div");
            viewsDiv.textContent = data.videoViews;
            title.appendChild(viewsDiv);

            let channelName = document.getElementById("channel");
            let channelNameDiv = document.createElement("div");
            channelNameDiv.textContent = data.channelName;
            channelName.appendChild(channelNameDiv);
        })
        .catch(err => {
            console.log(err);
        });
}

fetchJSON();
