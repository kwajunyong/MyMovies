MyMovie.Views.MovieReviews = Backbone.View.extend({

	template : JST['movies/movie_reviews'],

	el : '#reviews',
	
	events : {
		"click .delete" : "remove"
	},
	
	render : function(options) {
		var that = this;
		
		this.movie_id = options.id;
		
		this.reviews = new MyMovie.Collections.Reviews();
		this.reviews.url = 'http://cs3213.herokuapp.com/movies/' + this.movie_id + '/reviews.json';
		
		this.reviews.fetch({
			success : function() {
				that.$el.html(that.template({
					reviews : that.reviews.models
				}));
			}
		});

		return this;
	},
	
	remove : function() {
		var that = this;
	
		if (confirm('Are you sure?')) {
			$('.delete-review-form').ajaxSubmit({
				url : 'http://cs3213.herokuapp.com/movies/' + that.movie_id + '/reviews/' + $('#review').attr('value') + '.json',

				type : 'DELETE',

				data : {
					access_token : access_token
				},

				success : function() {
					Backbone.history.navigate('#/movies/' + that.movie_id, {
						trigger : true
					});
				},

				error : function() {
					alert('Review cannot be deleted');
				}
			});
		}

		return false;
	}
}); 