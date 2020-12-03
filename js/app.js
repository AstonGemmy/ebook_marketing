// Imports
import { Main } from "./main.js";

// const documentObject = document.documentElement;
// const hamburger = document.querySelector(".hamburger");
// const navbar = document.querySelector("#navbar");
// const search = document.querySelector("#search");
// const search_container = document.querySelector("#search-container");
// const bottom_bar = document.querySelector("#bottom-bar");
// const accordion = document.querySelectorAll(".accordion--selector");
// Slide show scripts
// let current_slide = 0;
// const slide_timer_delay = 3000;
// const backToTop = document.getElementById("scroll-to-top");
// let targetCount;

// const slideShow_container = document.getElementById("slideshow-container");		
// const slide_item_cover = document.getElementById("slide-item-cover");		
// const dataLength = data.length;			
// for (let x = 0; x < dataLength; x++) {
//     const slidesElem = document.createElement("div");
//     slidesElem.className = "slides";
//     const imgElem = document.createElement("img");
//     imgElem.className = "responsiveImage";
//     imgElem.alt = data[x].adminPic;
//     imgElem.dataset.src = "Images/Slides/" + data[x].adminPic;
//     const slideText = document.createElement("div");
//     slideText.className = "slide-text";
//     const slideTitlePositioning = document.createElement("div");
//     slideTitlePositioning.className = "slide-title-positioning";
//     const slideFontTitle = document.createElement("div");
//     slideFontTitle.className = "slide-font-title";
//     const slideFontSubtitle = document.createElement("div");
//     slideFontSubtitle.className = "slide-font-subtitle";
//     const indexDot = document.createElement("span");
//     indexDot.className = "slide-item-selector";				
//     const br = document.createElement("br");
    
//     slideFontSubtitle__text = document.createTextNode(data[x].adminPosition);
//     slideFontTitle__text = document.createTextNode(data[x].adminName);
    
//     slideFontSubtitle.appendChild(slideFontSubtitle__text);
//     if (documentObject.clientWidth < 702 ) {
//         slideFontSubtitle.innerHTML = slideFontSubtitle.innerHTML.substring(0, 30);
//     }
//     slideFontTitle.appendChild(slideFontTitle__text);
//     slideTitlePositioning.appendChild(slideFontTitle);
//     slideTitlePositioning.appendChild(br);
//     slideTitlePositioning.appendChild(slideFontSubtitle);
//     slideText.appendChild(slideTitlePositioning);
//     slidesElem.appendChild(imgElem);
//     slidesElem.appendChild(slideText);
//     slideShow_container.appendChild(slidesElem);
//     slide_item_cover.appendChild(indexDot);
    
// }

// //	Slideshow directional controls
// document.getElementById("slide-cover").addEventListener("click", elem => {
//     let current_slide_index;
//     const slide_length = document.getElementsByClassName("slides").length;		
//     const slide_items = document.getElementById("slide-item-cover");
//     const slide_items_length = slide_items.children.length;		
//     for (let i = 0; i < slide_items_length; i++) {
//         ((index) => {
//             if (slide_items.children[i].className.includes("active")) {
//                 current_slide_index = index;
//             }
//         })(i);
//     }
//     if (elem.target.id.includes("right") || elem.target.parentNode.id.includes("right")) {
//         current_slide = (current_slide_index + 1);
//         if (current_slide > (slide_length - 1)) {current_slide = 0;}
//         clearTimeout(slide_timer);
//         slideShow(current_slide);
//     } else if (elem.target.id.includes("left") || elem.target.parentNode.id.includes("left")) {
//         current_slide = (current_slide_index - 1);
//         if (current_slide < 0) {current_slide = (slide_length - 1);}
//         clearTimeout(slide_timer);
//         slideShow(current_slide);
//     }
// });

// //	Slideshow function
// function slideShow(current_slide) {	
//     const slide__container = document.getElementById('slideshow-container');
//     const slide_item = slide__container.getElementsByClassName('slides');
//     const slide_indicator = document.getElementsByClassName("slide-item-selector");		
//     for (let j = 0; j < slide_indicator.length; j++) {
//         slide_indicator[j].className = slide_indicator[j].className.replace(" slide-item-selector-active", "");
//     }
//     current_slide = Math.abs(current_slide);
//     current_slide++;		
//     slide_position = slide_item[current_slide - 1].offsetLeft;
//     if (current_slide == 1) {
//         slide__container.scrollTo({
//             left:slide_position
//         });	
//     } else {
//         slide__container.scrollTo({
//             left:slide_position,
//             behavior:"smooth"
//         });
//     }
//     slide_indicator[current_slide - 1].className += " slide-item-selector-active";
//     if (current_slide > (slide_item.length - 1)) {current_slide = 0;}		
//     slide_timer = setTimeout(function() {
//         slideShow(current_slide);
//     }, slide_timer_delay);		
// }

