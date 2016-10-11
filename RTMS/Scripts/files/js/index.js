$(function () {
  $('#columnchart').parents('div.panel-body').block({
    message: '<i class="fa fa-spinner fa-2x fa-spin"></i>',
    css: { background: 'none !inportant',backgroundColor: 'transparent', color:'white', border:0 }
  });
  $('#columnchart').highcharts({
    chart: {
      type: 'column',
      //spacingBottom:0,
      marginTop: 35,
      //marginBottom:0
    },
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
  });
  setTimeout(function() {
    $('#columnchart').parents('div.panel-body').unblock();
    $(window).resize();
  }, 2000);

  $('#columnchart2').parents('div.panel-body').block({
    message: '<i class="fa fa-spinner fa-2x fa-spin"></i>',
    css: { background: 'none !inportant',backgroundColor: 'transparent', color:'white', border:0 }
  });
  $('#columnchart2').highcharts({
    chart: {
      type: 'column',
      //spacingBottom:0,
      marginTop: 35,
      //marginBottom:0
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
      name: '05/03/2015',
      data: [1.0, 1.5, 2.0]

    }, {
      name: '30 Days Prior',
      data: [2.0, 3.2, 4.5]

    }, {
      name: '7 Days Prior',
      data: [2.0, 3.2, 4.5]

    }],

    colors: ['#f46f34', '#0074bd', '#1b4283', '#000000']
  });
  setTimeout(function() {
    $('#columnchart2').parents('div.panel-body').unblock();
    $(window).resize();
  }, 2000);


  $('#piechart').parents('div.panel-body').block({
    message: '<i class="fa fa-spinner fa-2x fa-spin"></i>',
    css: { background: 'none !inportant',backgroundColor: 'transparent', color:'white', border:0 }
  });
  $('#piechart').highcharts({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      margin: [0, 0, 10, 0],
      spacingTop: 35,
      spacingBottom: 5,
      spacingLeft: 0,
      spacingRight: 5
      //spacingTop: 40,
    },
    title: {
      text: ' '
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    credits: true,
    navigation: {
      buttonOptions: {
        verticalAlign: 'top',
        y: -35
      }
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
      data: [
        ['A', 46],
        ['B', 14],
        ['C', 40]
      ]
    }],
    colors: ['#f46f34', '#0074bd', '#1b4283', '#000000'],
  });
  setTimeout(function() {
    $('#piechart').parents('div.panel-body').unblock();
    $(window).resize();
  }, 2000);
  var panelList = $('#draggablePanelList');

  panelList.sortable({
    handle: '.panel-heading',
    update: function() {
      $('.dragitem', panelList).each(function(index, elem) {
        var $listItem = $(elem),
          newIndex = $listItem.index();
      });
    }
  });


});
function startTour() {
  var tour = introJs()
  tour.setOption('tooltipPosition', 'auto');
  tour.setOption('positionPrecedence', ['left', 'right', 'bottom', 'top'])
  tour.start()
}
$(window).load(function(){
  //introJs().start();
  startTour();
});

$(function () {
    //BEGIN TO-DO-LIST
    $('.todo-list').slimScroll({
        "width": '100%',
        "height": '250px',
        "wheelStep": 5
    });
    $( ".sortable" ).sortable();
    $( ".sortable" ).disableSelection();
    //END TO-DO-LIST


    //BEGIN CHAT FORM
    $('.chat-scroller').slimScroll({
        "width": '100%',
        "height": '270px',
        "wheelStep": 5,
        "scrollTo": "100px"
    });
    $('.chat-form input#input-chat').on("keypress", function(e){

        var $obj = $(this);
        var $me = $obj.parents('.portlet-body').find('ul.chats');

        if (e.which == 13) {
            var content = $obj.val();

            if (content !== "") {
                $me.addClass(content);
                var d = new Date();
                var h = d.getHours();
                var m = d.getMinutes();
                if (m < 10) m = "0" + m;
                $obj.val(""); // CLEAR TEXT ON TEXTAREA

                var element = "";
                element += "<li class='in'>";
                element += "<img class='avatar' src='https://s3.amazonaws.com/uifaces/faces/twitter/kolage/48.jpg'>";
                element += "<div class='message'>";
                element += "<span class='chat-arrow'></span>";
                element += "<a class='chat-name' href='#'>Admin &nbsp;</a>";
                element += "<span class='chat-datetime'>at July 6, 2014" + h + ":" + m + "</span>";
                element += "<span class='chat-body'>" + content + "</span>";
                element += "</div>";
                element += "</li>";

                $me.append(element);
                var height = 0;
                $me.find('li').each(function(i, value){
                    height += parseInt($(this).height());
                });

                height += '';
                //alert(height);
                $('.chat-scroller').slimScroll({
                    scrollTo: height
                });
            }
        }
    });
    $('.chat-form span#btn-chat').on("click", function(e){

        e.preventDefault();
        var $obj = $(this).parents('.chat-form').find('input#input-chat');
        var $me = $obj.parents('.portlet-body').find('ul.chats');
        var content = $obj.val();

        if (content !== "") {
            $me.addClass(content);
            var d = new Date();
            var h = d.getHours();
            var m = d.getMinutes();
            if (m < 10) m = "0" + m;
            $obj.val(""); // CLEAR TEXT ON TEXTAREA

            var element = "";
            element += "<li class='in'>";
            element += "<img class='avatar' src='https://s3.amazonaws.com/uifaces/faces/twitter/kolage/48.jpg'>";
            element += "<div class='message'>";
            element += "<span class='chat-arrow'></span>";
            element += "<a class='chat-name' href='#'>Admin &nbsp;</a>";
            element += "<span class='chat-datetime'>at July 6, 2014" + h + ":" + m + "</span>";
            element += "<span class='chat-body'>" + content + "</span>";
            element += "</div>";
            element += "</li>";

            $me.append(element);
            var height = 0;
            $me.find('li').each(function(i, value){
                height += parseInt($(this).height());
            });
            height += '';

            $('.chat-scroller').slimScroll({
                scrollTo: height
            });
        }

    });
    //END CHAT FORM

    //BEGIN COUNTER FOR SUMMARY BOX
    counterNum($(".profit h4 span:first-child"), 189, 112, 1, 30);
    counterNum($(".income h4 span:first-child"), 636, 812, 1, 50);
    counterNum($(".task h4 span:first-child"), 103, 155 , 1, 100);
    counterNum($(".visit h4 span:first-child"), 310, 376, 1, 500);
    function counterNum(obj, start, end, step, duration) {
        $(obj).html(start);
        setInterval(function(){
            var val = Number($(obj).html());
            if (val < end) {
                $(obj).html(val+step);
            } else {
                clearInterval();
            }
        },duration);
    }
    //END COUNTER FOR SUMMARY BOX

});

