const services = [{
        name: 'web',
        value: '100%'
    },
    {
        name: 'mobile',
        value: '40%'
    },
    {
        name: 'psd2html',
        value: '90%'
    },
    {
        name: 'cms',
        value: '85%'
    },
    {
        name: 'graphics',
        value: '70%'
    },
    {
        name: 'responsive',
        value: '100%'
    },
    {
        name: 'ecommerce',
        value: '45%'
    },
];

const technologies = [{
        name: 'html',
        value: '100%'
    },
    {
        name: 'css',
        value: '100%'
    },
    {
        name: 'javascript',
        value: '100%'
    },
    {
        name: 'nodejs',
        value: '80%'
    },
    {
        name: 'php',
        value: '75%'
    },
    {
        name: 'angular',
        value: '95%'
    },
    {
        name: 'wordpress',
        value: '50%'
    },
];


window.onload = function () {
    animateServices();
    animateTechnologies();
}



// to animate the lever bars for services on page load
function animateServices() {
    services.forEach((service, arr) => {
        var ele = document.querySelector('.services-list .' + service.name + ' .bar');
        ele.style.width = service.value;
    });
}


// to animate the lever bars for technologies on page load
function animateTechnologies() {
    technologies.forEach((service, arr) => {
        var ele = document.querySelector('.technologies-list .' + service.name + ' .bar');
        ele.style.width = service.value;
    });
}



let oldTitle = "";
// change page title back after print
window.onbeforeprint = () => {
    oldTitle = document.title;
    document.title = "Bilal-CV";
    console.info("Before", document.title);
}

window.onafterprint = () => {
    document.title = oldTitle;
    console.info("AFTER ", document.title);
}


// to make a document object for printing and call print function
let firstPrint = true; //solution for the printpreview css racing issue
function printCV() {
    if (firstPrint) {
        window.print();
        firstPrint = false;
    }
    setTimeout('window.print()', 500);

}