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
		'Piqua Manor',
		'Pleasant Hill Manor',
		'Shawnee'
	];

	$scope.units = [
		'Station 1',
		'Station 2',
		'Station 3',
		'Station 4',
		'Station 5',
		'Station 6',
		'Station 7'
	];

	$scope.players = [
		'Hospice',
		'Hospice MA Heavy',
		'Insurance',
		'MA-Pending 2015',
		'MA-Res Care Day',
		'MA-Res Care Vent',
		'Medicare',
		'Private - No Bill',
		'Unknown',
		'VA'
	];

	$scope.IsShowFilter = true;
	$scope.feedbackStep = 0;

	$scope.chartConfig = {
	  options: {
	      //This is the Main Highcharts chart config. Any Highchart options are valid here.
	      //will be overriden by values specified below.
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
	  // //The below properties are watched separately for changes.

	  // //Series object (optional) - a list of series using normal Highcharts series options.
	  // series: [{
	  //    data: [10, 15, 12, 8, 7]
	  // }],
	  // //Title configuration (optional)
	  // title: {
	  //    text: 'Hello'
	  // },
	  // //Boolean to control showing loading status on chart (optional)
	  // //Could be a string if you want to show specific loading text.
	  // loading: false,
	  // //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
	  // //properties currentMin and currentMax provided 2-way binding to the chart's maximum and minimum
	  // xAxis: {
	  // currentMin: 0,
	  // currentMax: 20,
	  // title: {text: 'values'}
	  // },
	  // //Whether to use Highstocks instead of Highcharts (optional). Defaults to false.
	  // useHighStocks: false,
	  // //size (optional) if left out the chart will default to size of the div or something sensible.
	  // size: {
	  //  width: 400,
	  //  height: 300
	  // },
	  // //function (optional)
	  // func: function (chart) {
	  //  //setup some logic for the chart
	  // }
	      title: {
      text: ' ',
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
    //tooltip: {
    // pointFormat: 'Visits: <b>{point.y:.1f}</b>'
    // },
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
      data: [1.0, 1.5, 2.0, 2.5, 3.0, 4.0, 5.5, 6.5, 7.5, 8.5, 9.5,12.5]

    }, {
      name: 'Average Current ADl RUGs III',
      data: [2.0, 3.2, 4.5, 5.0, 5.6, 5.7, 6.3, 7.0, 8.4, 9.2, 10.2, 13.5]

    }],

    colors: ['#f46f34', '#0074bd', '#1b4283', '#000000']
	};

	$(function()   {
    	$(".form-multiselect").multiselect(
    	{
    		buttonWidth: '100%'
    	});
	});

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
