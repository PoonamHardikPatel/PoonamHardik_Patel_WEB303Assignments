$(document).ready(function()
{
    getAjax();
    //getJSON();
});  


function getAjax()
{
    $.ajax(
    {
        url: "team.json",
        
        beforeSend: function() 
        {
            $("div#team").html(`<h1>Loading...</h1>`);
        },
            
        error: function(xhr)
        {
            alert("An error occured in Loading data...");
        },
        
        success: function(result)
        {
            setTimeout(() => 
            {
                $("div#team").html("");
                $.each(result, (index, data)=>
                {
                    var name = `<h2>${data.name}</h2>`;
                    var position = `<h5>${data.position}</h5>`;
                    var bio = `<p>${data.bio}</p>`;
                    $("div#team").append(`${name}${position}${bio}`);

                    //$("div#team").append(`<h2>${data.name}</h2><h5>${data.position}</h5><p>${data.bio}</p>`);
                });
            }, 3000);
        }
    });
}


function getJSON()
{
    $.getJSON( "team.json", function( result ) 
    {    
        $.each( result, function( index, data ) 
        {
            var name = `<h2>${data.name}</h2>`;
            var position = `<h5>${data.position}</h5>`;
            var bio = `<p>${data.bio}</p>`;
            $("div#team").append(`${name}${position}${bio}`);

            //$("div#team").append(`<h2>${data.name}</h2><h5>${data.position}</h5><p>${data.bio}</p>`);
        });
    });
}