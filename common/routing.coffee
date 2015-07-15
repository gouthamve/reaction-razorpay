Router.map ->
  @route 'razorpay',
    controller: ShopAdminController
    path: 'dashboard/settings/razorpay',
    template: 'razorpay'
    waitOn: ->
      return ReactionCore.Subscriptions.Packages
