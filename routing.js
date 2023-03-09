const urlPageTittle = "Site"

document.addEventListener("click", (e) => {
    const { target } = e;
    // console.log("é um span?")
    // console.log(target.matches("span"))

    if (!target.matches("i") && !target.matches("span")
        || target.id === "burg-btn"
        || target.id === "close-btn") {
        // console.log("RETURN")
        return;
    }
    console.log()

    // console.log("i")

    e.preventDefault();  // o que faz?
    urlRoute();
});

const urlRoutes = {
    404: {
        template: "/components/404.html",
        title: "404 | " + urlPageTittle,
        description: ""
    },
    "/": {
        template: "/components/home.html",
        title: "Home | " + urlPageTittle,
        description: ""
    },
    "/index.html": {
        template: "/components/home.html",
        title: "Home | " + urlPageTittle,
        description: ""
    },
    "/meals": {
        template: "/components/meals.html",
        title: "Meals | " + urlPageTittle,
        description: ""
    },
    "/weakly-meals": {
        template: "/components/weakly-meals.html",
        title: "Weakly Meals | " + urlPageTittle,
        description: ""
    },
    "/grocery-list": {
        template: "/components/grocery-list.html",
        title: "Grocery List | " + urlPageTittle,
        description: ""
    },
    "/to-do-list": {
        template: "/components/to-do-list.html",
        title: "Todo List | " + urlPageTittle,
        description: ""
    }
}


const urlRoute = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.id);
    urlLocationHandler();
}

const urlLocationHandler = async () => {
    const location = window.location.pathname;

    if (location.length === 0) {
        location = "/";
    }

    const route = urlRoutes[location] || urlRoutes[404];

    const html = await fetch(route.template)
        .then((response) => response.text());

    document.getElementById("content").innerHTML = html;
    document.title = route.title;
}

window.onpopstate = urlLocationHandler;
window.route = urlRoute;

urlLocationHandler();