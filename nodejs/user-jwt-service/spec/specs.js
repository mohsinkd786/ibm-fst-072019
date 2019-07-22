const Jasmine = require('jasmine');
const ConsoleReporter = require('jasmine-console-reporter');
const jasmine = new Jasmine();
const reporter = new ConsoleReporter({
    colors: 1,
    cleanStack: 3,
    verbosity: 4,
    listStyle: 'indent',
    activity: false,
    emoji: true
});
jasmine.addReporter(reporter);
jasmine.showColors(true);
jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.execute();