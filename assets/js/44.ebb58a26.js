(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{375:function(e,t,a){"use strict";a.r(t);var s=a(14),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"setup-development-environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-development-environment"}},[e._v("#")]),e._v(" Setup Development Environment")]),e._v(" "),t("blockquote",[t("p",[e._v("If you would like to make contributions to the Directus codebase then you'll need to install the App and API from source. However, you do not need to do this to build new extensions.")])]),e._v(" "),t("h2",{attrs:{id:"api-source"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api-source"}},[e._v("#")]),e._v(" API Source")]),e._v(" "),t("p",[e._v("In order to work on the API, you'll need to install the source version locally. The application sourcecode is being hosted in the "),t("a",{attrs:{href:"https://github.com/directus/api",target:"_blank",rel:"noopener noreferrer"}},[e._v("directus/api"),t("OutboundLink")],1),e._v(" repo on GitHub.")]),e._v(" "),t("h3",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("ul",[t("li",[e._v("A HTTP Web Server that supports URL rewrites\n"),t("ul",[t("li",[t("em",[e._v("Comes with .htaccess included for Apache")])])])]),e._v(" "),t("li",[e._v("MySQL 5.7+\n"),t("ul",[t("li",[e._v("Database (empty or existing)")]),e._v(" "),t("li",[e._v("Database User (with access to database)")])])]),e._v(" "),t("li",[e._v("PHP 7.2+\n"),t("ul",[t("li",[t("code",[e._v("pdo")]),e._v(" + "),t("code",[e._v("mysql")])]),e._v(" "),t("li",[t("code",[e._v("curl")])]),e._v(" "),t("li",[t("code",[e._v("gd")])]),e._v(" "),t("li",[t("code",[e._v("fileinfo")])]),e._v(" "),t("li",[t("code",[e._v("mbstring")])]),e._v(" "),t("li",[t("code",[e._v("xml")]),e._v(" (Only if you are installing phpunit)")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),t("OutboundLink")],1),e._v(" v8.11.3 or higher (preferably v10.6+)")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git"),t("OutboundLink")],1),e._v(" to fetch the source code from GitHub")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx",target:"_blank",rel:"noopener noreferrer"}},[e._v("Composer"),t("OutboundLink")],1),e._v(" to install dependencies")])]),e._v(" "),t("h3",{attrs:{id:"setup-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-steps"}},[e._v("#")]),e._v(" Setup Steps")]),e._v(" "),t("h4",{attrs:{id:"_1-clone-the-repo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-clone-the-repo"}},[e._v("#")]),e._v(" 1. Clone the repo")]),e._v(" "),t("p",[e._v("Clone the repo by running")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/directus/api.git\n")])])]),t("p",[e._v("OR")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone git@github.com:directus/api.git\n")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Fork")]),e._v(" "),t("p",[e._v("If you want to work on your fork of the project, remember to replace "),t("code",[e._v("directus")]),e._v(" with your GitHub username in the url above")])]),e._v(" "),t("h4",{attrs:{id:"_2-install-the-composer-dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-install-the-composer-dependencies"}},[e._v("#")]),e._v(" 2. Install the Composer dependencies")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("composer")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])]),t("p",[e._v("If you don't want to install any development package use the "),t("code",[e._v("--no-dev")]),e._v(" option.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("composer")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --no-dev\n")])])]),t("h4",{attrs:{id:"_3-create-a-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-create-a-database"}},[e._v("#")]),e._v(" 3. Create a database")]),e._v(" "),t("p",[e._v("On your local server, create a new database to use with the API.")]),e._v(" "),t("h5",{attrs:{id:"demo-sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#demo-sql"}},[e._v("#")]),e._v(" Demo SQL")]),e._v(" "),t("p",[e._v("If you'd rather skip the installer (next step), you can simply import the demo schema file. This file comes with the boilerplate schema as well as some dummy collections, fields, data, and Settings. You can "),t("a",{attrs:{href:"https://github.com/directus/demo-sql",target:"_blank",rel:"noopener noreferrer"}},[e._v("download a demo SQL schema"),t("OutboundLink")],1),e._v(" to skip the API's installation process.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Credentials")]),e._v(" "),t("p",[e._v("If you are skipping the installer and adding the SQL directly to your database, the default login credentials are:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("User:")]),e._v(" "),t("code",[e._v("admin@example.com")])]),e._v(" "),t("li",[t("strong",[e._v("Password:")]),e._v(" "),t("code",[e._v("password")])])])]),e._v(" "),t("h4",{attrs:{id:"_4-config-file-installer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-config-file-installer"}},[e._v("#")]),e._v(" 4. Config File Installer")]),e._v(" "),t("p",[e._v("The API uses a config file to know which database to connect to. Copy or rename the "),t("code",[e._v("/config/api_sample.php")]),e._v(" file to "),t("code",[e._v("/config/api.php")]),e._v(" (default project) and edit the settings as indicated.")]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/advanced/api/standalone.html"}},[e._v("Learn more about configuring the API")])],1),e._v(" "),t("h2",{attrs:{id:"application-source"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#application-source"}},[e._v("#")]),e._v(" Application Source")]),e._v(" "),t("p",[e._v("In order to work on the app, you'll need to install the application locally.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("To quickly debug the application you can use "),t("a",{attrs:{href:"https://next.demo-api.directus.app",target:"_blank",rel:"noopener noreferrer"}},[e._v("our demo API"),t("OutboundLink")],1),e._v(" by authenticating with the credentials: "),t("code",[e._v("admin@example.com")]),e._v(" and "),t("code",[e._v("password")]),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"requirements-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements-2"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("p",[e._v("The application is built with "),t("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js"),t("OutboundLink")],1),e._v(" and heavily relies on "),t("a",{attrs:{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),t("OutboundLink")],1),e._v(" to be bundled / transpiled to browser-usable code. In order to work on Directus, you need "),t("a",{attrs:{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),t("OutboundLink")],1),e._v(" v12.x or higher.")]),e._v(" "),t("p",[e._v("The application source code is being hosted in the "),t("a",{attrs:{href:"https://github.com/directus/app",target:"_blank",rel:"noopener noreferrer"}},[e._v("directus/app"),t("OutboundLink")],1),e._v(" repo on GitHub.")]),e._v(" "),t("h3",{attrs:{id:"steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),t("h4",{attrs:{id:"_1-clone-the-repo-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-clone-the-repo-2"}},[e._v("#")]),e._v(" 1. Clone the repo")]),e._v(" "),t("p",[e._v("Clone the repo by running")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/directus/app.git\n")])])]),t("p",[e._v("OR")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone git@github.com:directus/app.git\n")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Fork")]),e._v(" "),t("p",[e._v("If you want to work on your fork of the project, remember to replace "),t("code",[e._v("directus")]),e._v(" with your GitHub username in the url above.")])]),e._v(" "),t("h4",{attrs:{id:"_2-install-the-dependencies-using-yarn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-install-the-dependencies-using-yarn"}},[e._v("#")]),e._v(" 2. Install the dependencies using Yarn")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])]),t("h4",{attrs:{id:"_3-build-run-the-app"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-build-run-the-app"}},[e._v("#")]),e._v(" 3. Build / run the app")]),e._v(" "),t("p",[e._v("The production version of the application is a static html file that can be hosted on any static file server. In order to build the app for production, run")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" build\n")])])]),t("p",[e._v("To checkout the app itself, you'll need a static file server. Any static file server, like MAMP, local Apache or Caddy, should work. If you don't have a quick server at hand, I recommend using "),t("a",{attrs:{href:"https://www.npmjs.com/package/http-server",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("http-server")]),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Install "),t("code",[e._v("http-server")]),e._v(" globally, run")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" global "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" http-server\n")])])]),t("p",[e._v("When it's installed, you can serve the app by running "),t("code",[e._v("http-server")]),e._v(" from the "),t("code",[e._v("dist")]),e._v(" folder that has been created by the "),t("code",[e._v("build")]),e._v(" command:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" dist\nhttp-server\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Development Mode")]),e._v(" "),t("p",[e._v("If you're actively working on the application, we recommend using the development mode. By using "),t("code",[e._v("yarn serve")]),e._v(" instead of "),t("code",[e._v("yarn build")]),e._v(", the buildchain will launch a local file server and will auto-rebuild the code and auto-refresh the browser on save of a file.")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("API Usage")]),e._v(" "),t("p",[e._v("By default, the "),t("code",[e._v("yarn serve")]),e._v(" command uses the demo API to connect to. If you want to connect to your local API instance for debugging purposes, set the "),t("code",[e._v("API_URL")]),e._v(" environment variable before running "),t("code",[e._v("yarn serve")]),e._v(".")])])])}),[],!1,null,null,null);t.default=r.exports}}]);