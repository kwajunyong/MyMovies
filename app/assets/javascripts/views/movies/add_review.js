MyMovie.Views.AddReview = Backbone.View.extend({

	template : JST['movies/add_review'],

	el : '#addReview',

	events : {
		"click .add" : "add"
	},

	render : function(options) {
		this.movie_id = options.id;
	
		this.$el.html(this.template({
			id: options.id
		}));
		
		return this;
	},

	add : function() {
		var that = this;
		
		$('.add-review-form').ajaxSubmit({
			url : 'http://cs3213.herokuapp.com/movies/' + that.movie_id + '/reviews.json',

			type : 'POST',

			data : {
				access_token : access_token
			},

			success : function() {
				Backbone.history.navigate('#/movies/' + that.movie_id, {
					trigger : true
				});
			},

			error : function() {
				alert('Unable to add review');
			}
		});

		return false;
	}
});
