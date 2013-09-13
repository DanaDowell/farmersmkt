(function() {

    var clientFarmers = new Usergrid.Client({
        orgName:'danafalana',
        appName:'sandbox'
    });

    var farmers_veggies = new Usergrid.Collection( { 
        'client':clientFarmers, 
        'type':'farmer_veggies'
    });

    var farmers_recipes = new Usergrid.Collection( { 
        'client':clientFarmers, 
        'type':'farmer_recipes'
    });
    function loadProduce () {
        
        farmers_veggies.fetch( function () {
                
                while ( farmers_veggies.hasNextEntity() ) {
                   
                    var record_veggie = farmers_veggies.getNextEntity();
                    var record_produce = record_veggie.get('produceTitle');
                    var record_code = record_veggie.get('produceCode');
                    console.log(record_code);
                    getRecipes(record_code);
                   //console.log(hecka);
                    //console.log(record_produce);
                    //var runRecipes = getRecipes(record_code);
                    var html = '<div data-role="collapsible" data-inset="false" class="produceItem"><h3 class="'+record_code+'">'+record_produce;
                            html += '</h3>';
                            //do a loop for all recipes with this record_code
                            //html += '<div data-role="collapsible" data-collapsed="true"><a onClick="getRecipes(\''+record_code+'\')" rel="external" href="'
                            //html += '">';
                            html += '</div>';
 
                   //remember use UUID TO CONNECT STUFF
                   
                   //console.log(hecka.record_link);
                   $( '#produceList' ).append(html);
                   //getRecipes(record_code);     
                };

                // Re-apply jQuery Mobile styles
                $( '#produceList' ).collapsibleset( 'refresh' );
            },

            // Failure Callback
            function () { alert('read failed'); }
        );
    };

    function getRecipes (produce_code) {
        farmers_recipes.qs = { 'limit': 20,
            'ql': 'select * where ingredients.'+produce_code+'="true"'
        };
//IS THIS QUERY WORKING?**************
        farmers_recipes.fetch(//network call
            //success callback 
            function() {
                console.log(produce_code);
console.log(farmers_recipes.length);

            //select * from farmers_recipes where record_code = true
            while ( farmers_recipes.hasNextEntity() ) {
                alert('has next');
                var record_recipe = farmers_recipes.getNextEntity();
                var record_title = record_recipe.get('recipeTitle');
                var record_link = record_recipe.get('recipeLink');
                console.log(record_recipe);
            };
            //$( '#produceList' ).collapsibleset( 'refresh' );
           // return record_link;

            });
        };
/*
$("#set div:jqmData(role='collapsible')").each(function () {
  $(this).bind('expand', function() { 
    if($(this).find('li').length < 1) {
      // do ajax call here to get data
      $(this).find('ul').append(items).listview('refresh');
    }
  });
});
$('#page #set li').live('click',function () {
  alert('Go to item');
});
*/

    $(function() {
        loadProduce();

//        $('.produceItem h3 a span').bind('click', function(){
    //$( ".selector" ).trigger( "expand" );
/*    $('.produceItem').bind('expand', function(){
        console.log('expand');
            alert('hi');
            var record_code = this.parent().attr('class');
            var runRecipes = getRecipes(record_code);
        });
*/        
    });
})();