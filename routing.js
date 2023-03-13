const urlPageTittle = "Site"

document.addEventListener("click", (e) => {
    const { target } = e;

    if (!target.matches("i") && !target.matches("button span")
        || target.id === "burg-btn"
        || target.id === "close-btn") {
            // console.log("retornei")
        return;
    }

    e.preventDefault();
    urlRoute();
});

const urlRoutes = {
    404: {
        template: "/404.html",
        title: "404 | " + urlPageTittle,
        description: ""
    },
    "/": {
        template: "home.html",
        title: "Home | " + urlPageTittle,
        description: ""
    },
    "/index.html": {
        template: "/components/home.html",
        title: "Home | " + urlPageTittle,
        description: ""
    },
    "/meals": {
        template: "/meals.html",
        title: "Meals | " + urlPageTittle,
        description: ""
    },
    "/weakly-meals": {
        template: "/weakly-meals.html",
        title: "Weakly Meals | " + urlPageTittle,
        description: ""
    },
    "/grocery-list": {
        template: "/grocery-list.html",
        title: "Grocery List | " + urlPageTittle,
        description: ""
    },
    "/to-do-list": {
        template: "/to-do-list.html",
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