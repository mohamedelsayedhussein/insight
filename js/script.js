


//creat preload page

window.onload = function(){
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

// creat button to go up the

let myButton = document.getElementById('up');

function scroll(){   

    if(window.pageYOffset >= 500){
        myButton.style.display = 'block';    
    }
    else{
        myButton.style.display = 'none';  
    }
}

window.addEventListener('scroll',scroll);

myButton.onclick = function(){
    window.scrollTo(0, 0);
}

// Initialization Of Wow.js

new WOW().init();

// Toggle Menu Button Using Jquery

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');

    burger.addEventListener('click', () => {

        menu.classList.toggle('menu-active');
        burger.classList.toggle('toggle');
    });
}

navSlide();

// Owl Carousel using jQuery 


$(document).ready(function(){

    $('.carousel-2').owlCarousel({

        autoplay: true,
        margin: 10,
        loop: true,
        dots: true,
        autoplayHoverPause: true,
        smartSpeed: 700,
        responsive: {
            0:{items:1},
            500:{items:1},
            992:{items:1}
        }
        
    }); 
});


$(document).ready(function(){

    $('.owl-carousel').owlCarousel({

        autoplay: true,
        loop: true,
        stagePadding: 50,
        dots: false,
        autoplayHoverPause: true,
        smartSpeed: 700,
        responsive: {
            0:{items:1},
            500:{items:2},
            992:{items:3}
        }
        
    }); 
});


// Create pie Chart

var chart = AmCharts.makeChart("chartdiv", {
    "type": "pie",
    "colors": [
        '#f7ba00',
        '#ff9400',
        '#ff5301',
        '#ec220c',
        '#b61701',
        '#8a0f00',
        '#fac322',
        '#ffa221',
        '#ff6b23',
        '#f03f2b',
        '#bf2e1b',
        '#992214',
        '#fbcb43',
        '#feb044',
        '#ff8142'
],
        "fontFamily": "Segoe UI",
        "fontSize": 10,
        "color": "#777",
        "startDuration": 1,
        "theme": "dark",
        "addClassNames": true,
        "legend":{
        "position":"bottom",
        "autoMargins": false,
        "fontSize": 9,
        "color": "#666",
        "markerSize": 10,
        "markerType": "circle",
        "align": "center",
        "equalWidths": true,
        "verticalGap": 1,
        "valueWidth": 0,

    },

    "defs": {
      "filter": [{
        "width": "200%",
        "height": "200%",
        "feOffset": {
          "result": "offOut",
          "in": "SourceAlpha",
          "dx": 0,
          "dy": 0
        },
        "feGaussianBlur": {
          "result": "blurOut",
          "in": "offOut",
          "stdDeviation": 5
        },
        "feBlend": {
          "in": "SourceGraphic",
          "in2": "blurOut",
          "mode": "normal"
        }
      }]
    },
    "dataProvider": [{
        "industry": "Real state",
            "value": 41
          },
          {
            "industry": "Telecommunications",
            "value": 9
          },
          {
            "industry": "Others",
            "value": 7
          },
          {
            "industry": "Ceramics",
            "value": 7
          },
          {
            "industry": "Business Services",
            "value": 6
          },
          {
            "industry": "FMCG",
            "value": 5
          },
          {
            "industry": "Health Care",
            "value": 4
          },
          {
            "industry": "FoodService",
            "value": 4
          },
          {
            "industry": "Automotive",
            "value": 4
          },
          {
            "industry": "Finance",
            "value": 3
          },
          {
            "industry": "Fashion & Retail",
            "value": 3
          },
          {
            "industry": "Media & Broadcasting",
            "value": 2
          },
          {
            "industry": "Consumer Electronics",
            "value": 2
          },
          {
            "industry": "Education",
            "value": 1
          },
          {
            "industry": "Oil & Gas",
            "value": 1
          
    }],
    "valueField": "value",
    "titleField": "industry",
    "export": {
      "enabled": true
    }
  });
  
  chart.addListener("init", handleInit);
  
  chart.addListener("rollOverSlice", function(e) {
    handleRollOver(e);
  });
  
  function handleInit(){
    chart.legend.addListener("rollOverItem", handleRollOver);
  }
  
  function handleRollOver(e){
    var wedge = e.dataItem.wedge.node;
    wedge.parentNode.appendChild(wedge);  
  }


 // Create Bar Chart

 $(function () {
  $('#highchart_container').highcharts({
      chart: {
          type: 'bar',
          polar: true,
          backgroundColor: '#f2f2f2',
          style: {
            fontFamily: 'Oswald',
            fontWeight: '500',
            fontSize: 0,
          }
          
        },
      title: {
          text: 'Top OOH Campaigns',
          style: {
            fontFamily: 'Oswald',
            color: '#666',
            fontSize: 24,
            fontWeight: 500,
            transform: 'translatey(10px)',
          }

      },

      xAxis: {
        
          categories: [
            'Master Group "Live"',
            'Better Home "Midtown Condo"',
            'Tallat Moustafa "Celia"',
            'Egypt Defense Expo EDEX 2018',
            'Misr Italia "Vinci" Luxury Boutique Living',
            'Sabbour / Al Ahly "Odyssia The Ridge"',
            'Mahgoup "70 Days"',
            'Furnex & TheHome 2018',
            'Castle "Castle Landmark"',
            'Ahmed El Sallab "80% Discount"',
            'Deezer "The best globale music"',
            'Vodafone "Kart el Korot"',
            'Mazloum "75% Discount"',
            'SODIC "SODIC East"',
            'City Edge "Zahya"',
            'Hyde Park "The Residences"',
            'Landmark Sabbour "LLma by Aria"',
            'Souq.com "White Friday"',
            'Wadi Degla "Neopolis"',
            'HAP "Swan Lake New Cairo"',
            ],
          title: {
              text: null
          }
      },
      yAxis: {
          min: 0,

          labels: {
              overflow: 'justify',
              style: {
                color: '#ccc',
                fontSize:'10px'
            }
          }
      },
      tooltip: {
          valueSuffix: ''
      },

      plotOptions: {
          bar: {
              dataLabels: {
                  enabled: false,
                },
  
          }
      },
      
      legend: {
          enabled: false,
        },
        
        credits: {
          enabled: false
        },
      series: [{
          data: [
            129,
            110,
            100,
            98,
            96,
            90,
            75,
            65,
            62,
            59,
            55,
            54,
            54,
            54,
            54,
            54,
            53,
            52,
            51,
            50,
         
],
        allowPointSelect: true,
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
              [0, '#f7bc24'],
              [1, '#ed7127'],
          ]
      },
        borderWidth: 0,
        borderRadius: 3,
      }]
      
  });
});

