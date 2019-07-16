$(document).ready(function(){
    var isMobile = 0
    var CalltoAction = 0
    var CalltoActionisShown = 0
    $('#Mobile').hide();
    $('.MobileCalltoAction0').hide();
    $('.MobileCalltoAction1').hide();
    $('.MobileCalltoAction2').hide();
    var pageWidth = $( window ).width()

    console.log(pageWidth);
    if ($(window).width() < 768){
        $('body').css({'background-size': '150rem'});
        $('body').css({'background-position': 'center'});
        isMobile = 1
        console.log(isMobile)
    } else if ($(window).width() < 991){
        $('body').css({'background-size': '295rem'});
        $('body').css({'background-position': 'center'});

        isMobile = 1
        console.log(isMobile)
    } else if ($(window).width() < 1199){
        $('body').css({'background-size': '273rem'});
        $('body').css({'background-position': 'center'});

        isMobile = 1
        console.log(isMobile)

    }else{
        isMobile = 0
    }

    if (isMobile == "1"){
        $('.MailImgBtn').hide();
        $('.LinkedInImgBtn').hide();
        $('.PhoneImgBtn').hide();
        $('.list-group-item').css({
        "display": "unset",
        "font-size": "30px",
        "text-align": "center"
        });
        $('.Contents').css({
        "display": "unset",
        "font-size": "30px",
        "text-align": "center"
        });


        $('#Mobile').show("slow");
        $('.MobileActionMenu').click(function(){
            $("#Mobile").animate({left: "+= 20em"});
            if((CalltoActionisShown == '0') && (CalltoAction =='0')){
                $('.MobileCalltoAction0').show("swing");
                $('.MobileCalltoAction1').show("swing");
                $('.MobileCalltoAction2').show("swing");
                CalltoActionisShown = 1
            }else if ((CalltoActionisShown == '1') && (CalltoAction =='0')){
                $('.MobileCalltoAction0').hide("slow");
                $('.MobileCalltoAction1').hide("slow");
                $('.MobileCalltoAction2').hide("slow");
                CalltoActionisShown = 0
            }
        });






    }







});
