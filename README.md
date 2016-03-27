# Basic Seed (12)
## Based on [Rob Wormald](https://gist.github.com/robwormald/429e01c6d802767441ec)
#### up to date with angular2@2.0.0-beta.12
<pre><code>
$ npm init -y
$ npm install --save-dev jspm
$ jspm init   // 7 x OK + typescript
$ jspm install angular2 zone.js reflect-metadata
 
@edit system.config:
    System.config({
        baseURL": "/",
        defaultJSExtensions": true,
        transpiler": "typescript",
            typescriptOptions":{
            module":"commonjs",
            emitDecoratorMetadata": true
        }, 
        packages: {
            app: {
                main: "app",
                defaultExtension: "ts" 
            }
        },    
        ...
        paths: {
            "github:*": "jspm_packages/github/*",
            "npm:*": "jspm_packages/npm/*",
        ...
    });    

@create file structure and files
    index.html 
    /app
        app.html
        app.ts
            
@edit index.html
@edit app.ts
@edit app.html
</code></pre>
* run code with live-server
## new since beta.09
* app.ts

<pre><code>
    //import 'angular2/bundles/angular2-polyfills.js'; // ==> loaded via script in index.html
    //import 'zone.js';
    //import 'reflect-metadata';
</code></pre> 
 
* index.html:

<pre><code>
    &lt;script src="jspm_packages/npm/angular2@2.0.0-beta.12/bundles/angular2-polyfill.js">&lt;/script>
    &lt;script> System.import('app'); &lt;/script>
</code></pre>

