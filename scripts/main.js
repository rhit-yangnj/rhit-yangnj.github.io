var rhit = rhit || {};

rhit.showBackToTopBtn = function () {
    if (document.documentElement.scrollTop > 20) {

    }
}



rhit.main = function () {
    const backToTopBtn = document.querySelector("#backToTopBtn")
    backToTopBtn.onclick = (params) => {
        document.documentElement.scrollTop = 0;
    }

    window.onscroll = (params) => {
        if (document.documentElement.scrollTop > 200) {
            console.log("Awesome");
            backToTopBtn.style.display = "block";
        } else {
            console.log("cool");
            backToTopBtn.style.display = "none";
        }
    }
}

rhit.main();