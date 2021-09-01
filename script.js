var mojModul = angular.module('app', []);

mojModul.controller('mainController', function ($scope) {
    $scope.treeData = [
        {
            name: 'e2e',
            visible:true,
            children: [
                { name: 'e2e.script.tests.ts' } 
            ]
        },
        {
            name: 'node_modules',
            visible:true,
            children: [
                { name: 'e2e.script.tests.ts' }
            ]
        },
        {
            name: 'src',
            visible:true,
            children: [
                { 
                    name: 'app',
                    children: [
                        { 
                            name: 'treeview',
                            children: [
                                { name: 'treeview.component.css'},
                                { name: 'treeview.component.html'},
                                { name: 'treeview.component.spec.ts'},
                                { name: 'treeview.component.ts'},
                                { name: 'treeview.module.ts'},
                            ]
                        },
                        { name: 'app.component.css'},
                        { name: 'app.component.html'},
                        { name: 'app.component.spec.ts'},
                        { name: 'app.component.ts'},
                        { name: 'app.module.ts'},
                    ]
                }
            ]
        }
    ];
    $scope.expand = function (data) {
        for (var child of data.children) {
            child.visible = !child.visible;
        }
    }
});