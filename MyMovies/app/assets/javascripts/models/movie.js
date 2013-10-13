MyMovie.Models.Movie = Backbone.Model.extend({
	urlRoot: 'http://cs3213.herokuapp.com/movies/',
	
	url: function () {
	  return 'http://cs3213.herokuapp.com/movies/' + this.id + '.json';
	}
});
