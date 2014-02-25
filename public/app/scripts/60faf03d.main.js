var user,
    app = {
    ProductBacklogStories: {},
    Projects: {},
    User: {},
    SprintBacklogStories: {},
    empty: {}
};

$(function() {
    'use strict';

    $.ajaxSetup({
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            // 'X-CSRF-Token': '<%= form_authenticity_token.to_s %>'
        }
    });

    user = new app.User.ModelView({
        el: $('.user')
    });
	
    console.log(user);
    Backbone.Mediator.sub("!user_load", function() {
        var my_project = new app.Projects.CollectionView({
                            el: $(".content")})});

    var product_backlog_stories = new app.ProductBacklogStories.CollectionView({
          el: $(".content")
        }),
 
	sprint_backlog_stories = new app.SprintBacklogStories.CollectionView({
          el: $(".content")
        });
});

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/ProductBacklogStories/ProductBacklogStoriesCollectionTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="backlog-box product">\r\n        <div class="backlog-box-name">   ProductBacklog\r\n            <div class="backlog-box-actions">\r\n            </div>\r\n        </div> \r\n        <ul>\r\n\r\n        </ul>\r\n </div>';

}
return __p
};

this["JST"]["app/scripts/ProductBacklogStories/ProductBacklogStoriesTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
((__t = ( name )) == null ? '' : __t);

}
return __p
};

this["JST"]["app/scripts/Projects/ProjectsCollectionTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
};

this["JST"]["app/scripts/Projects/ProjectsTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p class="name"> Title ' +
((__t = ( title )) == null ? '' : __t) +
' </p>\r\n<p> Description ' +
((__t = ( description )) == null ? '' : __t) +
' </p>';

}
return __p
};

this["JST"]["app/scripts/ScrumPage/ScrumPageTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\t<div class = "container">\n\t\t\t\t<div class = "row">\t\t\t\t\t\n\t\t\t\t\t<div class = "col-md-12">\n\t\t\t\t\t\t<div id = "mypanel" class = "panel panel-primary">\n\t\t\t\t\t\t\t<ul class = "nav nav-tabs nav-justified">\n\t\t\t\t\t\t\t\t<li id = "planning"><a href = "">Planning</a></li>\n\t\t\t\t\t\t\t\t<li id = "scrumboard"><a href = "">Scrum Board</a></li>\n\t\t\t\t\t\t\t\t<li id = "stat"><a href = "">Statistics</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>';

}
return __p
};

this["JST"]["app/scripts/SprintBacklogStories/SprintBacklogStoriesCollectionTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="sprint backlog-box">\r\n\t<div class="backlog-box-name"> SprintBacklog\r\n\t  <div class="backlog-box-actions">\r\n\t    <span class="btn glyphicon glyphicon-play btn-sm">\r\n\t\t</span>\r\n\t  </div>\r\n\t</div>\r\n\t<table>\r\n\t\r\n\t</table>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/SprintBacklogStories/SprintBacklogStoriesTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td>' +
((__t = ( model.title )) == null ? '' : __t) +
'</td>\r\n<td>' +
((__t = ( model.owner )) == null ? '' : __t) +
'</td>\r\n';

}
return __p
};

this["JST"]["app/scripts/Test1/Test1CollectionTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>Your content here.</p>\r\n\r\n';

}
return __p
};

this["JST"]["app/scripts/Test1/Test1Tpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>Your content here.</p>\r\n\r\n';

}
return __p
};

this["JST"]["app/scripts/Test2/Test2CollectionTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>Your content here.</p>\r\n\r\n';

}
return __p
};

this["JST"]["app/scripts/Test2/Test2Tpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>Your content here.</p>\r\n\r\n';

}
return __p
};

this["JST"]["app/scripts/User/UserTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
((__t = ( first_name )) == null ? '' : __t) +
'\r\n' +
((__t = ( last_name )) == null ? '' : __t) +
'\r\n';

}
return __p
};
/* ProductBacklogStories */

(function(module) {

    module.Model = Backbone.Model.extend({

        defaults: {
		 	title: "",
		 	description: "",
		    project_id: "",
			state: ""
        }

    });

})(app.ProductBacklogStories);
/* ProductBacklogStories */

(function(module) {

    module.Collection = Backbone.Collection.extend({
        model: module.Model,

        //url: "stories",

        initialize: function(id) {
		  this.url = "projects/" + id + "/stories";
		  this.fetch();
		   }

    });

})(app.ProductBacklogStories);
/* ProductBacklogStories */

(function(module) {

        module.ModelView = Backbone.View.extend({

		
	            model: module.Model,
                tagName: "li",
                className: "",

                template: JST['app/scripts/ProductBacklogStories/ProductBacklogStoriesTpl.ejs'],   

                initialize: function() {

                },

                events: {
			      "click" : "moveToSprintstory"
				},

                subscriptions: {},

                render: function() {
                      this.$el.html(this.template({name:this.model.toJSON().title}));
                      return this;
                },
	
			moveToSprintstory: function() {
			  Backbone.Mediator.pub("ProductBacklogStory:moveProductstoryToSprintstory", this.model);
			  this.$el.remove();
			  this.model.destroy();	
			}	

        });

})(app.ProductBacklogStories);
/* ProductBacklogStories */

