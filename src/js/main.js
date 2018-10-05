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