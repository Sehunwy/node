function Hello() {
    var name;
    this.setName = function (names) {
        name = names;
    };
    this.sayHello = function () {
        console.log("Hello " + name)
    }
}
module.exports = Hello;