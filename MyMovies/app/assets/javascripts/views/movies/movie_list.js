MyMovie.Views.MovieList = Backbone.View.extend({

	template : JST['movies/movie_list'],

	el : 'div',

	render : function() {
		var that = this;

		this.movies = new MyMovie.Collections.Movies();
		this.movies.fetch({
			success : function() {
				that.$el.html(that.template({
					movies : that.movies.models
				}));
			}
		});

		return this;
	}
}); 