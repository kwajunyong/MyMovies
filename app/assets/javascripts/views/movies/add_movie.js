MyMovie.Views.AddMovie = Backbone.View.extend({

	template : JST['movies/add_movie'],

	el : 'div',

	events : {
		"click .add" : "add"
	},

	render : function() {
		this.$el.html(this.template);
		return this;
	},

	add : function() {
		$('.add-movie-form').ajaxSubmit({
			url : 'http://cs3213.herokuapp.com/movies.json',

			type : 'POST',

			data : {
				access_token : '04504e105284569ea74030908d006252'
			},

			success : function() {
				Backbone.history.navigate('', {
					trigger : true
				});
			},

			error : function() {
				alert('Unable to add movie');
			}
		});

		return false;
	}
});
