(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{318:function(t,e,a){t.exports=a.p+"assets/img/table-layout.42d8d192.png"},319:function(t,e,a){t.exports=a.p+"assets/img/cards-layout.8bbc4a09.png"},320:function(t,e,a){t.exports=a.p+"assets/img/calendar-layout.23b8aee8.png"},321:function(t,e,a){t.exports=a.p+"assets/img/timeline-layout.a598c2ec.png"},446:function(t,e,a){"use strict";a.r(e);var o=a(14),s=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"layouts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#layouts"}},[t._v("#")]),t._v(" Layouts")]),t._v(" "),e("blockquote",[e("p",[t._v("Layouts are the App's presentation layer for collections. They can be used to browse, visualize, or interact with items at the collection level. Table, Cards, Timeline, Map, Calendar, and Chart are all examples of different layout options.")])]),t._v(" "),e("h2",{attrs:{id:"changing-layouts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changing-layouts"}},[t._v("#")]),t._v(" Changing Layouts")]),t._v(" "),e("p",[t._v('Clicking on a collection from the nav sidebar will take you to a page where you can view its items. Since it works for all types of data, the "Table" layout is used by default, but users can choose any other layout they prefer. To do so, click to expand the Info Sidebar on the right side of the App. At the top of this expanded sidebar you can click on the dropdown to select a new layout.')]),t._v(" "),e("h2",{attrs:{id:"layout-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#layout-options"}},[t._v("#")]),t._v(" Layout Options")]),t._v(" "),e("p",[t._v("Each layout also includes options used for initial setup and style adjustments. These options are visible in the info sidebar, just below the layout chooser. For example, if you're using the default Table layout you'll see options for which fields are visible, field order, and row spacing.")]),t._v(" "),e("h2",{attrs:{id:"layout-preferences"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#layout-preferences"}},[t._v("#")]),t._v(" Layout Preferences")]),t._v(" "),e("p",[t._v("As you configure your layout and its options, your setup will be saved in your user preferences. Next time you go to that page, even if you log out or use a different computer, you'll still see things the same way.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Bookmarking Layouts")]),t._v(" "),e("p",[t._v("You can also create multiple layout configurations (including filters), and easily switch between them, by saving them as bookmarks. "),e("RouterLink",{attrs:{to:"/guides/user-guide.html#bookmarking"}},[t._v("Learn More about Bookmarks")])],1)]),t._v(" "),e("h2",{attrs:{id:"core-layouts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#core-layouts"}},[t._v("#")]),t._v(" Core Layouts")]),t._v(" "),e("h3",{attrs:{id:"table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[t._v("#")]),t._v(" Table")]),t._v(" "),e("p",[t._v("Shows data in columns and rows. You can click each column header to sort by that field and drag columns to resize widths as needed. This is the default layout for all collections since you can always use a table to display data.")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Fields")]),t._v(" — Toggle fields on/off and drag them into a new order")]),t._v(" "),e("li",[e("strong",[t._v("Spacing")]),t._v(" — Changes row density between: Compact (32px), Cozy (40px), and Comfortable (48px)")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(318),alt:"Login"}})]),t._v(" "),e("h3",{attrs:{id:"cards"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cards"}},[t._v("#")]),t._v(" Cards")]),t._v(" "),e("p",[t._v("Optimized for collections with images, this layout lets you select a file field that will be shown as a thumbnail, and other fields to be displayed as text below.")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Sort By")]),t._v(" — The field to sort cards by")]),t._v(" "),e("li",[e("strong",[t._v("Sort Direction")]),t._v(" — The direction for sorting, either ascending or descending")]),t._v(" "),e("li",[e("strong",[t._v("Image Source")]),t._v(" — The file field to use as the thumbnail")]),t._v(" "),e("li",[e("strong",[t._v("Fit")]),t._v(" — Whether to crop (always square) or contain (maintain aspect ratio) the thumbnail")]),t._v(" "),e("li",[e("strong",[t._v("Title")]),t._v(" — The first field to be shown below the the image card")]),t._v(" "),e("li",[e("strong",[t._v("Subtitle")]),t._v(" — The second (subdued) field to be shown below the the image card")]),t._v(" "),e("li",[e("strong",[t._v("Fallback Icon")]),t._v(" — An icon to use when an image is not available")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(319),alt:"Login"}})]),t._v(" "),e("h3",{attrs:{id:"calendar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#calendar"}},[t._v("#")]),t._v(" Calendar")]),t._v(" "),e("p",[t._v("Optimized for dates and datetimes, this layout shows items in a monthly overview.")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Datetime")]),t._v(" — A combined datetime field to use for organizing items in the calendar")]),t._v(" "),e("li",[e("strong",[t._v("Date")]),t._v(" — A date field to be used instead of datetime")]),t._v(" "),e("li",[e("strong",[t._v("Time")]),t._v(" — An optional time field to be used alongside the Date option")]),t._v(" "),e("li",[e("strong",[t._v("Title")]),t._v(" — The field used for the title of the item's event")]),t._v(" "),e("li",[e("strong",[t._v("Color")]),t._v(" — A color field used to show the event as a specific color")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(320),alt:"Login"}})]),t._v(" "),e("h3",{attrs:{id:"timeline"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#timeline"}},[t._v("#")]),t._v(" Timeline")]),t._v(" "),e("p",[t._v("Optimized for dates and datetimes, this layout shows items in a linear timeline view by day.")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Date")]),t._v(" — The date or datetime field used to order items")]),t._v(" "),e("li",[e("strong",[t._v("Title")]),t._v(" — The template string of fields used for the title of the item's event")]),t._v(" "),e("li",[e("strong",[t._v("Content")]),t._v(" — The field used to show the longer content/description of the event")]),t._v(" "),e("li",[e("strong",[t._v("Color")]),t._v(" — A color field used to show the event as a specific color")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(321),alt:"Login"}})]),t._v(" "),e("h2",{attrs:{id:"extension-layouts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extension-layouts"}},[t._v("#")]),t._v(" Extension Layouts")]),t._v(" "),e("p",[t._v("You can also create custom layouts to fit your specific project needs. "),e("RouterLink",{attrs:{to:"/extensions/layouts.html"}},[t._v("Learn more about Layout Extensions")])],1)])}),[],!1,null,null,null);e.default=s.exports}}]);