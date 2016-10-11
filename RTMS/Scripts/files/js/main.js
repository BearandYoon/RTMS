$(function () {
    //BEGIN MENU SIDEBAR
    $('#sidebar').css('min-height', '100%');
    $('#side-menu').metisMenu();

    $(window).bind("load resize", function () {
        if ($(this).width() < 768) {
            $('div.sidebar-collapse').addClass('collapse');
        } else {
            $('div.sidebar-collapse').removeClass('collapse');
            $('div.sidebar-collapse').css('height', 'auto');
        }
    });

    //BEGIN TOPBAR DROPDOWN
    $('.dropdown-slimscroll').slimScroll({
        "height": '250px',
        "wheelStep": 5
    });
    //END TOPBAR DROPDOWN

    //BEGIN CHECKBOX & RADIO
    if($('#demo-checkbox-radio').length <= 0){
        $('input[type="checkbox"]:not(".switch")').iCheck({
            checkboxClass: 'icheckbox_minimal-grey',
            increaseArea: '20%' // optional
        });
        $('input[type="radio"]:not(".switch")').iCheck({
            radioClass: 'iradio_minimal-grey',
            increaseArea: '20%' // optional
        });
    }
    //END CHECKBOX & RADIO

    //BEGIN TOOTLIP
    $("[data-toggle='tooltip'], [data-hover='tooltip']").tooltip();
    //END TOOLTIP

    //BEGIN POPOVER
    $("[data-toggle='popover'], [data-hover='popover']").popover();
    //END POPOVER

    //BEGIN THEME SETTING
    $('#theme-setting > a.btn-theme-setting').click(function(){
        if($('#theme-setting').css('right') < '0'){
            $('#theme-setting').css('right', '0');
        } else {
            $('#theme-setting').css('right', '-250px');
        }
    });

    // Begin Change Theme Color
    var list_style = $('#theme-setting > .content-theme-setting > select#list-style');
    var list_color = $('#theme-setting > .content-theme-setting > ul#list-color > li');
    var style_active, color_active;
    list_color.each(function() {
        if(list_color.hasClass('active')){
            color_active  = list_color.attr('data-color');
        }
    });

    var setTheme = function (style, color) {
        $('#theme-change').attr('href', 'css/themes/'+ style + '/' + color + '.css');
    }
    list_style.on('change', function() {
        setTheme(list_style.val(), color_active);
    });
    list_color.on('click', function() {
        list_color.removeClass("active");
        $(this).addClass("active");
        setTheme(list_style.val(), $(this).attr('data-color'));
    });
    //END THEME SETTING

    //BEGIN FULL SCREEN
    $('.btn-fullscreen').click(function() {

        if (!document.fullscreenElement &&    // alternative standard method
            !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    });
    //END FULL SCREEN

    // BEGIN FORM CHAT
    $('.btn-chat').click(function () {
        if($('#chat-box').is(':visible')){
            $('#chat-form').toggle('slide', {
                direction: 'right'
            }, 500);
            $('#chat-box').hide();
        } else{
            $('#chat-form').toggle('slide', {
                direction: 'right'
            }, 500);
        }
    });
    $('.chat-box-close').click(function(){
        $('#chat-box').hide();
        $('#chat-form .chat-group a').removeClass('active');
    });
    $('.chat-form-close').click(function(){
        $('#chat-form').toggle('slide', {
            direction: 'right'
        }, 500);
        $('#chat-box').hide();
    });

    $('#chat-form .chat-group a').unbind('*').click(function(){
        $('#chat-box').hide();
        $('#chat-form .chat-group a').removeClass('active');
        $(this).addClass('active');
        var strUserName = $('> small', this).text();
        $('.display-name', '#chat-box').html(strUserName);
        var userStatus = $(this).find('span.user-status').attr('class');
        $('#chat-box > .chat-box-header > span.user-status').removeClass().addClass(userStatus);
        var chatBoxStatus = $('span.user-status', '#chat-box');
        var chatBoxStatusShow = $('#chat-box > .chat-box-header > small');
        if(chatBoxStatus.hasClass('is-online')){
            chatBoxStatusShow.html('Online');
        } else if(chatBoxStatus.hasClass('is-offline')){
            chatBoxStatusShow.html('Offline');
        } else if(chatBoxStatus.hasClass('is-busy')){
            chatBoxStatusShow.html('Busy');
        } else if(chatBoxStatus.hasClass('is-idle')){
            chatBoxStatusShow.html('Idle');
        }


        var offset = $(this).offset();
        var h_main = $('#chat-form').height();
        var h_title = $("#chat-box > .chat-box-header").height();
        var top = ($('#chat-box').is(':visible') ? (offset.top - h_title - 40) : (offset.top + h_title - 20));

        if((top + $('#chat-box').height()) > h_main){
            top = h_main - 	$('#chat-box').height();
        }

        $('#chat-box').css({'top': top});

        if(!$('#chat-box').is(':visible')){
            $('#chat-box').toggle('slide',{
                direction: 'right'
            }, 500);
        }
    });
    // END FORM CHAT

    //BEGIN PORTLET
    $(".portlet").each(function(index, element) {
        var me = $(this);
        $(">.portlet-header>.tools>i", me).click(function(e){
            if($(this).hasClass('fa-chevron-up')){
                $(">.portlet-body", me).slideUp('fast');
                $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
            }
            else if($(this).hasClass('fa-chevron-down')){
                $(">.portlet-body", me).slideDown('fast');
                $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
            }
            else if($(this).hasClass('fa-cog')){
                //Show modal
            }
            else if($(this).hasClass('fa-refresh')){
                //$(">.portlet-body", me).hide();
                $(">.portlet-body", me).addClass('wait');

                setTimeout(function(){
                    //$(">.portlet-body>div", me).show();
                    $(">.portlet-body", me).removeClass('wait');
                }, 1000);
            }
            else if($(this).hasClass('fa-times')){
                me.remove();
            }
        });
    });
    //END PORTLET

    //BEGIN BACK TO TOP
    $(window).scroll(function(){
        if ($(this).scrollTop() < 200) {
            $('#totop') .fadeOut();
        } else {
            $('#totop') .fadeIn();
        }
    });
    $('#totop').on('click', function(){
        $('html, body').animate({scrollTop:0}, 'fast');
        return false;
    });
    //END BACK TO TOP

    //BEGIN CHECKBOX TABLE
    $('.checkall').on('ifChecked ifUnchecked', function(event) {
        if (event.type == 'ifChecked') {
            $(this).closest('table').find('input[type=checkbox]').iCheck('check');
        } else {
            $(this).closest('table').find('input[type=checkbox]').iCheck('uncheck');
        }
    });
    //END CHECKBOX TABLE

    $('.option-demo').hover(function() {
        $(this).append("<div class='demo-layout animated fadeInUp'><i class='fa fa-magic mrs'></i>Demo</div>");
    }, function() {
        $('.demo-layout').remove();
    });
    $('#header-topbar-page .demo-layout').live('click', function() {
        var HtmlOption = $(this).parent().detach();
        $('#header-topbar-option-demo').html(HtmlOption).addClass('animated flash').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass('animated flash');
        });
        $('#header-topbar-option-demo').find('.demo-layout').remove();
        return false;
    });
    $('#title-breadcrumb-page .demo-layout').live('click', function() {
        var HtmlOption = $(this).parent().html();
        $('#title-breadcrumb-option-demo').html(HtmlOption).addClass('animated flash').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass('animated flash');
        });
        $('#title-breadcrumb-option-demo').find('.demo-layout').remove();
        return false;
    });

	$(document).on("click",".btn-add-blk", function(){
		$("#add-blk").toggle("slow");
	});
	$(document).on("click","#add-blk .btn-close", function(){
		$("#add-blk").toggle("slow");
	});	
	//  code for right side partation
    $(document).on("click","#right-side-btn", function(){
        $("#side-baord").toggle("slow")
        //$("#add-filter .panel").toggle("slow");
        $("#right-dashboard").toggleClass("col-md-9").toggleClass("col-md-12");
        $(window).resize();
    });
    
