$(document).ready(function(){
    var Eshow = 0
    var EisShown= 0
    var Cshow = 0
    var CisShown= 0
    var Edshow = 0
    var EdisShown= 0
    var Hshow = 0
    var HisShown= 0
    var pageWidth = $( window ).width()
    var pageHeight = $(window).height() - 200



    $(".MainPage").css({
        "width": pageWidth + "px",
    });
    $("#Experience").css({
        "height": pageHeight + "px"
    });


    $('#Experience').hide();
    $('#Courses').hide();
    $('#Education').hide();
    $('#Hobbies').hide();

    //Experience Show Switch
    $('.Experience').click(function(){
        $('#Courses').hide("slow");
        $('#Education').hide("slow");
        $('#Hobbies').hide("slow");
        CisShown = 0
        EdisShown = 0
        HisShown = 0
        if ((Eshow == '0') && (EisShown == '0')){
            $('#Experience').show("swing");
            console.log(Eshow)
            EisShown = 1
            console.log(EisShown)
    }
        else if ((Eshow == '0') && (EisShown =='1')){
            $('#Experience').hide("slow");
            EisShown = 0
        }
    });

    //Courses Show switch
$('.Courses').click(function(){
    $('#Experience').hide("slow");
    $('#Education').hide("slow");
    $('#Hobbies').hide("slow");
    EisShown = 0
    EdisShown = 0
    HisShown = 0
    if ((Cshow == '0') && (CisShown == '0')){
        $('#Courses').show("swing");
        console.log(Cshow)
        CisShown = 1
        console.log(CisShown)


    }
    else if ((Cshow == '0') && (CisShown =='1')){
        $('#Courses').hide("slow");
        CisShown = 0
        }
    });

//Education Show switch
    $('.Education').click(function(){
        $('#Experience').hide("slow");
        $('#Courses').hide("slow");
        $('#Hobbies').hide("slow");
        EisShown = 0
        CisShown = 0
        HisShown = 0
        if ((Edshow == '0') && (EdisShown == '0')){
            $('#Education').show("swing");
            console.log(Edshow)
            EdisShown = 1
            console.log(EdisShown)
        }
        else if ((Edshow == '0') && (EdisShown =='1')){
            $('#Education').hide("slow");
            EdisShown = 0
        }
    });
    //Hobbies Show switch
        $('.Hobbies').click(function(){
            $('#Experience').hide("slow");
            $('#Courses').hide("slow");
            $('#Education').hide("slow");
            EisShown = 0
            CisShown = 0
            EdisShown = 0
            if ((Hshow == '0') && (HisShown == '0')){
                $('#Hobbies').show("swing");
                console.log(Hshow)
                HisShown = 1
                console.log(HisShown)
            }
            else if ((Hshow == '0') && (HisShown =='1')){
                $('#Hobbies').hide("slow");
                HisShown = 0
            }
        });








});
