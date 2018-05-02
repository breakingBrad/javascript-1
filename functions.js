'use strict'; 

function helloWorld() {
    console.log('Hello, World!');
    
};

helloWorld()

function greeting(name) {
    blah = 'assigned';
    console.log('Hello, '+ name + '!');
};
greeting('Taylor');
greeting('Brad');
greeting('et al.');

function makeGreeting(name) {
    return 'Hello, ' + name + '!';
};

var bradGreeting = makeGreeting('Brad');

bradGreeting;

function makeIntlGreeting(name, lang /*, ...args*/){
    // console.log(arguments, 'foo', 'bar', 'etc.')
    // console.log(args);
    if (lang == 'en') {
        let englishGreeting = 'Hello, ' + name + '!';
        return englishGreeting;
    }
    else if (lang == 'sp' || lang == 'es'){
        return 'Hola, ' + name + '!';
    }
    else if (lang == 'ru'){
        return 'Privyet, ' + name + '!';
    };
    return 'This kind of greeting hasn\'t been implemented yet'
    
};

    // secondIntlGreeting();

    // function secondIntlGreeting() {
    // console.log(name, lang);
    // };

var name = 'Brad'

console.log(makeIntlGreeting(name, 'en'));
console.log(makeIntlGreeting(name, 'es'));
console.log(makeIntlGreeting(name, 'sp'));
console.log(makeIntlGreeting(name, 'ru'));
console.log(makeIntlGreeting(name, 'jp'));


blah