(function(module) {

        module.CollectionView = Backbone.View.extend({
          
     		  template: JST['app/scripts/ProductBacklogStories/ProductBacklogStoriesCollectionTpl.ejs'],

                initialize: function() {
                },

                events: {},

                subscriptions: {
				  "ScrumPage:PlanBoardSelected" : "choosePlanningBoard"
				},
				
			choosePlanningBoard: function(project_id) {
			  this.$el.append(this.template());
			  this.collection = new module.Collection(project_id),	
			  this.collection.on('sync', this.render, this);  
			},

                render: function() {
                   this.collection.each(this.renderOne, this);
                   return this;
                },

                renderOne: function(StoryModel) {
                        var story = new module.ModelView({
                                model: StoryModel
                        });

                        this.$el.find(".backlog-box ul").append(story.render().el);
                }

        });

})(app.ProductBacklogStories);
/* Projects */

(function(module) {
        
	module.Model = Backbone.Model.extend({	     
		 
		 defaults: {
		 	title: "",
		 	description: ""
         }		 
		 
	});

})(app.Projects);

/* Projects */

(function(module) {
        
	module.Collection = Backbone.Collection.extend({	     
		 model: module.Model,
		 
		// url: "projects/for/3",
		//url: "projects/for/" + user.getId(),

		initialize: function() {
		// 	this.fetch();
		this.url = "projects/for/" + user.getId();
		 	console.log(user.getId()); 
        }		 
		 
	});

})(app.Projects);


/* Projects */

(function(module) {

    module.ModelView = Backbone.View.extend({

        tagName: "div",
        
        className: "box",        
        
        template: JST['app/scripts/Projects/ProjectsTpl.ejs'],        
        
        initialize: function() {
        },

        events: {
		  "click":"pubChoosenProjectId"
        },

        subscriptions: {
        },  

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
		
		pubChoosenProjectId: function() {
			$(".content").html("");
			Backbone.Mediator.pub("ScrumPage:PlanBoardSelected", this.model.id)
        }
     
    });

})(app.Projects);

// /* Projects */

(function(module) {
        
    module.CollectionView = Backbone.View.extend({
     
    template: JST['app/scripts/Projects/ProjectsCollectionTpl.ejs'],        
        
    initialize: function() {
        this.projectsCollection = new module.Collection();
        this.listenTo(this.projectsCollection, "sync", this.render);
        this.projectsCollection.fetch();
    },

    events: {
    },

    subscriptions: {
    },  

    render: function() {
        //user.getId();
        this.$el.html(this.template());
        this.projectsCollection.each(this.renderOne, this);
        
        return this;
    },

    renderOne: function(ProjectModel) {
        var project = new module.ModelView({
            model: ProjectModel
        });
        this.$el.append(project.render().el);
    }       
     
});

})(app.Projects);
/* User */

(function(module) {
        
	module.Model = Backbone.Model.extend({	     
		
		url: 'users/3.json',
		
		defaults: {
		 	first_name: '',
		 	last_name: ''
         },

		initialize: function () {
			this.fetch();			
		}
	});

})(app.User);
/* User */

(function(module) {
        
        module.ModelView = Backbone.View.extend({            
      
        template: JST['app/scripts/User/UserTpl.ejs'],

        model: new module.Model(),        
                
        initialize: function() {
            this.model.on('sync', this.render, this);
            this.model.on('sync', function() {
                Backbone.Mediator.pub("!user_load");
            }, this);
        },

        events: {
        },

        subscriptions: {
        },      

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            console.log("render ", this.model.toJSON());
            return this;
        },

        getId: function() {
            return this.model.get("id");
        }               
                 
        });

})(app.User);


/* SprintBacklogStories */

(function(module) {
        
	module.Model = Backbone.Model.extend({	     
		 
		 defaults: {
		   title: "",
		   description: "",
		   sprint_id: ""
		 //project_id: ""       need?
         } 
 
	});

})(app.SprintBacklogStories);

/* SprintBacklogStories */

(function(module) {
        
	module.Collection = Backbone.Collection.extend({	     
		 model: module.Model,
		 
		 url: '', 

         initialize: function() {
	     }	 
		 
	});

})(app.SprintBacklogStories);


/* SprintBacklogStories */

;(function(module) {
        
	module.ModelView = Backbone.View.extend({	     

		tagName: "tr",
        className: "",
    
        template: JST['app/scripts/SprintBacklogStories/SprintBacklogStoriesTpl.ejs'],        
 		
		initialize: function() {
        },

        events: {

        },

        subscriptions: {

        },	

        render: function() {
		  this.$el.html(this.template({model:this.model.toJSON()}));
    	  return this;
        }

    })
	
})(app.SprintBacklogStories);

/* SprintBacklogStories */

(function(module) {
        
	module.CollectionView = Backbone.View.extend({	    
   	
        template: JST['app/scripts/SprintBacklogStories/SprintBacklogStoriesCollectionTpl.ejs'],  
		
		initialize: function() {
		  this.collection = new module.Collection();
        },
		
        events: {
        },

        subscriptions: {
		  "ProductBacklogStory:moveProductstoryToSprintstory" : "moveToSprintstory",
		  "ScrumPage:PlanBoardSelected" : "choosePlanningBoard"
		//subscribe on Yura's event "choose tab" -> render
		//on other clear?
        },
		
        choosePlanningBoard: function() {
		  this.render();
        },
		
        render: function() {
          this.$el.append(this.template());
		  return this;
        },
		
        renderOne: function(story_model) {
		  var story = new module.ModelView({ model: story_model});
          this.$el.find(".sprint.backlog-box table").append(story.render().el);
		  return this;
        },

		moveToSprintstory: function(product_story_model) {
		  this.collection.add(product_story_model.toJSON());
		  console.log(this.collection.toJSON());
		  this.renderOne(product_story_model);
        }		
		 
	});

})(app.SprintBacklogStories);


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
