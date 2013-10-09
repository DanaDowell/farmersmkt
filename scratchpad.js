movie model
actor model(?) or actorArray
movie collection
movie view
movies view 

new MovieModel = Backbone.extend.model {
	title
	actor
}
function to create movieModels from the elements of the json file of movies 
movieModel = new MovieModel {
	title.json
	for each actor {
	actorArray.push(actor.json)
	}
	or do a model & collection for Actor and nest it here?
}

new MovieCollection = Backbone.extend.collection {
	load all the movieModels created above into this collection;
	or do you create the movie models here by calling the json file?
}
movieView = Backbone.extend.View {
	movieModel display <h3>title</h3>
	for each actorArray<ul><li>actor[]</li></ul>
}
moviesView = Backbone.extend.View {
	show all the movieViews there are by looping through ... the json file again?
	loop through the movieCollection to show each movieView that exists
	for each movieView in movieCollection display movieView 
}