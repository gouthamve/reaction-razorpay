Meteor.methods
	razorpayCapture: (txnId, amount) ->
		check txnId, String
		check amount, Number
		apiauth = "https://api.razorpay.com/v1/payments/" + txnId + "/capture";
		settings = ReactionCore.Collections.Packages.findOne({name: "reaction-razorpay"}).settings
		auth = settings.public.key_id + ":" + settings.key_secret
		result = HTTP.post(apiauth , {params: {amount: amount}, auth: auth})
		return result.data
