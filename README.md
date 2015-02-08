# node-azure-ci-example
This small project shows how to achieve in easy and fast way a continouts delivery solution with node.js and Azure Web Site. 

The solution is composed of 4 main files:

    * app.js (a small express.js hello world)
    * test.js (just one mocha test, that tests a 200 repsonse from the app root)
    * .deployment (this file contains the command that will be executed by the deployment mechanism on Azure Web Site)
    * deploy.cmd (this is the batch file that will be actually executed)

Pushing this repo on an Azure Web Site (configured to be used with Git as source) will automatically deploy your app if tests are passed.

For more information about how to deploy node.js on Azure Web Site check this [article](http://azure.microsoft.com/en-us/documentation/articles/web-sites-nodejs-develop-deploy-mac/).

All you have to do is to add the Azure Web Site as origin and then push master on it.

Then you should see an output like this:

```console
PS C:\Users\michele\node-azure-ci-example> git push azure master
Password for 'https://piccoloaiutante@test-express.scm.azurewebsites.net:443':
Counting objects: 8, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (7/7), done.
Writing objects: 100% (7/7), 1.43 KiB | 0 bytes/s, done.
Total 7 (delta 1), reused 0 (delta 0)
remote: Updating branch 'master'.
remote: Updating submodules.
remote: Preparing deployment for commit id '44d946b183'.
remote: Running custom deployment command...
remote: Running deployment command...
remote: Handling node.js deployment.
remote: KuduSync.NET from: 'D:\home\site\repository' to: 'D:\home\site\wwwroot'
remote: Copying file: 'LICENSE'
remote: Copying file: 'README.md'
remote: .....
remote: Using start-up script app.js from package.json.
remote: Generated web.config.
remote: The package.json file does not specify node.js engine version constraints.
remote: The node.js application will run with the default node.js version 0.10.32.
remote: npm WARN package.json assert@1.3.0 assert is also the name of a node core module.
remote:
remote: > node-example@1.0.0 test D:\home\site\wwwroot
remote: > mocha
remote:
remote:
remote:
remote:   calling root url
remote:
remote:     v should return 200
remote:
remote: Finished successfully.
remote: Deployment successful.
To https://piccoloaiutante@test-express.scm.azurewebsites.net:443/test-express.git
   c6cb637..44d946b  master -> master
PS C:\Users\michele\node-azure-ci-example>
```
In brief this is what happened:

    * in the first part you have the git pull of the code from the repo 
    * the execution of `.deployment` and `deploy.cmd`
    * the output of the green test runned `calling root url should return 200`
    * because the tests are green the solution is deployed on the new website.


