(function (global, $) {

    var Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    Greetr.prototype = {};

    Greetr.init = function (firstName, lastName, language) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));

/* 
Could you just make Greetr the constructor? Yes. Simpler and works.

Why the extra init indirection?

To hide new from users

To mimic the jQuery $ style

To separate the API function (Greetr) from the real constructor (Greetr.init), giving flexibility later

It’s more of a design choice than a technical requirement.
*/