import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

/*
 * Import needed templates
 */
// general pages
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/about/about.js';
// levels
import '../../ui/pages/level0/level0.js';
import '../../ui/pages/level1/level1.js';
import '../../ui/pages/level2/level2.js';
import '../../ui/pages/level3/level3.js';
import '../../ui/pages/level4/level4.js';
import '../../ui/pages/level5/level5.js';
import '../../ui/pages/level6/level6.js';
import '../../ui/pages/level7/level7.js';
import '../../ui/pages/level8/level8.js';
import '../../ui/pages/level9/level9.js';
import '../../ui/pages/level10/level10.js';
import '../../ui/pages/level11/level11.js';
import '../../ui/pages/level12/level12.js';
import '../../ui/pages/level13/level13.js';
import '../../ui/pages/level14/level14.js';
import '../../ui/pages/level15/level15.js';
import '../../ui/pages/level16/level16.js';
import '../../ui/pages/level17/level17.js';
import '../../ui/pages/level18/level18.js';
import '../../ui/pages/level19/level19.js';
// checkpoints
import '../../ui/pages/checkpoint1/checkpoint1.js';
import '../../ui/pages/checkpoint2/checkpoint2.js';
import '../../ui/pages/checkpoint3/checkpoint3.js';
import '../../ui/pages/checkpoint4/checkpoint4.js';
import '../../ui/pages/checkpoint5/checkpoint5.js';
import '../../ui/pages/checkpoint6/checkpoint6.js';
// world
import '../../ui/pages/comp1/comp1.js';
import '../../ui/pages/world1/world1.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});
FlowRouter.route('/about', {
  name: 'App.about',
  action() {
    BlazeLayout.render('App_body', { main: 'App_about' });
  },
});
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
/*
  Levels
*/
FlowRouter.route('/level0', {
  name: 'Level.0',
  action() {
    BlazeLayout.render('App_body', { main: 'level0', blocks: 'blocks0', 
        title:'title0'});
  },
});
FlowRouter.route('/level1', {
  name: 'Level.1',
  action() {
    BlazeLayout.render('App_body', { main: 'level1', blocks: 'blocks1', 
        title:'title1'});
  },
});
FlowRouter.route('/level2', {
  name: 'Level.2',
  action() {
    BlazeLayout.render('App_body', { main: 'level2', blocks: 'blocks2', 
        title:'title2'});
  },
});
FlowRouter.route('/level3', {
  name: 'Level.3',
  action() {
    BlazeLayout.render('App_body', { main: 'level3', blocks: 'blocks3', 
        title:'title3'});
  },
});
FlowRouter.route('/level4', {
  name: 'Level.4',
  action() {
    BlazeLayout.render('App_body', { main: 'level4', blocks: 'blocks4', 
        title:'title4'});
  },
});
FlowRouter.route('/level5', {
  name: 'Level.5',
  action() {
    BlazeLayout.render('App_body', { main: 'level5', blocks: 'blocks5', 
        title:'title5'});
  },
});
FlowRouter.route('/level6', {
  name: 'Level.6',
  action() {
    BlazeLayout.render('App_body', { main: 'level6', blocks: 'blocks6', 
        title:'title6'});
  },
});
FlowRouter.route('/level7', {
  name: 'Level.7',
  action() {
    BlazeLayout.render('App_body', { main: 'level7', blocks: 'blocks7', 
        title:'title7'});
  },
});
FlowRouter.route('/level8', {
  name: 'Level.8',
  action() {
    BlazeLayout.render('App_body', { main: 'level8', blocks: 'blocks8', 
        title:'title8'});
  },
});
FlowRouter.route('/level9', {
  name: 'Level.9',
  action() {
    BlazeLayout.render('App_body', { main: 'level9', blocks: 'blocks9', 
        title:'title9'});
  },
});
FlowRouter.route('/level10', {
  name: 'Level.10',
  action() {
    BlazeLayout.render('App_body', { main: 'level10', blocks: 'blocks10', 
        title:'title10'});
  },
});
FlowRouter.route('/level11', {
  name: 'Level.11',
  action() {
    BlazeLayout.render('App_body', { main: 'level11', blocks: 'blocks11', 
        title:'title11'});
  },
});
FlowRouter.route('/level12', {
  name: 'Level.12',
  action() {
    BlazeLayout.render('App_body', { main: 'level12', blocks: 'blocks12', 
        title:'title12'});
  },
});
FlowRouter.route('/level13', {
  name: 'Level.13',
  action() {
    BlazeLayout.render('App_body', { main: 'level13', blocks: 'blocks13', 
        title:'title13'});
  },
});
FlowRouter.route('/level14', {
  name: 'Level.14',
  action() {
    BlazeLayout.render('App_body', { main: 'level14', blocks: 'blocks14', 
        title:'title14'});
  },
});
FlowRouter.route('/level15', {
  name: 'Level.15',
  action() {
    BlazeLayout.render('App_body', { main: 'level15', blocks: 'blocks15', 
        title:'title15'});
  },
});
FlowRouter.route('/level16', {
  name: 'Level.16',
  action() {
    BlazeLayout.render('App_body', { main: 'level16', blocks: 'blocks16', 
        title:'title16'});
  },
});
FlowRouter.route('/level17', {
  name: 'Level.17',
  action() {
    BlazeLayout.render('App_body', { main: 'level17', blocks: 'blocks17', 
        title:'title17'});
  },
});
FlowRouter.route('/level18', {
  name: 'Level.18',
  action() {
    BlazeLayout.render('App_body', { main: 'level18', blocks: 'blocks18', 
        title:'title18'});
  },
});
FlowRouter.route('/level19', {
  name: 'Level.19',
  action() {
    BlazeLayout.render('App_body', { main: 'level19', blocks: 'blocks19', 
        title:'title19'});
  },
});

/*
  Checkpoints
*/
FlowRouter.route('/checkpoint1', {
  name: 'Check.1',
  action() {
    BlazeLayout.render('App_body', { main: 'Checkpoint1', checkpoint: 'checkpoint1'});
  },
});
FlowRouter.route('/checkpoint2', {
  name: 'Check.2',
  action() {
    BlazeLayout.render('App_body', { main: 'Checkpoint2', checkpoint: 'checkpoint2'});
  },
});
FlowRouter.route('/checkpoint3', {
  name: 'Check.3',
  action() {
    BlazeLayout.render('App_body', { main: 'Checkpoint3', checkpoint: 'checkpoint3'});
  },
});
FlowRouter.route('/checkpoint4', {
  name: 'Check.4',
  action() {
    BlazeLayout.render('App_body', { main: 'Checkpoint4', checkpoint: 'checkpoint4'});  
  },
});
FlowRouter.route('/checkpoint5', {
  name: 'Checkpoint.5',
  action() {
    BlazeLayout.render('App_body', { main: 'Checkpoint5', checkpoint: 'checkpoint5'});
  },
});
FlowRouter.route('/checkpoint6', {
  name: 'Checkpoint.6',
  action() {
    BlazeLayout.render('App_body', { main: 'Checkpoint', checkpoint: 'checkpoint6'});
  },
});
/*
  Server Worlds
*/
FlowRouter.route('/comp1', {
  name: 'Comp.1',
  action() {
    BlazeLayout.render('App_body', { main: 'comp1', blocks: 'compblocks1'});
  },
});
FlowRouter.route('/world1', {
  name: 'World.1',
  action() {
    BlazeLayout.render('App_body', { main: 'world1' });
  },
});