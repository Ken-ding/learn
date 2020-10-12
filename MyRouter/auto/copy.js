const shell = require('shelljs');
const path=require('path');
const root=path.resolve(__dirname,"..")

shell.rm('-rf', `${root}/example/dist`);
shell.cp('-Rf', `${root}/dist`, `${root}/example/html-app/`);