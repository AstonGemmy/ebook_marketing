let $this, scroll_timeout;

export class Action {

    constructor() {
        $this = this;
    };

    scrollToTopObserver = ({target, display}) => {
        
        if ((target && typeof target !== 'object') || (display && typeof display !== 'string')) {
            return console.error({
                status:'error',
                message: 'Instance of scrollToTopObserver error.',
                description: 'target parameters must be an HTML object. display must be a string and a valid CSS display value'
            })
        }

        if (!target && !display) {
            return console.error({
                status:'error',
                message: 'Instance of scrollToTopObserver error.',
                description: 'no valid parameters provided'
            })
        }
        
        // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            target.style.display = display;
        } else {
            target.style.display = display;
        }
        
    };
    
    scrollAPI = {
        
        manualScroll: ({scrollables}) => {

            if (scrollables) {

                if (typeof scrollables !== 'object') {
                    return console.error({
                        status:'error',
                        message: 'Instance of scrollAPI: manualScroll error.',
                        description: 'scrollables parameters must be a valid javascript object.'
                    })
                }
                
                let view_width, target_count;
                Object.keys(scrollables).forEach((scrollables_key, scrollables_index) => {
                    document.getElementById(scrollables_key).addEventListener("click", scrollable_section => {
                        view_width = document.documentElement.clientWidth;
                        if ($this.isMobileView(view_width)) {
                            target_count = scrollables[scrollables_key][3];
                        } else {
                            target_count = scrollables[scrollables_key][2];
                        }
                        const scroll_api_options = {
                            section: scrollables_key,
                            parent: scrollables[scrollables_key][0],
                            target: scrollables[scrollables_key][1],
                            count: target_count,
                            trigger: scrollable_section.target.id || scrollable_section.target.parentNode.id,
                        }
                        $this.scrollAPI.scrollAction(scroll_api_options);
                    });
                });

            } else {

                return console.error({
                    status:'error',
                    message: 'Instance of scrollAPI: manualScroll error.',
                    description: 'no valid parameters provided.'
                });

            }
        },

        autoScroll: ({scrollables, delay}) => {

            if (scrollables && delay) {
                
                if (typeof scrollables !== 'object') {
                    return console.error({
                        status:'error',
                        message: 'Instance of scrollAPI: autoScroll error.',
                        description: 'scrollables parameters must be a valid javascript object.'
                    })
                }

                if (typeof delay !== 'number') {
                    return console.error({
                        status:'error',
                        message: 'Instance of scrollAPI: autoScroll error.',
                        description: 'delay parameters must be a number.'
                    })
                }               

                let view_width, target_count;
                Object.keys(scrollables).forEach((scrollables_key, scrollables_index) => {
                    document.getElementById(scrollables_key).querySelectorAll('*').forEach(elem => {
                        if (elem.id.includes("right")) {
                            const trigger_id = elem.id;
                            view_width = document.documentElement.clientWidth;
                            if ($this.isMobileView(view_width)) {
                                target_count = scrollables[scrollables_key][3];
                            } else {
                                target_count = scrollables[scrollables_key][2];
                            }
                            const scroll_api_options = {
                                section: scrollables_key,
                                parent: scrollables[scrollables_key][0],
                                target: scrollables[scrollables_key][1],
                                count: target_count,
                                trigger: trigger_id,
                            }
                            
                            scroll_timeout = setTimeout(function() {
                                $this.scrollAPI.scrollAction(scroll_api_options);
                                $this.scrollAPI.autoScroll({scrollables, delay});
                            }, delay);

                        }
                    });        
                });

            } else {
            
                return console.error({
                    status:'error',
                    message: 'Instance of scrollAPI: autoScroll error.',
                    description: 'no valid parameters provided.'
                });
            
            }

        },

        scrollAction: ({section, parent, target, count, trigger}) => {
            $this.clearTimeout(scroll_timeout);
            //	Scrollable section directional controls
            const target_width = document.querySelector(`.${target}`).clientWidth;
            if (trigger.includes("left")) {            
                document.getElementById(parent).scrollBy({left:(-target_width * count), behavior:'smooth'});
            } else if (trigger.includes("right")) {
                if ($this.scrollAPI.scrollComplete.horizontal(parent)) {
                    document.getElementById(parent).scrollTo({
                        left:0,
                        behavior:'smooth'
                    });
                }
                document.getElementById(parent).scrollBy({left:(target_width * count), behavior:'smooth'});
            }
        },

        scrollComplete: {        
            vertical: (elem) => {
                if ( document.getElementById(elem).scrollLeft + document.getElementById(elem).clientWidth >= document.getElementById(elem).scrollWidth ) {
                    return true;
                }
                return false;
            },
    
            horizontal: (elem) => {
                if ( document.getElementById(elem).scrollTop + document.getElementById(elem).clientHeight >= document.getElementById(elem).scrollHeight ) {
                    return true;
                }
                return false;
            }            
        },    

    };

    clearTimeout = (timer) => {
        clearTimeout(timer);
    };

    isMobileView = (view_width) => {
        if (view_width < 702) {
            return true;
        }
        return false;
    };

    //	Instantiating and executing IntersectionObserver API
    intersectionObserver = new IntersectionObserver((observed, observer) => {
        observed.forEach(observed => {			
            if (observed.isIntersecting) {
                observed.target.classList.add("is-intersected");
            } else {
                observed.target.classList.remove("is-intersected");
            }			
        });		
    });

    collapsify = ({collapsibles, resettables, col_active, col_inactive, res_active}) => {
        collapsibles.classList.remove(col_active);
        collapsibles.classList.add(col_inactive);
        resettables.classList.remove(res_active);
    };

    backToTop = ({trigger}) => {
        trigger.addEventListener("click", e => {
            window.scrollTo({
                top:0,
                behavior:"smooth"
            });
        });
        
    };

    accordion = ({trigger, active_class}) => {

        if ((trigger && typeof trigger !== 'object') || (active_class && typeof active_class !== 'string')) {
            return console.error({
                status:'error',
                message: 'Instance of accordion error.',
                description: 'trigger must be a valid HTML object and active_class must be a string(CSS class name)'
            })
        }

        if (!trigger && !active_class) {
            return console.error({
                status:'error',
                message: 'Instance of accordion error.',
                description: 'no valid parameters provided.'
            });
        }

        trigger.forEach(accordion => {    
            accordion.addEventListener("click", function() {                
                this.classList.toggle(active_class);
                const content = this.nextElementSibling;            
                if (content.style.height) {
                    content.style.height = null;
                    content.classList.remove(active_class);
                } else {            
                    content.style.height = "auto";
                    content.classList.add(active_class);      
                }
            });
        });
    };    

    toggleSwap = ({trigger, target, endpoint, collapsibles, col_active, col_inactive, resettables, target_active, target_inactive, trigger_active}) => {
        
        if ((trigger && typeof trigger !== 'object') || (target && typeof target !== 'object') || (endpoint && typeof endpoint !== 'object') || (collapsibles && typeof collapsibles !== 'object') || (resettables && typeof resettables !== 'object')) {
            return console.error({
                status:'error',
                message: 'Instance of toggleSwap error.',
                description: 'trigger, target, endpoint, collapsibles and resettables parameters must be HTML object'
            })
        }
        
        trigger.addEventListener("click", function() {
            let current_trigger_id = trigger.id;
            document.querySelectorAll('.collapsible').forEach(collapse => {
                if (collapse.id !== current_trigger_id) {
                    collapse.classList.remove(trigger_active);
                }
            });
            $this.collapsify({collapsibles, resettables, col_active, col_inactive, trigger_active});
            if (this.className.includes(trigger_active)) {
                if (endpoint && typeof endpoint == 'object' && endpoint.tagName.toLowerCase() == 'input') {
                    endpoint.blur();
                }
                this.classList.remove(trigger_active);
                target.classList.remove(target_active);
                target.classList.add(target_inactive);
            } else {
                if (endpoint && typeof endpoint == 'object' && endpoint.tagName.toLowerCase() == 'input') {
                    endpoint.focus();
                }
                this.classList.add(trigger_active);
                target.classList.remove(target_inactive);
                target.classList.add(target_active);
            }
        });
    };

    querySelectorConstructor = ({parent, child, type}) => {
        if (type == 'multiple') {
            return(parent.querySelectorAll(child));
        } else {
            return(parent.querySelector(child));
        }
    };

    switchify = ({section, trigger, active_class}) => {        
        trigger.addEventListener('click', function(target) {
            if (target.target.className.includes("switchify--selector")) {
                const selected_tool = document.querySelector(`#${this.id} .switchify--option`);
                const selected_tool_id = this.id;                
                if (selected_tool.className.includes(active_class)) {
                    selected_tool.classList.remove(active_class);
                } else {
                    selected_tool.classList.add(active_class);
                }        
                $this.querySelectorConstructor({
                    parent: section,
                    child: '.switchify--option',
                    type: 'multiple'
                }).forEach(trigger => {
                    if (trigger.parentNode.id !== selected_tool_id) {
                        trigger.classList.remove(active_class);
                    }
                });            
            }    
        });
    };    

}