/*
    Assignment 05

    Name : Poonam Hardik Patel
    Student Id : W0790805
*/

$(document).ready(function () 
{
    // your code here
   
    class ContentItem
    {
        empId;
        name;
        specification;
        category;
   
        constructor(empId, name, specification, category)
        {
            this.empId = empId;
            this.name = name;
            this.specification = specification;
            this.category = category;
        }
   
        updateContentItem(empId, name, specification, category)
        {
            //if ( this.empId == empId && name && specification && category)
            if ( ( this.empId == empId ) 
                && ( this.name != null ) 
                && ( this.specification != null ) 
                && ( this.category != null ) )
            {
                this.empId = empId;
                this.name = name;
                this.specification = specification;
                this.category = category;
            }
        }
           
        toString()
        {
           return $('#content-item-list').append(`<div class="content-item-wrapper">
                    <div id="content-item-${this.empId}">
                        <h2 class="name">${this.name}</h2>
                        <p class="specification">${this.specification}</p>
                        <div class="category">${this.category}</div>
                    </div>
                </div>`);
            }
        }
       
        let content = [
            {
                "empId": 0,
                "name": "Hardik P Patel",
                "specification": "Owner of PHP Enterprice pvt ltd.",
                "category": "Owner"
            },
            {
                "empId": 1,
                "name": "Poonam H Patel",
                "specification": "CEO of PHP Enterprice pvt ltd.",
                "category": "CEO"
            },
            {
                "empId": 2,
                "name": "Neel B Patel",
                "specification": "Manager of PHP Enterprice pvt ltd.",
                "category": "Manager"
            },
                {
                "empId": 3,
                "name": "Bharat C Patel",
                "specification": "Employee of PHP Enterprice pvt ltd.",
                "category": "Employee"
            },
            {
                "empId": 4,
                "name": "Pravina B Patel",
                "specification": "Designer of PHP Enterprice pvt ltd.",
                "category": "Designer"
            }
        ];
   
        $.each(content, function(key, val)
        {
            $('#content-item-list').append(`<div class="content-item-wrapper">
                <div id="content-item-${this.empId}">
                    <h2 class="name">${this.name}</h2>
                    <p class="specification">${this.specification}</p>
                    <div class="category">${this.category}</div>
                </div>
            </div>`);

            $('.content-item-wrapper').css('background-color', 'gray');
            $('.content-item-wrapper').css('border', 'solid 2px red');
            $('.content-item-wrapper').css('width', '70%');
            $('.content-item-wrapper').css('padding', '15px');
            $('.content-item-wrapper').css('margin', 'auto');
            $('.content-item-wrapper').css('marging-top', '15px');
            $('.content-item-wrapper').css('margin-bottom', '15px');

            $('.specification').css('font-weight', 'bold');
            $('.category').css('font-weight', 'bold');
            $('.category').css('text-decoration', 'underline');
        });
        
        $('h1').empty().text("About Stores");
   });
