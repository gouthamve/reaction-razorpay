Template.razorpay.helpers
  packageData: ->
    return ReactionCore.Collections.Packages.findOne({name:"reaction-razorpay"})

AutoForm.hooks "razorpay-update-form":
  onSuccess: (operation, result, template) ->
    Alerts.removeSeen()
    Alerts.add "Razorpay settings saved.", "success"

  onError: (operation, error, template) ->
    Alerts.removeSeen()
    Alerts.add "Razorpay settings update failed. " + error, "danger"
