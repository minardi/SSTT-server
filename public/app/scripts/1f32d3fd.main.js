

var app = {
                  ScrumPage: {},
                  empty: {}
               };

$(function () {
    'use strict';    
	var scrumView = new app.ScrumPage.ModelView({el: $('#in')});
});

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/ScrumPage/ScrumPageTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\t<div class = "container">\n\t\t\t\t<div class = "row">\t\t\t\t\t\n\t\t\t\t\t<div class = "col-md-12">\n\t\t\t\t\t\t<div id = "mypanel" class = "panel panel-primary">\n\t\t\t\t\t\t\t<ul class = "nav nav-tabs nav-justified">\n\t\t\t\t\t\t\t\t<li id = "planning"><a href = "#">Planning</a></li>\n\t\t\t\t\t\t\t\t<li id = "scrumboard"><a href = "#">Scrum Board</a></li>\n\t\t\t\t\t\t\t\t<li id = "stat"><a href = "#">Statistics</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>';

}
return __p
};
/* ScrumPage */

(function(module) {
        
	module.Model = Backbone.Model.extend({	     
		 
		 defaults: {
         }		 
		 
	});

})(app.ScrumPage);

/* ScrumPage */

(function(module) {
        
	module.ModelView = Backbone.View.extend({	     
		
    template: JST['app/scripts/ScrumPage/ScrumPageTpl.ejs'],        
 		
	//template: _.template($('#scrum-board').html()),
	
	initialize: function() {
		this.render();
		this.showPlan();
	},
	
	events: {
		'click #planning': 'showPlan',
		'click #scrumboard': 'showScrum',
		'click #stat': 'showStat'
	},
	
	subscriptions: {
		//'some_channel': 'render';
	},
	
	render: function() {
		this.$el.html(this.template());
		return this;
	},
	
	showPlan: function() {
		var ProductBacklogStory = new app.ProductBacklogStory.CollectionView({el: $(".content")});
		var SprintBacklogStory = new app.SprintBacklogStory.CollectionView({el: $(".content")});
		Backbone.Mediator.publish('ScrumPage:PlanBoardSelected', $('#tab-plan'));
	},
	
	showScrum: function() {
		Backbone.Mediator.publish('ScrumPage:ScrumBoardSelected', $('#tab-scrum'));
	},
	
	showStat: function() {
		Backbone.Mediator.publish('ScrumPage:StatBoardSelected', $('#tab-stat'));
	}
		 
	});

})(app.ScrumPage);