// code ends
	$(document).on("click",".btn-add-filter", function(){
		$("#add-filter").toggle("slow")
		//$("#add-filter .panel").toggle("slow");
		$("#dashboard-data").toggleClass("col-md-9").toggleClass("col-md-12");
		$(window).resize();
	});
	$(document).on("click","#add-filter .btn-close", function(){
		$("#add-filter").toggle("slow");
		//$("#add-filter .panel").toggle("slow");
		$("#dashboard-data").toggleClass("col-md-9").toggleClass("col-md-12");
		$(window).resize();
	});	
		
	$(document).on("click","#help-feedback.unopen h3", function(){
		$(this).find("a").show();
		$("#help-feedback ul").show("");
		$("#help-feedback").addClass("open");
		$(".welcome-msg").hide("");
	});
	
	$(document).on("click","#help-feedback.open h3", function(){
		$(this).find("a").hide();
		$("#help-feedback ul").hide();
		$("#help-feedback").removeClass("open");
		$(".feedback-form").hide();
		$(".welcome-msg").hide();
	});
	
	$(document).on("click","#help-feedback ul li a", function(){
		$("#help-feedback ul").hide("");
		$(".feedback-form").show("");
	});
	
	$(document).on("click",".feedback-form .btn", function(){
		//$(".feedback-form").hide("");
		$(".welcome-msg").show();
	});
	
	
	
	
	var dateStr = new Date();
	$('.datetime-picker input').datetimepicker({autoclose: true, defaultDate: dateStr});
	$('.datetime-picker i').click(function(){
		$(this).parents(".datetime-picker").find("input").focus();
	});
	$(".form-multiselect").multiselect({buttonWidth: '100%'});
});

