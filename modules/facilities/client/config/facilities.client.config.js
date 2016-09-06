(function () {
  'use strict';

  angular
    .module('facilities')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Lokaler',
      state: 'facilities',
      type: 'dropdown',
      roles: ['admin']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'facilities', {
      title: 'Visa lokaler',
      state: 'facilities.list',
      roles: ['admin']
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'facilities', {
      title: 'Skapa lokal',
      state: 'facilities.create',
      roles: ['admin']
    });
  }
})();
