MyMovie.Routers.MovieRouter = Backbone.Router.extend({
	initialize : function() {
		this.movieList = new MyMovie.Views.MovieList();
		this.userInfo = new MyMovie.Views.UserInfo();
		this.movieDetails = new MyMovie.Views.MovieDetails();
		this.movieReviews = new MyMovie.Views.MovieReviews();
		this.addReview = new MyMovie.Views.AddReview();
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
		if (access_token) {
			this.userInfo.render();
		}
		
		this.movieList.render();
	},

	movie : function(id) {
		this.movieDetails.render({
			id : id
		});
		
		this.movieReviews.render({
			id : id
		});
		
		this.addReview.render({
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
