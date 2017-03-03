require("shelljs/global");

var fileServer = "./node_modules/.bin/http-server";

exec('"./node_modules/.bin/http-server" demo -o -c-1');
console.log(fileServer + ' demo -o -c-1' )