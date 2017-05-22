/**
 *
 * Created by housh on 2017/5/22.
 */
describe('phoneList', function () {
    // Load the module tha contains the 'phoneList' component before each test
    beforEach(module('phonecatApp'));

    //Test the controller
    describe('PhoneListController', function () {
        it('should create a `phones` model with 3 phones',
            inject(function ($componentController) {
                var ctl = $componentController('phoneList');
                expect(ctl.phones.length).tobe(3);
            }));
    });
});
