MyMovie.Views.MovieDetails = Backbone.View.extend({

	template : JST['movies/movie_details'],

	el : '#movies',

	events : {
		"click .edit" : "edit",
		"click .delete" : "remove"
	},

	render : function(options) {
		var that = this;

		this.movie = new MyMovie.Models.Movie({
			id : options.id
		});

		this.movie.fetch({
			success : function() {
				that.$el.html(that.template({
					movie : that.movie
				}));
			}
		});

		return this;
	},

	edit : function() {
		Backbone.history.navigate('movies/' + this.movie.id + '/edit', {
			trigger : true
		});

		return false;
	},

	remove : function() {
		if (confirm('Are you sure?')) {
			$('.delete-movie-form').ajaxSubmit({
				url : this.movie.url(),

				type : 'DELETE',

				data : {
					access_token : access_token
				},

				success : function() {
					Backbone.history.navigate('', {
						trigger : true
					});
				},

				error : function() {
					alert('Movie cannot be deleted');
				}
			});
		}

		return false;
	}
});
