(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{403:function(t,e,s){"use strict";s.r(e);var r=s(14),o=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"api-reference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api-reference"}},[t._v("#")]),t._v(" API Reference")]),t._v(" "),e("two-up",{scopedSlots:t._u([{key:"left",fn:function(){return[e("p",[t._v("Directus offers both a "),e("a",{attrs:{href:"https://restfulapi.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RESTful"),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://graphql.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GraphQL"),e("OutboundLink")],1),t._v(" API to manage the data in the database. The API has predictable resource-oriented URLs, relies on standard HTTP status codes, and uses JSON for input and output.")]),t._v(" "),e("p",[t._v("The input/output of the API differs greatly for individual installs, as most of the endpoints will return data that's based on your specific schema.")])]},proxy:!0},{key:"right",fn:function(){return[e("p",[e("strong",[t._v("New to Directus?")])]),t._v(" "),e("p",[t._v("See our "),e("RouterLink",{attrs:{to:"/getting-started/introduction.html"}},[t._v("Getting Started")]),t._v(" guide if this is your first time working with Directus.")],1)]},proxy:!0}])}),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"projects"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#projects"}},[t._v("#")]),t._v(" Projects")]),t._v(" "),e("two-up",{scopedSlots:t._u([{key:"left",fn:function(){return[e("p",[t._v("Directus supports multi-tenancy out of the box. In order to do this, most endpoints will be prefixed with a project key based on the configuration filename.")]),t._v(" "),e("p",[t._v("When installing Directus for the first time, you'll be asked to provide a project key for your project. This is the project key that Directus expects in endpoints that require the "),e("code",[t._v("project")]),t._v(" attribute.")])]},proxy:!0}])},[e("info-box",{attrs:{slot:"right",title:"Example"},slot:"right"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("/:project/items/:collection\n/:project/activity\n/system/info\n")])])])])],1),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),e("two-up",[e("template",{slot:"left"},[e("p",[t._v("By default, all data in the system is off limits for unauthenticated users. To gain access to protected data, you must include an access token with every request.")]),t._v(" "),e("p",[t._v("You pass the token in either the Authorization header, or a query parameter:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Authorization: bearer t0k3n\n?access_token=t0k3n\n")])])]),e("p",[t._v("To learn more, checkout "),e("a",{attrs:{href:"/api/authentication"}},[t._v("the authentication reference")]),t._v(".")])]),t._v(" "),e("info-box",{attrs:{slot:"right",title:"Endpoints"},slot:"right"},[e("div",{staticClass:"language-endpoints extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  POST /:project/auth/authenticate\n  POST /:project/auth/refresh\n  POST /:project/auth/password/request\n  POST /:project/auth/password/reset\n   GET /:project/auth/sso\n   GET /:project/auth/sso/:provider\n   GET /:project/auth/sso/:provider/callback\n")])])])])],2),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"errors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[t._v("#")]),t._v(" Errors")]),t._v(" "),e("two-up",{scopedSlots:t._u([{key:"left",fn:function(){return[e("p",[t._v("Directus relies on standard HTTP status code to indicate the status of a request. Next to that, the API uses numeric codes to avoid the need for translated error messages based on locale. The error property is only present when an error has occurred.")]),t._v(" "),e("p",[e("a",{attrs:{href:"/api/errors"}},[t._v("Click here for the full list of error codes.")])])]},proxy:!0}])}),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"endpoints"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),e("h3",{attrs:{id:"items"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#items"}},[t._v("#")]),t._v(" Items")]),t._v(" "),e("two-up",{scopedSlots:t._u([{key:"left",fn:function(){return[e("p",[t._v("Items are individual pieces of data in your database. They can be anything, from articles, to IoT status checks.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/items.html"}},[t._v("Open items reference")])],1)]},proxy:!0}])},[e("info-box",{attrs:{slot:"right",title:"Endpoints"},slot:"right"},[e("div",{staticClass:"language-endpoints extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("   GET /:project/items/:collection\n   GET /:project/items/:collection/:id\n  POST /:project/items/:collection\n PATCH /:project/items/:collection/:id\nDELETE /:project/items/:collection/:id\n   GET /:project/items/:collection/:id/revisions\n   GET /:project/items/:collection/:id/revisions/:offset\n PATCH /:project/items/:collection/:id/revert/:revision\n")])])])])],1),t._v(" "),e("h3",{attrs:{id:"files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[t._v("#")]),t._v(" Files")]),t._v(" "),e("two-up",{scopedSlots:t._u([{key:"left",fn:function(){return[e("p",[t._v("Files can be saved in any given location. Directus has a powerful assets endpoint that can be used to generate thumbnails for images on the fly.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/files.html"}},[t._v("Open files reference")])],1)]},proxy:!0}])},[e("info-box",{attrs:{slot:"right",title:"Endpoints"},slot:"right"},[e("div",{staticClass:"language-endpoints extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("   GET /:project/files\n   GET /:project/files/:id\n  POST /:project/files\n PATCH /:project/files/:id\nDELETE /:project/files/:id\n   GET /:project/files/:id/revisions\n   GET /:project/files/:id/revisions/:offset\n PATCH /:project/files/:id/revert/:revision\n")])])])])],1),t._v(" "),e("h3",{attrs:{id:"activity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#activity"}},[t._v("#")]),t._v(" Activity")]),t._v(" "),e("two-up",{scopedSlots:t._u([{key:"left",fn:function(){return[e("p",[t._v("All events that happen within Directus are tracked and stored in the activities collection. This gives you full accountability over everything that happens.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/activity.html"}},[t._v("Open activity reference")])],1)]},proxy:!0}])},[e("info-box",{attrs:{slot:"right",title:"Endpoints"},slot:"right"},[e("div",{staticClass:"language-endpoints extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("   GET /:project/activity\n   GET /:project/activity/:id\n  POST /:project/activity/comment\n PATCH /:project/activity/comment/:id\nDELETE /:project/activity/comment/:id\n")])])])])],1),t._v(" "),e("h3",{attrs:{id:"collections"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#collections"}},[t._v("#")]),t._v(" Collections")]),t._v(" "),e("two-up",{scopedSlots:t._u([{key:"left",fn:function(){return[e("p",[t._v("Collections are the individual collections of items, similar to tables in a database.")]),t._v(" "),e("p",[t._v("Changes to collections will alter the schema of the database.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/collections.html"}},[t._v("Open collections reference")])],1)]},proxy:!0}])},[e("info-box",{attrs:{slot:"right",title:"Endpoints"},slot:"right"},[e("div",{staticClass:"language-endpoints extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("   GET /:project/collections\n   GET /:project/collections/:collection\n  POST /:project/collections\n PATCH /:project/collections/:collection\nDELETE /:project/collections/:collection\n")])])])])],1),t._v(" "),e("h3",{attrs:{id:"collection-presets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#collection-presets"}},[t._v("#")]),t._v(" Collection Presets")]),t._v(" "),e("two-up",{scopedSlots:t._u([{key:"left",fn:function(){return[e("p",[t._v("Collection presets hold the preferences of individual users of the platform. This allows Directus to show and maintain custom item listings for users of the app.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/collection-presets.html"}},[t._v("Open collection presets reference")])],1)]},proxy:!0}])},[e("info-box",{attrs:{slot:"right",title:"Endpoints"},slot:"right"},[e("div",{staticClass:"language-endpoints extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("   GET /:project/collection_presets\n   GET /:project/collection_presets/:id\n  POST /:project/collection_presets\n PATCH /:project/collection_presets/:id\nDELETE /:project/collection_presets/:id\n")])])])])],1),t._v(" "),e("h3",{attrs:{id:"extensions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extensions"}},[t._v("#")]),t._v(" Extensions")]),t._v(" "),e("two-up",{scopedSlots:t._u([{key:"left",fn:function(){return[e("p",[t._v("Directus can easily be extended through the addition of several types of extensions, including layouts, interfaces, and modules.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/extensions.html"}},[t._v("Open extensions reference")])],1)]},proxy:!0}])},[e("info-box",{attrs:{slot:"right",title:"Endpoints"},slot:"right"},[e("div",{staticClass:"language-endpoints extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("   GET /interfaces\n   GET /layouts\n   GET /modules\n")])])])])],1),t._v(" "),e("h3",{attrs:{id:"fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fields"}},[t._v("#")]),t._v(" Fields")]),t._v(" "),e("two-up",{scopedSlots:t._u([{key:"left",fn:function(){return[e("p",[t._v("Fields are individual pieces of content within an item. They are mapped to columns in the database.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/fields.html"}},[t._v("Open field reference")])],1)]},proxy:!0}])},[e("info-box",{attrs:{slot:"right",title:"Endpoints"},slot:"right"},[e("div",{staticClass:"language-endpoints extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("   GET /:project/fields\n   GET /:project/fields/:collection\n   GET /:project/fields/:collection/:field\n  POST /:project/fields/:collection\n PATCH /:project/fields/:collection/:field\nDELETE /:project/fields/:collection/:field\n")])])])])],1),t._v(" "),e("h3",{attrs:{id:"folders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#folders"}},[t._v("#")]),t._v(" Folders")]),t._v(" "),e("two-up",{scopedSlots:t._u([{key:"left",fn:function(){return[e("p",[t._v("Folders don't do anything yet, but will be used in the (near) future to be able to group files.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/folders.html"}},[t._v("Open folders reference")])],1)]},proxy:!0}])},[e("info-box",{attrs:{slot:"right",title:"Endpoints"},slot:"right"},[e("div",{staticClass:"language-endpoints extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("   GET /:project/folders\n   GET /:project/folders/:id\n  POST /:project/folders\n PATCH /:project/folders/:id\nDELETE /:project/folders/:id\n")])])])])],1),t._v(" "),e("h3",{attrs:{id:"graphql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#graphql"}},[t._v("#")]),t._v(" GraphQL")]),t._v(" "),e("two-up",{scopedSlots:t._u([{key:"left",fn:function(){return[e("p",[t._v("GraphQL provides a complete description of the data in your API, giving you the power to ask for exactly what you need, and nothing more.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/GraphQL.html"}},[t._v("Open GraphQL reference")])],1)]},proxy:!0}])},[e("info-box",{attrs:{slot:"right",title:"Endpoints"},slot:"right"},[e("div",{staticClass:"language-endpoints extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  POST /:project/gql\n")])])])])],1),t._v(" "),e("h3",{attrs:{id:"mail"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mail"}},[t._v("#")]),t._v(" Mail")]),t._v(" "),e("two-up",{scopedSlots:t._u([{key:"left",fn:function(){return[e("p",[t._v("Send electronic mail through the electronic post.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/mail.html"}},[t._v("Open mail reference")])],1)]},proxy:!0}])},[e("info-box",{attrs:{slot:"right",title:"Endpoints"},slot:"right"},[e("div",{staticClass:"language-endpoints extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  POST /:project/mail\n")])])])])],1),t._v(" "),e("h3",{attrs:{id:"permissions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[t._v("#")]),t._v(" Permissions")]),t._v(" "),e("two-up",{scopedSlots:t._u([{key:"left",fn:function(){return[e("p",[t._v("Permissions control who has access to what and when.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/permissions.html"}},[t._v("Open permissions reference")])],1)]},proxy:!0}])},[e("info-box",{attrs:{slot:"right",title:"Endpoints"},slot:"right"},[e("div",{staticClass:"language-endpoints extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("   GET /:project/permissions\n   GET /:project/permissions/:id\n   GET /:project/permissions/me\n   GET /:project/permissions/me/:collection\n  POST /:project/permissions\n PATCH /:project/permissions/:id\nDELETE /:project/permissions/:id\n")])])])])],1),t._v(" "),e("h3",{attrs:{id:"projects-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#projects-2"}},[t._v("#")]),t._v(" Projects")]),t._v(" "),e("two-up",{scopedSlots:t._u([{key:"left",fn:function(){return[e("p",[t._v("Projects are the individual tenants of the platform. Each project has its own database and data.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/projects.html"}},[t._v("Open projects reference")])],1)]},proxy:!0}])},[e("info-box",{attrs:{slot:"right",title:"Endpoints"},slot:"right"},[e("div",{staticClass:"language-endpoints extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("   GET /:project\n   GET /server/projects\n  POST /server/projects\nDELETE /server/projects/:project\n")])])])])],1),t._v(" "),e("h3",{attrs:{id:"relations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#relations"}},[t._v("#")]),t._v(" Relations")]),t._v(" "),e("two-up",{scopedSlots:t._u([{key:"left",fn:function(){return[e("p",[t._v("What data is linked to what other data. Allows you to assign authors to articles, products to sales, and whatever other structures you can think of.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/relations.html"}},[t._v("Open relations reference")])],1)]},proxy:!0}])},[e("info-box",{attrs:{slot:"right",title:"Endpoints"},slot:"right"},[e("div",{staticClass:"language-endpoints extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("   GET /:project/relations\n   GET /:project/relations/:id\n  POST /:project/relations\n PATCH /:project/relations/:id\nDELETE /:project/relations/:id\n")])])])])],1),t._v(" "),e("h3",{attrs:{id:"revisions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#revisions"}},[t._v("#")]),t._v(" Revisions")]),t._v(" "),e("two-up",{scopedSlots:t._u([{key:"left",fn:function(){return[e("p",[t._v("Revisions are individual changes to items made. Directus keeps track of changes made, so you're able to revert to a previous state at will.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/revisions.html"}},[t._v("Open revisions reference")])],1)]},proxy:!0}])},[e("info-box",{attrs:{slot:"right",title:"Endpoints"},slot:"right"},[e("div",{staticClass:"language-endpoints extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("   GET /:project/revisions\n   GET /:project/revisions/:id\n")])])])])],1),t._v(" "),e("h3",{attrs:{id:"roles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#roles"}},[t._v("#")]),t._v(" Roles")]),t._v(" "),e("two-up",{scopedSlots:t._u([{key:"left",fn:function(){return[e("p",[t._v("Roles are groups of users that share permissions.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/roles.html"}},[t._v("Open roles reference")])],1)]},proxy:!0}])},[e("info-box",{attrs:{slot:"right",title:"Endpoints"},slot:"right"},[e("div",{staticClass:"language-endpoints extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("   GET /:project/roles\n   GET /:project/roles/:id\n  POST /:project/roles\n PATCH /:project/roles/:id\nDELETE /:project/roles/:id\n")])])])])],1),t._v(" "),e("h3",{attrs:{id:"scim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scim"}},[t._v("#")]),t._v(" SCIM")]),t._v(" "),e("two-up",{scopedSlots:t._u([{key:"left",fn:function(){return[e("p",[t._v("Directus partially supports Version 2 of System for Cross-domain Identity Management (SCIM). It is an open standard that allows for the exchange of user information between systems, therefore allowing users to be externally managed using the endpoints described below.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/scim.html"}},[t._v("Open SCIM reference")])],1)]},proxy:!0}])},[e("info-box",{attrs:{slot:"right",title:"Endpoints"},slot:"right"},[e("div",{staticClass:"language-endpoints extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  POST /:project/scim/v2/Users\n   GET /:project/scim/v2/Users\n   GET /:project/scim/v2/Users/:id\n PATCH /:project/scim/v2/Users/:id\n   GET /:project/scim/v2/Groups\n   GET /:project/scim/v2/Groups/:id\n PATCH /:project/scim/v2/Groups/:id\nDELETE /:project/scim/v2/Groups/:id\n")])])])])],1),t._v(" "),e("h3",{attrs:{id:"server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#server"}},[t._v("#")]),t._v(" Server")]),t._v(" "),e("two-up",{scopedSlots:t._u([{key:"left",fn:function(){return[e("p",[t._v("Access to where Directus runs. Allows you to make sure your server has everything needed to run the platform, and check what kind of latency we're dealing with.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/server.html"}},[t._v("Open server reference")])],1)]},proxy:!0}])},[e("info-box",{attrs:{slot:"right",title:"Endpoints"},slot:"right"},[e("div",{staticClass:"language-endpoints extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("   GET /server/info\n   GET /server/ping\n")])])])])],1),t._v(" "),e("h3",{attrs:{id:"settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[t._v("#")]),t._v(" Settings")]),t._v(" "),e("two-up",{scopedSlots:t._u([{key:"left",fn:function(){return[e("p",[t._v("Settings control the way the platform works and acts.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/settings.html"}},[t._v("Open settings reference")])],1)]},proxy:!0}])},[e("info-box",{attrs:{slot:"right",title:"Endpoints"},slot:"right"},[e("div",{staticClass:"language-endpoints extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("   GET /:project/settings\n   GET /:project/settings/:id\n  POST /:project/settings\n PATCH /:project/settings/:id\nDELETE /:project/settings/:id\n")])])])])],1),t._v(" "),e("h3",{attrs:{id:"users"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#users"}},[t._v("#")]),t._v(" Users")]),t._v(" "),e("two-up",{scopedSlots:t._u([{key:"left",fn:function(){return[e("p",[t._v("Users are what gives you access to the data.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/users.html"}},[t._v("Open users reference")])],1)]},proxy:!0}])},[e("info-box",{attrs:{slot:"right",title:"Endpoints"},slot:"right"},[e("div",{staticClass:"language-endpoints extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("   GET /:project/users\n   GET /:project/users/:id\n   GET /:project/users/me\n  POST /:project/users\n PATCH /:project/users/:id\nDELETE /:project/users/:id\n  POST /:project/users/invite\n  POST /:project/users/invite/:token\n PATCH /:project/users/:id/tracking/page\n   GET /:project/users/:id/revisions\n   GET /:project/users/:id/revisions/:offset\n")])])])])],1),t._v(" "),e("h3",{attrs:{id:"utilities"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#utilities"}},[t._v("#")]),t._v(" Utilities")]),t._v(" "),e("two-up",{scopedSlots:t._u([{key:"left",fn:function(){return[e("p",[t._v("Directus comes with various utility endpoints you can use to simplify your development flow.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/api/utilities.html"}},[t._v("Open utilities reference")])],1)]},proxy:!0}])},[e("info-box",{attrs:{slot:"right",title:"Endpoints"},slot:"right"},[e("div",{staticClass:"language-endpoints extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  POST /:project/utils/hash\n  POST /:project/utils/hash/match\n  POST /:project/utils/random/string\n   GET /:project/utils/2fa_secret\n")])])])])],1)],1)}),[],!1,null,null,null);e.default=o.exports}}]);