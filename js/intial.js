//#region nav functions
let navBar = document.querySelectorAll("#nav ul li");
let articles = document.querySelectorAll(".article")

navBar.forEach(function (ele) {
    
    ele.addEventListener('click', function(e) {
        let targetId = e.target.id;
        
        navBar.forEach(function(item) {
            item.style.fontWeight = "normal";
        })
        articles.forEach(function(arti) {
            arti.style.display = "none";
        })
        e.target.style.fontWeight = "bold";

        switch (targetId) {
            case "navContact":
                document.getElementById("contactLinks").style.display = "block";
                break;
            case "navAbout":
                document.getElementById("about").style.display = "block";
                break;
            case "navWorks":
                document.getElementById("work").style.display = "block";
                break;
        }
    });
})
//#endregion