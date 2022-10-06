// WEB303 Assignment 2

$(document).ready(function()
{    
    $("section#content-wrapper a#prospect").click(function()
    {      
        $("section#content-wrapper div#content").load("prospect.html", function(responseTxt1, prospect, xhr)
        {
            if(prospect == "success")
            {
                $("#content").fadeIn(2000);
            }
        });
    });


    $("section#content-wrapper a#convert").click(function()
    {
        $("section#content-wrapper div#content").load("convert.html", function(responseTxt2, convert, xhr)
        {
            if(convert == "success") 
            {
                $("#content").fadeIn(2000);
            }
        });
    });


    $("section#content-wrapper a#retain").click(function()
    {
        $("section#content-wrapper div#content").load("retain.html", function(responseTxt3, retain, xhr)
        {
            if(retain == "success") 
            {
                $("#content").fadeIn(2000);
            }
        });      
    });
});