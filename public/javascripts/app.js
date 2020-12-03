// Imports
import * as Main from "./main.js";

// Variables declarations
const Action = new Main.Action();
const bottom_bar = document.querySelector("#bottom-bar"),
    // documentObject = document.documentElement,
    scroll_to_top = document.getElementById("scroll-to-top"),
    accordion_items = document.querySelectorAll(".accordion--selector"),
    hamburger = document.querySelector(".hamburger"),
    navbar = document.querySelector("#navbar"),
    search_container = document.querySelector("#search-container"),
    search_input = document.querySelector("#search-box"),
    search = document.querySelector("#search"),
    scroll_time_delay = 3000,
    scrollables = {
        "book-hot":[    //  Id of scrollable parent element
            "book-hot-slider",  //  Id of scrollable element container(direct parent of all scrollable items) 
            "book-hot--slide",  // Class name of all scrollable item *** Class name not ID as there will be more than one item
            3,  //  Scroll element count for desktop
            1  //  Scroll element count for mobile
        ]
    }
;

// Observed intersection elements
document.querySelectorAll('.observed').forEach(observed_element => {
    Action.intersectionObserver.observe(observed_element);
});

// Bottom bar controls
Action.querySelectorConstructor({
    parent: bottom_bar,
    child: '.switchify--parent',
    type: 'multiple'
}).forEach(tool => {
    Action.switchify({
        section: bottom_bar,
        trigger: tool,
        active_class: 'is-active-bottom-bar'
    });
});

// Scroll event controller
window.addEventListener('scroll', perform => {
    Action.scrollToTopObserver({
        target: scroll_to_top,
        display: 'flex'
    });
});

// Scrolls page back to topmost position
Action.backToTop({
    trigger: scroll_to_top
});

// Accordion effect
Action.accordion({
    trigger: accordion_items,
    active_class: "focus"
});

// Toggles the navbar menu on hamburger element click
const toggleNavbar = Action.toggleSwap({
    trigger: hamburger,
    target: navbar,
    collapsibles: search_container,
    col_active: 'is-active-search',
    col_inactive: 'is-inactive-search',
    resettables: search,
    target_active: 'is-active-navbar',
    target_inactive: 'is-inactive-navbar',
    trigger_active: 'is-active'
});

// Displays and hides search input field on header on click trigger
const toggleSearch = Action.toggleSwap({
    trigger: search,
    target: search_container,
    endpoint: search_input,
    collapsibles: navbar,    
    col_active: 'is-active-navbar',
    col_inactive: 'is-inactive-navbar',
    resettables: hamburger,
    target_active: 'is-active-search',
    target_inactive: 'is-inactive-search',
    trigger_active: 'is-active'
});

// Scroll_API manual action for directional scrolling
Action.scrollAPI.manualScroll({
    scrollables: scrollables
});

// Automatically scroll through items within an HTML container
Action.scrollAPI.autoScroll({
    scrollables: scrollables,
    delay: scroll_time_delay
});