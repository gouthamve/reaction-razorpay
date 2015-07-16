Template.razorpayPaymentForm.events
  'click .btn-complete-order': () ->
    amount = parseInt(parseFloat(ReactionCore.Collections.Cart.findOne().cartTotal() * 100).toFixed(0))
    options =
      'key': ReactionCore.Collections.Packages.findOne(name: "reaction-razorpay").settings.public.key_id
      'amount': amount
      'name': Shops.findOne().name || 'Reaction Shop'
      'description': 'Purchase Description'
      'image': '/your_logo.png'
      'handler': (response) ->
        Meteor.call "razorpayCapture", response.razorpay_payment_id, amount, (err, result) ->
          total = result.amount/100
          normalizedStatus = "settled"
          normalizedMode = "capture"
          paymentMethod =
            processor: "Razorpay"
            amount: total
            status: normalizedStatus
            mode: normalizedMode
            transactionId: result.id
            createdAt: result.created_at
            transactions: result
          CartWorkflow.paymentMethod(paymentMethod)
      'prefill':
        'name': ReactionCore.Collections.Accounts.findOne().profile.addressBook[0]?.fullName
        'email': ReactionCore.Collections.Accounts.findOne().emails?[0]?.address
        'contact': ReactionCore.Collections.Accounts.findOne().profile.addressBook[0]?.phone
    rzp1 = new Razorpay(options)
    rzp1.open()
