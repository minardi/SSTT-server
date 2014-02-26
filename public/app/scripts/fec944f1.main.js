var user,
    app = {
    User: {},
    Projects: {},
    ScrumPage: {},
    ProductBacklogStories: {},
    SprintBacklogStories: {},
	ScrumPage:{},
    Projectinfo: {},
    empty: {}
};

$(function() {
    'use strict';

    user = new app.User.ModelView({
        el: $('.user')
    });
    
    Backbone.Mediator.sub("!user_load", function() {
        var my_project = new app.Projects.CollectionView({
            el: $(".b-main")
        })
    });

	var SSTT = {
        scrum_page: new app.ScrumPage.ModelView({
            el: $(".b-main")
        }),
        product_backlog: new app.ProductBacklogStories.CollectionView(),
        sprint_backlog: new app.SprintBacklogStories.CollectionView(),
        project_info: new app.Projectinfo.ModelView({
            el: $(".b-sidebar")
        })
    };

});
this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/ProductBacklogStories/ProductBacklogStoriesCollectionTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="backlog-box product">\r\n    <div class="backlog-box-name">   \r\n        ProductBacklog\r\n        <div class="backlog-box-actions">\r\n        </div>\r\n    </div> \r\n    <div class="story-list">\r\n    </div>\r\n </div>';

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

this["JST"]["app/scripts/Projectinfo/ProjectinfoTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="title">Info</div>\r\n<div class="info">\r\n  <ul class="list-unstyled">\r\n    <li>Name: ' +
((__t = ( project.title )) == null ? '' : __t) +
'</li>\r\n    <li>Description: ' +
((__t = ( project.description )) == null ? '' : __t) +
'</li>\r\n    <li>DateStart: ' +
((__t = ( project.start )) == null ? '' : __t) +
'</li>\r\n    <li>DateFinal: ' +
((__t = ( project.finish )) == null ? '' : __t) +
'</li>\r\n   </ul>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/Projects/ProjectsCollectionTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="title projects" >\r\n    My Projects\r\n    <div class="actions">\r\n        <span class="btn btn-default glyphicon glyphicon-plus">\r\n        </span>\r\n    </div>\r\n</div>\r\n\r\n<div class="content projects" >\r\n   \r\n</div>';

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
__p += '<div class="scam-page-header nav">\r\n    <div class="col-xs-4 tab" id="planning">Planning</div>\r\n    <div class="col-xs-4 tab" id="scrumboard">Scrum Board</div>\r\n    <div class="col-xs-4 tab" id="stat">Statistics</div>\r\n</div>\r\n\r\n<div class="content" id="ScrumPage">\r\n</div>\r\n';

}
return __p
};

this["JST"]["app/scripts/SprintBacklogStories/SprintBacklogStoriesCollectionTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="backlog-box sprint">\r\n    <div class="backlog-box-name"> \r\n        SprintBacklog\r\n        <div class="backlog-box-actions">\r\n            <span class="btn glyphicon glyphicon-play btn-sm">\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <div class="story-list">\r\n    </div>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/SprintBacklogStories/SprintBacklogStoriesTpl.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
((__t = ( model.title )) == null ? '' : __t) +
'\r\n<br>\r\n' +
((__t = ( model.owner )) == null ? '' : __t) +
'\r\n';

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
         
        initialize: function() {
            this.model = new module.Model();
            this.model.on('sync', this.render, this);
            
            this.model.on('sync', function() {
                Backbone.Mediator.pub("!user_load");
            }, this);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        getId: function() {
            return this.model.get("id");
        }               
             
    });

})(app.User);


/* Projects */

(function(module) {
        
	module.Model = Backbone.Model.extend({	     
		 
		 defaults: {
		 	title: "",
		 	description: "",
		 	owner: "",
		 	start: "",
		 	finish: ""
         }		 
		 
	});

})(app.Projects);

/* Projects */

(function(module) {
        
    module.Collection = Backbone.Collection.extend({

        model: module.Model,
         
        initialize: function() {
            this.url = "projects/for/" + user.getId();
        }        
         
    });

})(app.Projects);


/* Projects */

(function(module) {

    module.ModelView = Backbone.View.extend({

        tagName: "div",
        
        className: "box",        
        
        template: JST['app/scripts/Projects/ProjectsTpl.ejs'],        
        
        events: {
            "dblclick": "selectProject",
            "click": "getProjectInfo"
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        selectProject: function() {

            Backbone.Mediator.pub("Project:Selected", this.model.id);
        },
        
        getProjectInfo: function() {
            Backbone.Mediator.pub("Projects:getInfo", this.model);   
        }

    });

})(app.Projects);

// /* Projects */

(function(module) {
        
    module.CollectionView = Backbone.View.extend({
     
        template: JST['app/scripts/Projects/ProjectsCollectionTpl.ejs'],        
            
        initialize: function() {
            this.projectsCollection = new module.Collection();
            this.projectsCollection.fetch();
            this.listenTo(this.projectsCollection, "sync", this.render);
        },

        subscriptions: {
            "Project:Selected": "hide"
        },

        render: function() {
            this.$el.html(this.template());
            this.projectsCollection.each(this.renderOne, this);
            return this;
        },

        renderOne: function(projectModel) {
            var project = new module.ModelView({
                model: projectModel
            });
            this.$el.find(".content").append(project.render().el);
        },

        hide: function() {
            this.$el.addClass("hiddenProjects");
        }
     
    });

})(app.Projects);
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

        initialize: function(project_id) {
            this.url = "projects/" + project_id + "/stories";
            //изменить руты
            this.fetch();
        }

    });

})(app.ProductBacklogStories);
/* ProductBacklogStories */

