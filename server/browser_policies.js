Meteor.startup (function () {
  //Repeating defaults for clarification
  BrowserPolicy.content.disallowEval();
  BrowserPolicy.content.allowInlineStyles();
  //Modifications to other defaults
  BrowserPolicy.content.disallowInlineScripts();
  BrowserPolicy.content.disallowConnect();
  //Allow Meteor DDP Connections
  var rootUrl = __meteor_runtime_config__.ROOT_URL;
  console.log('ROOT_URL:' + rootUrl);
  BrowserPolicy.content.allowConnectOrigin(rootUrl);
  BrowserPolicy.content.allowConnectOrigin(rootUrl.replace(/http(s?)/, 'ws$1'));
  //Allow DDP connections for staging server currently using Meteor's free hosting
  if (rootUrl == 'http://staging.kyn.me') {
    BrowserPolicy.content.allowConnectOrigin("https://*.meteor.com");
    BrowserPolicy.content.allowConnectOrigin("wss://*.meteor.com");
  }
  BrowserPolicy.content.allowOriginForAll('fonts.googleapis.com');
  BrowserPolicy.content.allowOriginForAll('fonts.gstatic.com');
});
