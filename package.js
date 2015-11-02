Package.describe({
  summary: "Reaction Razorpay - Razorpay payments for Reaction Commerce",
  name: "gouthamve:reaction-razorpay",
  version: "1.0.1",
  git: "https://github.com/gouthamve/reaction-razorpay.git"
});

Package.onUse(function(api, where) {
  api.versionsFrom('METEOR@1.2.1');
  api.use("meteor-platform");
  api.use("coffeescript");
  api.use("less");
  api.use("reactioncommerce:core@0.9.4");
  api.use("http");

  api.addFiles("server/register.coffee", ["server"]); // register as a reaction package
  api.addFiles("server/methods.coffee", ["server"]);
  api.addFiles("server/BrowserPolicy.coffee", ["server"]);

  api.addFiles([
    "common/collections.coffee",
    "common/routing.coffee"
  ], ["client", "server"]);

  api.addFiles([
    "client/templates/razorpay.html",
    "client/templates/razorpay.coffee",
    "client/templates/cart/checkout/payment/methods/razorpay/razorpay.html",
    "client/templates/cart/checkout/payment/methods/razorpay/razorpay.coffee"
  ], ["client"]);
});
