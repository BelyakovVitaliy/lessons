const greeter = {
    name: 'Greeter',
    greeting: function (value) {
        console.log(this.name, value);
    }
}

const customBinder = (func, obj, params) => {
    return (args = params) => {
        func.apply(obj, [args]);
    }
} 

const greetingFunction1 = greeter.greeting;
greetingFunction1();                                // undifined
customBinder(greetingFunction1, greeter, 'Hello')(); //Greeter Hello - параметр забиндин

const greetingFunction2 = greeter.greeting;
customBinder(greetingFunction1, greeter)('Hello'); //Greeter Hello - параметр передается при каждом вызове

const greetingFunction3 = greeter.greeting;
greetingFunction3.bind(greeter)
greetingFunction3.bind(greeter, 'Hello')(); //Greeter Hello - параметр забиндин

const greetingFunction4 = greeter.greeting;
greetingFunction4.bind(greeter)
greetingFunction4.bind(greeter)('Hello'); //Greeter Hello - параметр передается при каждом вызове