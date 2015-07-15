Meteor.startup ->
  # set browser policy
  BrowserPolicy.content.allowEval() #eval required by in-context express checkout script
  BrowserPolicy.content.allowOriginForAll("https://checkout.razorpay.com")
  BrowserPolicy.content.allowOriginForAll("https://api.razorpay.com")
  BrowserPolicy.content.allowOriginForAll("http://checkout.razorpay.com")
  BrowserPolicy.content.allowOriginForAll("http://api.razorpay.com")