(function(module) {

    module.ModelView = Backbone.View.extend({

        model: module.Model,
        tagName: "div",
        className: "story-box",

        template: JST['app/scripts/ProductBacklogStories/ProductBacklogStoriesTpl.ejs'],

        events: {
        "click" : "moveToSprintstory"
        },

        subscriptions: {},

        render: function() {
        this.$el.html(this.template({name:this.model.toJSON().title}));
        return this;
        },

        moveToSprintstory: function() {
        Backbone.Mediator.pub("Story:moveToSprint", this.model);
        this.$el.remove();
    }

    });

})(app.ProductBacklogStories);
/* ProductBacklogStories */

(function(module) {

    module.CollectionView = Backbone.View.extend({
      
        template: JST['app/scripts/ProductBacklogStories/ProductBacklogStoriesCollectionTpl.ejs'],

        initialize: function() {
            Backbone.Mediator.sub("ScrumPage:PlanningBoardSelected", this.initProductBacklog, this);
        },

        subscriptions: {
            // "ScrumPage:PlanningBoardSelected": "initProductBacklog",
        },

        initProductBacklog: function(el_content, project_id) {
            this.setElement(el_content);
            this.collection = new module.Collection(project_id);
            this.collection.on('sync', this.render, this);
        },

        render: function() {
            this.$el.append(this.template());
            this.collection.each(this.renderOne, this);
            return this;
        },

        renderOne: function(StoryModel) {
            var story = new module.ModelView({
                    model: StoryModel
            });
            this.$el.find(".product .story-list").append(story.render().el);

        }

    });

})(app.ProductBacklogStories);
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

        tagName: "div",
        className: "story-box",
    
        template: JST['app/scripts/SprintBacklogStories/SprintBacklogStoriesTpl.ejs'],        
        
        initialize: function() {
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
            Backbone.Mediator.sub("ScrumPage:PlanningBoardSelected", this.initSprintBacklog, this);
        },

        subscriptions: {
            "Story:moveToSprint": "moveToSprintstory",
        },

        initSprintBacklog: function(el_content) {
            this.setElement(el_content);
            this.render();
        },

        render: function() {
            this.$el.append(this.template());
            return this;
        },

        renderOne: function(story_model) {
            var story = new module.ModelView({model: story_model});

            this.$el.find(".sprint .story-list").append(story.render().el);
            return this;
        },

        moveToSprintstory: function(product_story_model) {
            this.collection.add(product_story_model.toJSON());
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

        project_id: "",

        template: JST["app/scripts/ScrumPage/ScrumPageTpl.ejs"],
        
        events: {
            "click #planning": "showPlanning",
            "click #scrumboard": "showScrum",
            "click #stat": "showStat"
        },

        subscriptions: {
            "Project:Selected": "renderDefaultTab"
        },
        
        renderDefaultTab: function(project_id) {
            this.project_id = project_id;
            this.render();
            this.showPlanning();
        },
        
        render: function() {
            this.$el.append(this.template());
            return this;
        },
        
        showPlanning: function() {
            this.$el.find("#ScrumPage").html("");
            Backbone.Mediator.pub("ScrumPage:PlanningBoardSelected", this.$el.find("#ScrumPage"), this.project_id);
        },

        showScrum: function() {
            Backbone.Mediator.pub("ScrumPage:ScrumBoardSelected", $("#ScrumPage"));
        },

        showStat: function() {
            Backbone.Mediator.pub("ScrumPage:StatBoardSelected", $("#ScrumPage"));
        }
        
    });
})(app.ScrumPage);

/* Projectinfo */

(function(module) {
        
	module.Model = Backbone.Model.extend({	     
		 
		 defaults: {
		 	title: "",
		 	description: "",
		 	owner: "",
		 	start: "",
		 	finish: ""
         }		 
		 
	});

})(app.Projectinfo);

/* Projectinfo */

(function(module) {
        
	module.ModelView = Backbone.View.extend({	     
		
        template: JST['app/scripts/Projectinfo/ProjectinfoTpl.ejs'],        
 		
	  initialize: function() {
        },

        events: {
        },

        subscriptions: {
          "Projects:getInfo": "showProjectInfo"
        },

        showProjectInfo: function(project_model) {
          this.project = project_model;
          this.render();
        },	

        render: function() {
          this.$el.html(this.template({project:this.project.toJSON()}));
          return this;
        }		
		 
	});

})(app.Projectinfo);
