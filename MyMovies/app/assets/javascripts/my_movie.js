window.MyMovie = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var movieRouter = new MyMovie.Routers.MovieRouter();
	Backbone.history.start();
  }
};

$(document).ready(function(){
  MyMovie.initialize();
});