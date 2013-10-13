MyMovie.Routers.MovieRouter = Backbone.Router.extend({
	initialize : function() {
		this.movieList = new MyMovie.Views.MovieList();
		this.movieDetails = new MyMovie.Views.MovieDetails();
		this.addMovie = new MyMovie.Views.AddMovie();
		this.editMovie = new MyMovie.Views.EditMovie();
	},

	routes : {
		"" : "movies",
		"movies" : "movies",
		"movies/:id" : "movie",
		"new" : "newMovie",
		"movies/:id/edit" : "editMovie"
	},

	movies : function() {
		this.movieList.render();
	},

	movie : function(id) {
		this.movieDetails.render({
			id : id
		});
	},

	newMovie : function() {
		this.addMovie.render();
	},

	editMovie : function(id) {
		this.editMovie.render({
			id : id
		});
	},
});
