import loadedContent from '../docs/texts.json' assert {type: 'json'};

try {
    loadedContent.forEach(post => {
        let basicFormat = `<div id="${post.id}">
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <h3>${post.date}</h3>
        </div>`;
        switch(post.postType) {
            case "aboutMe":
                document.getElementById("about").innerHTML += basicFormat;
                break;
            case "work":
                document.getElementById("work").innerHTML += basicFormat;
                break;
        }
    })
}
catch {}
