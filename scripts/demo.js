require("shelljs/global");

var fileServer = "./node_modules/.bin/http-server";

exec('"./node_modules/.bin/http-server" demo -p 8181 -o -c-1');
console.log(fileServer + ' demo -o -c-1' )
