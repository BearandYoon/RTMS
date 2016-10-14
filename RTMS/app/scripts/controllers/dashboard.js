'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the angularTestApp
 */
angular.module('RTMSApp')
  .controller('DashboardCtrl', function ($scope) {
  	$scope.selFacility = [];
  	
	$scope.facility = [
		'AAA Demo Facility',
		'Bowling Green',
		'Bowling Green Care Center',
		'Bradford Manor',
		'Briarwood Village',
		'Cliveden',
		'Corry Manor',
		'Court House Manor',
		'Crestview Manor',
		'Delmar',
		'Edinboro Manor',
		'Lima',
		'Maplewood',
		'Piqua Manor'
	];

	$scope.example1model = []; 
	$scope.example1data = [{id: 1, label: "David"}, {id: 2, label: "Jhon"}, {id: 3, label: "Danny"}];
	$scope.units = [{
		id: 1,
		label: "Station 1"
	}, {
		id: 2,
		label: "Station 2"
	}, {
		id: 3,
		label: "Station 3"
	}, {
		id: 4,
		label: "Station 4"
	}, {
		id: 5,
		label: "Station 5"
	}, {
		id: 6,
		label: "Station 6"
	}, {
		id: 7,
		label: "Station 7"
	}];

	$scope.selUnits = [];

	$scope.players = [{
		id: 1,
		label: 'Hospice'
	},{
		id: 2,
		label: 'Hospice MA Heavy'
	},{
		id: 3,
		label: 'Insurance'
	},{
		id: 4,
		label: 'MA-Pending 2015'
	},{
		id: 5,
		label: 'MA-Res Care Day'
	},{
		id: 6,
		label: 'MA-Res Care Vent'
	},{
		id: 7,
		label: 'Medicare'
	},{
		id: 8,
		label: 'Private - No Bill'
	},{
		id: 9,
		label: 'Unknown'
	},{
		id: 10,
		label: 'VA'
	}];
	$scope.selPlayer = [];

	$scope.IsShowFilter = true;
	$scope.feedbackStep = 0;

	$scope.chart1Config = {
		options: {
		  chart: {
		      type: 'column'
		  },
		  tooltip: {
		      style: {
		          padding: 10,
		          fontWeight: 'bold'
		      }
		  }
		},
		title: {
	      text: '',
	    },
	    subtitle: {
	      text: ' '
	    },
	    xAxis: {
	      categories: ['05/01/2015', '05/02/2015', '05/03/2015', '05/04/2015', '05/05/2015', '05/06/2015', '05/06/2015', '05/07/2015', '05/08/2015', '05/09/2015', '05/10/2015', '05/11/2015', '05/12/2015'],
	      type: ' ',
	      labels: {
	        rotation: -45
	      }
	    },
	    yAxis: {
	      //min: 0,
	      title: {
	        text: ' '
	      }
	    },
	    legend: {
	      enabled: true,
	    },
	    credits: 'true',
	    plotOptions: {
	      column: {
	        pointPadding: 0.2,
	        borderWidth: 1
	      }
	    },
	    navigation: {
	      buttonOptions: {
	        verticalAlign: 'top',
	        y:-10
	      }
	    },
	    series: [{
	      name: 'Average Current ADl RUGs IV',
	      data: [1.0, 1.5, 2.0, 2.5, 3.0, 4.0, 5.5, 6.5, 7.5, 8.5, 9.5,12.5],
	      color: '#f46f34'
	    }, {
	      name: 'Average Current ADl RUGs III',
	      data: [2.0, 3.2, 4.5, 5.0, 5.6, 5.7, 6.3, 7.0, 8.4, 9.2, 10.2, 13.5],
	      color: '#0074bd'
	    }]
	};

	$scope.chart3Config = {
		options: {
		  chart: {
		      type: 'column'
		  },
		  tooltip: {
		      style: {
		          padding: 10,
		          fontWeight: 'bold'
		      }
		  }
		},
		title: {
	      text: ' ',
	    },
	    subtitle: {
	      text: ' '
	    },
	    xAxis: {
	      categories: ['A(0-5)', 'B(6-10)', 'C(11-15)'],
	      type: ' ',
	      labels: {
	        rotation:0
	      }
	    },
	    yAxis: {
	      //min: 0,
	      title: {
	        text: ' '
	      }
	    },
	    legend: {
	      enabled: true,
	    },
	    credits: 'true',
	    plotOptions: {
	      column: {
	        pointPadding: 0.2,
	        borderWidth: 1
	      }
	    },
	    navigation: {
	      buttonOptions: {
	        verticalAlign: 'top',
	        y:-10
	      }
	    },
	    series: [{
	      name: '05/03/2015',
	      data: [1.0, 1.5, 2.0],
	      color: '#f46f34'

	    }, {
	      name: '30 Days Prior',
	      data: [2.0, 3.2, 4.5],
	      color: '#0074bd'

	    }, {
	      name: '7 Days Prior',
	      data: [2.0, 3.2, 4.5],
	      color: '#1b4283'

	    }]
	};
    
	$scope.chart2Config = {
		options: {
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				margin: [0, 0, 10, 0],
				spacingTop: 35,
				spacingBottom: 5,
				spacingLeft: 0,
				spacingRight: 5,
				spacingTop: 40
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			plotOptions: {
				pie: {
					size: '83%',
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: false,
					showInLegend: true
				}
	    	},
		},
		title: {
	      text: ''
	    },
	    credits: true,
	    navigation: {
	      buttonOptions: {
	        verticalAlign: 'top',
	        y: -35
	      }
	    },
	    legend: {
	      title: {
	        text: 'ADL RUGs IV Distrubution'
	      },
	      enabled: true,
	      verticalAlign: 'bottom'
	    },
	    series: [{
	      type: 'pie',
	      name: 'Page Visits',
	      data: [{
	      	name: 'A',
	      	y: 46,
	      	color: '#f46f34',
	      	sliced: true
	      }, {
	      	name: 'B',
	      	y: 14,
	      	color: '#0074bd'
	      }, {
	      	name: 'C',
	      	y: 40,
	      	color: '#1b4283'
	      }]
	    }]
	};

	$scope.showFilter = function() {
		$scope.IsShowFilter = !$scope.IsShowFilter;
	};

	$scope.showFeedback = function() {
		if($scope.feedbackStep === 3) {
			$scope.feedbackStep = 0;
		} else {
			$scope.feedbackStep++;
		}
	};

	  $scope.today = function() {
		$scope.dt = new Date();
	  };

	  $scope.today();

	  $scope.clear = function() {
	    $scope.dt = null;
	  };

	  $scope.inlineOptions = {
	    customClass: getDayClass,
	    minDate: new Date(),
	    showWeeks: true
	  };

	  $scope.dateOptions = {
	    dateDisabled: disabled,
	    formatYear: 'yy',
	    maxDate: new Date(2020, 5, 22),
	    minDate: new Date(),
	    startingDay: 1
	  };

	  // Disable weekend selection
	  function disabled(data) {
	    var date = data.date,
	      mode = data.mode;
	    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
	  }

	  $scope.toggleMin = function() {
	    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
	    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
	  };

	  $scope.toggleMin();

	  $scope.open1 = function() {
	    $scope.popup1.opened = true;
	  };

	  $scope.open2 = function() {
	    $scope.popup2.opened = true;
	  };

	  $scope.setDate = function(year, month, day) {
	    $scope.dt = new Date(year, month, day);
	  };

	  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	  $scope.format = $scope.formats[0];
	  $scope.altInputFormats = ['M!/d!/yyyy'];

	  $scope.popup1 = {
	    opened: false
	  };

	  $scope.popup2 = {
	    opened: false
	  };

	  var tomorrow = new Date();
	  tomorrow.setDate(tomorrow.getDate() + 1);
	  var afterTomorrow = new Date();
	  afterTomorrow.setDate(tomorrow.getDate() + 1);
	  $scope.events = [
	    {
	      date: tomorrow,
	      status: 'full'
	    },
	    {
	      date: afterTomorrow,
	      status: 'partially'
	    }
	  ];

	  function getDayClass(data) {
	    var date = data.date,
	      mode = data.mode;
	    if (mode === 'day') {
	      var dayToCheck = new Date(date).setHours(0,0,0,0);

	      for (var i = 0; i < $scope.events.length; i++) {
	        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

	        if (dayToCheck === currentDay) {
	          return $scope.events[i].status;
	        }
	      }
	    }

	    return '';
	  }
  });