(function( $ ) {
	$.widget( "custom.combobox", {
		_create: function() {
			this.wrapper = $( "<div>" )
			.addClass( "custom-combobox input-group")
			.insertAfter( this.element );
			this.element.hide();
			this._createAutocomplete();
			this._createShowAllButton();
		},
		_createAutocomplete: function() {
			var selected = this.element.children( ":selected" ),
			value = selected.val() ? selected.text() : "";
			this.input = $( "<input>" )
			.appendTo( this.wrapper )
			.val( value )
			.attr( "title", "" )
			.addClass( "form-control" )
			.autocomplete({
				delay: 0,
				minLength: 0,
				source: $.proxy( this, "_source" )
			})
			.tooltip({
				tooltipClass: "ui-state-highlight"
			});
			this._on( this.input, {
				autocompleteselect: function( event, ui ) {
					ui.item.option.selected = true;
					this._trigger( "select", event, {
					item: ui.item.option
				});
			},
			autocompletechange: "_removeIfInvalid"
			});
		},
		_createShowAllButton: function() {
			var input = this.input,
			wasOpen = false;
			$("<a><i class='fa fa-caret-down'></i>")
			.attr( "tabIndex", -1 )
			//.attr( "title", "Show All Items" )
			.tooltip()
			.appendTo( this.wrapper )
			
			.removeClass( "ui-corner-all" )
			.addClass( "custom-combobox-toggle ui-corner-right" )
			.mousedown(function() {
				wasOpen = input.autocomplete( "widget" ).is( ":visible" );
			})
			.click(function() {
			input.focus();
			// Close if already visible
			if ( wasOpen ) {
				return;
			}
			// Pass empty string as value to search for, displaying all results
			input.autocomplete( "search", "" );
			});
		},
		_source: function( request, response ) {
			var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
			response( this.element.children( "option" ).map(function() {
			var text = $( this ).text();
			if ( this.value && ( !request.term || matcher.test(text) ) )
			return {
			label: text,
			value: text,
			option: this
			};
			}) );
		},
		_removeIfInvalid: function( event, ui ) {
		// Selected an item, nothing to do
		if ( ui.item ) {
		return;
		}
		// Search for a match (case-insensitive)
		var value = this.input.val(),
		valueLowerCase = value.toLowerCase(),
		valid = false;
		this.element.children( "option" ).each(function() {
		if ( $( this ).text().toLowerCase() === valueLowerCase ) {
		this.selected = valid = true;
		return false;
		}
		});
		// Found a match, nothing to do
		if ( valid ) {
		return;
		}
		// Remove invalid value
		this.input
		.val( "" )
		.attr( "title", value + " didn't match any item" )
		.tooltip( "open" );
		this.element.val( "" );
		this._delay(function() {
		this.input.tooltip( "close" ).attr( "title", "" );
		}, 2500 );
		this.input.autocomplete( "instance" ).term = "";
		},
		_destroy: function() {
		this.wrapper.remove();
		this.element.show();
		}
	});
})( jQuery );
$(function() {
	$(".form-combobox").combobox();
});

$(document).on("change", function(){
	$(".form-combobox").combobox();	
});
