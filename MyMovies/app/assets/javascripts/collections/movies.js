MyMovie.Collections.Movies = Backbone.Collection.extend({
	model : MyMovie.Models.Movie,

	url : 'http://cs3213.herokuapp.com/movies.json'
});