// //	Instantiating and executing IntersectionObserver API
// let observer = new IntersectionObserver((entries, observer) => {		
//     entries.forEach(entry => {			
//         if (entry.isIntersecting) {
//             entry.target.querySelector('.slide-text .slide-title-positioning .slide-font-title').classList.add("is-visible");
//             entry.target.querySelector('.slide-text .slide-title-positioning .slide-font-subtitle').classList.add("is-visible");
//             entry.target.querySelector("img").src = entry.target.querySelector("img").dataset.src;
//         } else {
//             entry.target.querySelector('.slide-text .slide-title-positioning .slide-font-title').classList.remove("is-visible");
//             entry.target.querySelector('.slide-text .slide-title-positioning .slide-font-subtitle').classList.remove("is-visible");
//         }			
//     });		
// }, {root:document.querySelector('#slideshow-container'), rootMargin:"0px 0px 0px 0px", threshold:0.75});
// //	Observed elements
// document.querySelectorAll('#slideshow-container .slides').forEach(img => {
//     observer.observe(img);
// });

// slideShow(current_slide);

// backToTop.addEventListener("click", e => {
//     window.scrollTo({top:0, behavior:"smooth"});
// });
// const user = new Main("John");
// alert(user.name);
alert("user.name");
//	Handles on scroll events
// window.addEventListener('scroll', perform => {
    // Main.hello();
    // alert("self")
// });


// //	Scroller options object
// const scrollerOptions = {
//     "book-hot":[    //  Id of scrollable parent element
//         "book-hot-slider",  //  Id of scrollable element container(direct parent of all scrollable items) 
// 		"book-hot--slide",  // Class name of all scrollable item *** Class name not ID as there will be more than one item
// 		3,  //  Scroll element count for desktop
//         1  //  Scroll element count for mobile
// 	]
// };

// Object.keys(scrollerOptions).forEach((optionKey, index) => {
// 	document.getElementById(optionKey).addEventListener("click", option => {
// 		let window__width = documentObject.clientWidth;
// 		if (window__width < 702) {
// 			targetCount = scrollerOptions[optionKey][3];
// 		} else {
// 			targetCount = scrollerOptions[optionKey][2];
// 		}
// 		rootNode = optionKey;		
//         actionNode = scrollerOptions[optionKey][0];
//         controlNode = scrollerOptions[optionKey][1];
// 		targetNode = option.target.id || option.target.parentNode.id;
// 		main.action.scroll_API(rootNode,controlNode,actionNode,targetNode,targetCount);
// 	});
// });       

// const querySelectorConstructor = ([parent_elem, child_elem, selector_type]) => {
//     if (selector_type == 'multiple') {
//         return(parent_elem.querySelectorAll(child_elem));
//     } else {
//         return(parent_elem.querySelector(child_elem));
//     }
// };

// querySelectorConstructor([bottom_bar, 'div', 'multiple']).forEach(tool => {
//     tool.addEventListener('click', function(target) {
        
//         if (target.target.tagName.toLowerCase() == "i") {
        
//         const selected_tool = document.querySelector(`#${this.id} ul`);
//         const selected_tool_id = this.id;
        
//         if (selected_tool.className.includes('is-active-bottom-bar')) {
//             selected_tool.classList.remove('is-active-bottom-bar');
//         } else {
//             selected_tool.classList.add('is-active-bottom-bar');
//         }

//         querySelectorConstructor([bottom_bar, 'div ul', 'multiple']).forEach(tool => {
//             if (tool.parentNode.id !== selected_tool_id) {
//                 tool.classList.remove('is-active-bottom-bar');
//             }
//         });
        
//         }

//     });
// });

// accordion.forEach(accordion => {
    
//     accordion.addEventListener("click", function() {
        
//         this.classList.toggle("focus");
//         const content = this.nextElementSibling;
    
//         if (content.style.height) {
//             content.style.height = null;
//             content.classList.remove('focus');
//         } else {            
//             content.style.height = "auto";
//             content.classList.add('focus');      
//         } 
    
//     });

// });

// hamburger.addEventListener("click", function() {
//     main.action.hideSearchBar();
// 	if (this.className.includes("is-active")) {
// 		this.classList.remove("is-active");
// 		navbar.classList.remove("is-active-navbar");
//         navbar.classList.add("is-inactive-navbar");
// 		// document.getElementById("overlay").style.display = "none";
// 	} else {
// 		this.classList.add("is-active");
// 		navbar.classList.remove("is-inactive-navbar");
//         navbar.classList.add("is-active-navbar");
// 		// document.getElementById("overlay").style.display = "block";
// 	}
// });

// search.addEventListener("click", function() {
//     main.action.hideNavBar();
// 	if (this.className.includes("is-active")) {
// 		this.classList.remove("is-active");
// 		search_container.classList.remove("is-active-search");
//         search_container.classList.add("is-inactive-search");
// 		// document.getElementById("overlay").style.display = "none";
// 	} else {
// 		this.classList.add("is-active");
// 		search_container.classList.remove("is-inactive-search");
//         search_container.classList.add("is-active-search");
// 		// document.getElementById("overlay").style.display = "block";
//     }
// });
