Template.codPaymentForm.events
  'click .rzp-button1': () ->
    options =
      'key': 'rzp_test_ACrQrYe4JyQgUe'
      'amount': '20'
      'name': 'Merchant Name'
      'description': 'Purchase Description'
      'image': '/your_logo.png'
      'handler': (response) ->
        alert response.razorpay_payment_id
        return
      'prefill':
        'name': 'Harshil Mathur'
        'email': 'harshil@razorpay.com'
      'notes': 'address': 'Hello World'
    rzp1 = new Razorpay(options)
    rzp1.open()

  #TODO: Better Alerts
  'click .btn-check-pin': (event,template) ->
    testPin = parseInt(template.find("input[name=testPin]").value)
    if testPin
      Meteor.call "isValidPin", testPin, (err, result)->
        if result
          Alerts.add Alerts.add "Pincode is serviceable", "success", autoHide: true
        else
          Alerts.add Alerts.add "Pincode is not serviceable", "danger", autoHide: true

Template.codPaymentForm.helpers
 validPin: ->
  pin = parseInt(ReactionCore.Collections.Cart.findOne().shipping.address.postal)
  Meteor.call "isValidPin", pin, (err, result)->
    if result
      Session.set "isValidPin", true
    else
      Session.set "isValidPin", false
  return Session.get "isValidPin"
