import loadedContent from '../docs/texts.json' assert {type: 'json'};

try {
    loadedContent.forEach(post => {
        let postFormated = `<div id="${post.id}">
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <h3>${post.date}</h3>
        </div>`;
        
        if (post.links != null) {
            let linkList = "";
            for (let i = 0; i < post.links.length; i++) {
                linkList += (`<a href="${post.links[i].link}">${post.links[i].linkType}</a>&ensp;`);
            }
            postFormated = `
            <div id="${post.id}">
                <h2>${post.title}</h2>
                <div class="links">Links: ${linkList}</div>
                <p>${post.content}</p>
                <h3>${post.date}</h3>
            </div>`;
        }

        switch(post.postType) {
            case "aboutMe":
                document.getElementById("about").innerHTML += postFormated;
                break;
            case "work":
                document.getElementById("work").innerHTML += postFormated;
                break;
        }
    })
}
catch {}
