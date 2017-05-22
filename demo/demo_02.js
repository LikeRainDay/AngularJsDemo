/**
 *
 * Created by housh on 2017/5/22.
 */
'use strict';
angular.module('myApp').component('greetUser',{
    template:"Hello,{{ $ctrl.user}}!",
    controller:function GreetUserController(){
        this.user = 'world';
    }
})
angular.module('phonecatApp').component('phoneList',{
    template:
        '<ul><li ng-repeat="phone in $ctrl.phones"><span>{{phone.name}}</span><p>{{phone.snippt}}</p></li>',
    controller:function PhotoListController() {
        this.phones=[
            {
                name: 'Nexus S',
                snippet: 'Fast just got faster with Nexus S.'
            }, {
                name: 'Motorola XOOM™ with Wi-Fi',
                snippet: 'The Next, Next Generation tablet.'
            }, {
                name: 'MOTOROLA XOOM™',
                snippet: 'The Next, Next Generation tablet.'
            }
        ]
    }
})