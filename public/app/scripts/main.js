var user,
    app = {
    ProductBacklogStories: {},
    Projects: {},
    User: {},
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
  console.log(user);
      user = new app.User.ModelView({
        el: $('.user')
    });
    console.log(user);
    Backbone.Mediator.sub("!user_load", function() {
        var my_project = new app.Projects.CollectionView({
                            el: $(".content")})});

    
});
this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/ProductBacklogStories/ProductBacklogStoriesCollectionTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="backlog-box product">\n        <div class="backlog-box-name">    Sprint\n            <div class="backlog-box-actions">\n                <span class="btn glyphicon glyphicon-play btn-sm">\n                 </span>\n            </div>\n        </div> \n        <ul>\n\n        </ul>\n </div>';

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

this["JST"]["app/scripts/User/UserTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
((__t = ( first_name )) == null ? '' : __t) +
'\n' +
((__t = ( last_name )) == null ? '' : __t) +
'\n';

}
return __p
};
/* ProductBacklogStories */

(function(module) {

    module.Model = Backbone.Model.extend({

        defaults: {
            name: "",
            state: "",
            description: "",
        }

    });

})(app.ProductBacklogStories);
/* ProductBacklogStories */

(function(module) {

    module.Collection = Backbone.Collection.extend({
        model: module.Model,

        url: "",

        initialize: function() {}

    });

})(app.ProductBacklogStories);
/* ProductBacklogStories */

(function(module) {

        module.ModelView = Backbone.View.extend({

                tagName: "li",
                className: "",

                template: JST['app/scripts/ProductBacklogStories/ProductBacklogStoriesTpl.ejs'],   

                initialize: function() {

                },

                events: {},

                subscriptions: {},

                render: function() {
                        this.$el.html(this.template(this.model.toJSON()));
                        return this;
                }

        });

})(app.ProductBacklogStories);
/* ProductBacklogStories */

(function(module) {

        module.CollectionView = Backbone.View.extend({
                stories: [{
                        name: "st1",
                        description: "n/a"
                }, {
                        name: "st2",
                        description: "n/a"
                }, {
                        name: "st3",
                        description: "n/a"
                }, {
                        name: "st4",
                        description: "n/a"

                }, {
                        name: "st44",
                        description: "n/a"
                }, {
                        name: "st45",
                        description: "n/a"
                }, {
                        name: "st66",
                        description: "n/a"
                }, {
                        name: "st77",
                        description: "n/a"

                }],

                template: JST['app/scripts/ProductBacklogStories/ProductBacklogStoriesCollectionTpl.ejs'],

                initialize: function() {
                        this.storyCollection = new module.Collection(this.stories);
                        this.render();
                        return this;
                },

                events: {},

                subscriptions: {},

                render: function() {
                        console.log(this.$el);
                        this.$el.html(this.template());
                        this.storyCollection.each(this.renderOne, this);
                        return this;
                },

                renderOne: function(StoryModel) {
                        var story = new module.ModelView({
                                model: StoryModel
                        });
                        this.$el.find("ul").append(story.render().el);
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
        },

        subscriptions: {
        },  

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
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

