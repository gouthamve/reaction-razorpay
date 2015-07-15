Package.describe({
  summary: "Reaction Razorpay - Razorpay payments for Reaction Commerce",
  name: "gouthamve:reaction-razorpay",
  version: "0.0.1",
  git: "https://github.com/gouthamve/reaction-razorpay.git"
});

Package.onUse(function(api, where) {
  api.versionsFrom('METEOR@1.0');
  api.use("meteor-platform");
  api.use("coffeescript");
  api.use("less");
  api.use("reactioncommerce:core@0.5.0");

  api.addFiles("server/register.coffee", ["server"]); // register as a reaction package
  api.addFiles("server/methods.coffee", ["server"]);
  api.addFiles("server/BrowserPolicy.coffee", ["server"]);

  api.addFiles([
    "common/collections.coffee",
    "common/routing.coffee"
  ], ["client", "server"]);

  api.addFiles([
    "client/templates/cod.html",
    "client/templates/cod.coffee",
    "client/templates/cart/checkout/payment/methods/cod/cod.html",
    "client/templates/cart/checkout/payment/methods/cod/cod.coffee"
  ], ["client"]);
});
