MyMovie.Views.EditMovie = Backbone.View.extend({

	template : JST['movies/edit_movie'],

	el : 'div',

	events : {
		"click .edit" : "edit"
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
		var that = this;

		$('.edit-movie-form').ajaxSubmit({
			url : this.movie.url(),

			type : 'PUT',

			data : {
				access_token : '04504e105284569ea74030908d006252'
			},

			beforeSubmit : function(arr, $form, options) {
				if (arr[2].value == '') {
					arr.splice(2, 1);
				}
			},

			success : function() {
				Backbone.history.navigate('movies/' + that.movie.id, {
					trigger : true
				});
			},

			error : function() {
				alert('Movie cannot be updated');
			}
		});

		return false;
	}
});
