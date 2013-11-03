MyMovie.Views.UserInfo = Backbone.View.extend({

	template : JST['movies/user_info'],

	el : '#user',

	render : function() {
		var that = this;

		$.ajax({
			type: 'GET',
			
			url: 'http://cs3213.herokuapp.com/users/current.json',
			
			data: 'access_token=' + access_token,
			
			cache: false,
            contentType: false,  
            processData: false,
            
            success: function(data) {
            	that.$el.html(that.template({
					user : data
				}));
            }
		});
		
		return this;
	}
}); 