(function (global) {
    function Greeter(fName, lName, language) {
        return new Greeter.init(fName, lName, language)
    }
    let supportedLangs = ['en', 'es'];
    let greeting = {
        en: 'Hello',
        es: 'Holla'
    }
    let formalgreeting = {
        en: 'Greetings',
        es: 'Saludos'
    }

    Greeter.prototype = {
        log: function (msg) {
            if (console) {
                console.log(msg);
            }
        },
        getGreeting: function () {
            return `${greeting[this.language]} ${this.firstName}`;
        },
        getFormalGreeting: function () {
            return `${formalgreeting[this.language]} ${this.firstName}`;
        },
        getFirstName: function () {
            this.log(`First Name: ${this.firstName}`);
            return this;
        },
        greet: function (formal) {
            let msg;
            if (formal) {
                msg = this.getFormalGreeting();
            } else {
                msg = this.getGreeting();
            }
            this.log(msg);
            return this;
        },
        validateLanguage: function (language) {
            if (supportedLangs.indexOf(language === -1)) {
                throw "Invalid language";
            }
        },
        setLanguage: function (language) {
            this.language = language;
            this.validateLanguage();
            return this;
        }
    };

    Greeter.init = function (fName, lName, language) {
        this.firstName = fName || '';
        this.lastName = lName || '';
        this.language = language || 'en';
    }
    Greeter.init.prototype = Greeter.prototype;

    global.Greeter = global.$G = Greeter;
})(window);