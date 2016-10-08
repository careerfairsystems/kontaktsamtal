(function () {
  'use strict';

  angular
    .module('meetings')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Meetings',
      state: 'meetings',
      type: 'dropdown',
      roles: ['admin'] 
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'meetings', {
      title: 'List Meetings',
      state: 'meetings.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'meetings', {
      title: 'Create Meeting',
      state: 'meetings.create',
      roles: ['admin']
    });

    // Add the dropdown create multiple meetings
    Menus.addSubMenuItem('topbar', 'meetings', {
      title: 'Create Multiple Meetings',
      state: 'meetings.multiplecreate', 
      roles: ['admin']
    });
    
    // Add the dropdown create multiple meetings
    Menus.addSubMenuItem('topbar', 'meetings', {
      title: 'Generate Schedule',
      state: 'meetings.generateschedule', 
      roles: ['admin']
    });
  }
})();
