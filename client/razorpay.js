Razorpay = function(a) {
		return "function" == typeof this.configure && this.configure(a), this
	},
	function() {
		Razorpay.prototype = {}, Razorpay.card = {}, Razorpay.prototype.discreet = {
			currentScript: document.currentScript || function() {
				var a = document.getElementsByTagName("script");
				return a[a.length - 1]
			}(),
			merchantData: {}
		}
	}(),
	function(a) {
		var b = function(a) {
				!a.data && (a.data = {});
				var b = a.data.callback = "jsonp_" + d(15),
					e = c(a),
					f = !1;
				window[b] = function(a) {
					e.success(a, e), e.complete(a, e);
					try {
						delete window[b]
					} catch (c) {
						window[b] = void 0
					}
				};
				var g = document.createElement("script");
				g.src = e.computedUrl, g.async = !0, g.onerror = function(a) {
					e.error({
						url: g.src,
						event: a
					}), e.complete({
						url: g.src,
						event: a
					}, e)
				}, g.onload = g.onreadystatechange = function() {
					f || this.readyState && "loaded" != this.readyState && "complete" != this
						.readyState || (f = !0, g.onload = g.onreadystatechange = null, g.parentNode &&
							g.parentNode.removeChild(g), g = null)
				};
				var h = window.document.getElementsByTagName("head")[0] || window.document.documentElement;
				h.appendChild(g)
			},
			c = function(a) {
				var b = {
						data: a.data || {},
						error: a.error || f.noop,
						success: a.success || f.noop,
						complete: a.complete || f.noop,
						url: a.url || ""
					},
					c = b.url;
				return c += b.url.indexOf("?") < 0 ? "?" : "&", c += e(b.data), b.computedUrl =
					c, b
			},
			d = function(a) {
				for (var b = ""; b.length < a;) b += Math.random().toString(36)[2];
				return b
			},
			e = function(a) {
				var b = [],
					c = window.encodeURIComponent;
				for (var d in a) b.push(c(d) + "=" + c(a[d]));
				return b.join("&")
			},
			f = a.$ = function(a) {
				return "string" == typeof a ? f(document.getElementById(a)) : this instanceof f ?
					void(this[0] = a) : new f(a)
			};
		f.prototype = {
			on: function(a, b, c) {
				var d = this[0];
				if (d) {
					var e;
					return window.addEventListener ? (e = function(a) {
						3 == a.target.nodeType && (a.target = a.target.parentNode), b.call(
							this, a)
					}, d.addEventListener(a, e, !!c)) : window.attachEvent && (e = function(
						a) {
						if (!a) var a = window.event;
						a.target || (a.target = a.srcElement || document), a.preventDefault ||
							(a.preventDefault = function() {
								this.returnValue = !1
							}), b.call(d, a)
					}, d.attachEvent("on" + a, e)), e
				}
			},
			off: function(a, b, c) {
				window.removeEventListener ? this[0].removeEventListener(a, b, !!c) :
					window.detachEvent && this[0].detachEvent("on" + a, b)
			},
			remove: function() {
				var a = this[0];
				return a && a.parentNode && a.parentNode.removeChild(a), this
			},
			hasClass: function(a) {
				return (" " + this[0].className + " ").indexOf(" " + a + " ") >= 0
			},
			addClass: function(a) {
				var b = this[0];
				return b.className ? this.hasClass(a) || (b.className += " " + a) : b.className =
					a, this
			},
			removeClass: function(a) {
				var b = this[0];
				return className = (" " + b.className + " ").replace(" " + a + " ", " ").replace(
						/^ | $/g, ""), b.className != className && (b.className = className),
					this
			},
			children: function(a) {
				for (var b = this[0].firstChild, c = []; b;)(1 == b.nodeType && !a || f(b)
					.hasClass(a)) && c.push(b), b = b.nextSibling;
				return c
			},
			find: function(a, b) {
				var c = this[0];
				if ("getElementsByClassName" in document) return c.getElementsByClassName(
					a);
				var d = [];
				!b && (b = "*");
				for (var e = c.getElementsByTagName(b), f = e.length, g = new RegExp(
						"(^|\\s)" + a + "(\\s|$)"), h = 0; f > h; h++) g.test(e[h].className) &&
					d.push(e[h]);
				return d
			},
			css: function(a, b) {
				var c = this[0];
				if (c) {
					if (1 == arguments.length) return c.style[a];
					try {
						c.style[a] = b
					} catch (d) {}
				}
				return this
			},
			attr: function(a, b) {
				var c = this[0];
				if (c) {
					if (1 == arguments.length) return c.getAttribute(a);
					c.setAttribute(a, b)
				}
			},
			parent: function() {
				return f(this[0].parentNode)
			}
		}, f.ajax = function(a) {
			return "jsonp" == a.dataType ? b(a) : void 0
		}, f.noop = function() {}, f.extend = function(a, b) {
			for (var c in b) a[c] = b[c];
			return a
		}, f.defaults = function(a, b) {
			for (var c in b) c in a || (a[c] = b[c]);
			return a
		}
	}(Razorpay.prototype),
	function() {
		"use strict";
		var a = Razorpay.prototype.$,
			b = Razorpay.prototype.discreet;
		b.defaults = {
			protocol: "https",
			hostname: "api.razorpay.com",
			version: "v1",
			jsonpUrl: "/payments/create/jsonp",
			methodsUrl: "/methods",
			key: "",
			amount: "",
			currency: "INR",
			handler: a.noop,
			notes: {},
			callback_url: "",
			redirect: !1,
			description: "",
			buttontext: "Pay Now",
			display_currency: "",
			method: {
				netbanking: null,
				card: null,
				wallet: {}
			},
			prefill: {
				name: "",
				contact: "",
				email: ""
			},
			modal: {
				ondismiss: a.noop,
				onhidden: a.noop
			},
			signature: "",
			display_amount: "",
			name: "",
			image: ""
		}, b.xdm = {
			_getMessageCallback: function(a, b) {
				return function(c) {
					if (c.originalEvent && (c = c.originalEvent), c && c.data && "function" ==
						typeof a) {
						var d = c.data;
						if ("string" == typeof d) try {
							d = JSON.parse(d)
						} catch (c) {
							d = {
								error: {
									description: "Unable to parse response"
								}
							}
						}
						a.call(b, c, d)
					}
				}
			},
			_listener: null,
			addMessageListener: function(c, d) {
				b.xdm._listener && b.xdm.removeMessageListener(), b.xdm._listener = b.xdm
					._getMessageCallback(c, d);
				var e = a(window).on("message", b.xdm._listener);
				"function" == typeof e && (b.xdm._listener = e)
			},
			removeMessageListener: function() {
				a(window).off("message", b.xdm._listener), b.xdm._listener = null
			}
		}, b.setOption = function(a, b, c, d) {
			var e = d[a];
			if ("object" != typeof c) return void(a in b || (b[a] = e));
			var f = c[a];
			"string" == typeof e && "undefined" != typeof f && "string" != typeof f &&
				(f = String(f)), typeof f == typeof e ? b[a] = f : a in b || (b[a] = e)
		}, Razorpay.prototype.configure = function(a) {
			this.options = b.configure(a), "function" == typeof b.initHedwig && b.initHedwig
				.call(this), "function" == typeof b.initCheckout && b.initCheckout.call(
					this)
		}, b.configure = function(c) {
			if ("object" != typeof c) throw new Error("invalid options passed");
			var d = {},
				e = b.defaults;
			for (var f in e)
				if (null !== e[f] && "object" == typeof e[f])
					if ("notes" == f) {
						if (d.notes = {}, "object" == typeof c.notes)
							for (var g in c.notes) "string" == typeof c.notes[g] && (d.notes[g] = c
								.notes[g])
					} else if ("method" == f) {
				if (d.method = a.extend({}, e.method), "object" == typeof c.method) {
					if ("object" == typeof c.method.wallet)
						for (var g in c.method.wallet) "boolean" == typeof c.method.wallet[g] &&
							(d.method.wallet[g] = c.method.wallet[g]);
					"boolean" == typeof c.method.card && (d.method.card = c.method.card),
						"boolean" == typeof c.method.netbanking && (d.method.netbanking = c.method
							.netbanking)
				}
			} else {
				var h = e[f];
				d[f] = d[f] || {};
				for (var g in h) b.setOption(g, d[f], c[f], h)
			} else b.setOption(f, d, c, e);
			return b.validateOptions(d, !0), d
		}, b.validateOptions = function(a, c) {
			var d = [];
			if ("undefined" == typeof a ? d.push({
					message: "no initialization options are passed",
					field: ""
				}) : "object" != typeof a && d.push({
					message: "passed initialization options are invalid",
					field: ""
				}), !d.length) {
				if ("undefined" == typeof a.key && d.push({
						message: "No merchant key specified",
						field: "key"
					}), "" === a.key && d.push({
						message: "Merchant key cannot be empty",
						field: "key"
					}), "object" == typeof a.notes) {
					var e = 0;
					for (var f in a.notes) e++;
					e > 15 && d.push({
						message: "You can only pass at most 15 fields in the notes object",
						field: "notes"
					})
				}
				"function" == typeof b.validateCheckout && b.validateCheckout(a, d)
			}
			if (!c) return d;
			if (d.length > 0) {
				var g = d[0].field,
					h = d[0].message,
					i = '{"field":"' + g + '","error":"' + h + '"}';
				throw new Error(i)
			}
		}, b.makeUrl = function(a) {
			return a.protocol + "://" + a.hostname + "/" + a.version
		}, b.nextRequestRedirect = function(a) {
			if (window != window.parent && "function" == typeof Razorpay.sendMessage)
				return Razorpay.sendMessage({
					event: "redirect",
					data: a
				});
			if ("get" == a.method) location.href = a.url;
			else if ("post" == a.method && "object" == typeof a.content) {
				var c = document.createElement("form"),
					d = "";
				for (var e in a.content) d += '<input type="hidden" name="' + e +
					'" value="' + a.content[e] + '">';
				c.method = "post", c.innerHTML = d, c.action = a.url, document.body.appendChild(
					c), c.submit()
			} else {
				var f = {
					error: {
						description: "Server Error"
					}
				};
				b.error.call(this, f)
			}
		}
	}(),
	function() {
		"use strict";
		var a = (Razorpay.prototype.doT, Razorpay.prototype.discreet);
		Razorpay.prototype.open = function() {
			var b = a.bodyEl = document.getElementsByTagName("body")[0];
			if (b || setTimeout(this.open()), !a.isOpen) {
				if (a.isOpen = !0, a.merchantData.bodyOverflow = b.style.overflow, b.style
					.overflow = "hidden", a.xdm.addMessageListener(a.onFrameMessage, this), !
					a.frameContainer) {
					var c = a.frameContainer = document.createElement("div");
					c.className = "razorpay-frame-container";
					var d = c.style;
					d.zIndex = "99999", d.position = "relative", b.appendChild(c)
				}
				this.checkoutFrame ? (this.checkoutFrame.style.display = "block", a.setMetaViewport(),
					a.sendFrameMessage.call(this, {
						event: "open"
					})) : (this.checkoutFrame = a.createFrame(this.options), a.frameContainer
					.appendChild(this.checkoutFrame))
			}
		}, a.createFrame = function(b) {
			var c = document.createElement("iframe"),
				d = a.currentScript.src;
			d = /^https?:\/\/[^\.]+.razorpay.com/.test(d) ? a.makeUrl(b) +
				"/checkout?key_id=" + b.key : d.replace(/(js\/lib\/)?[^\/]+$/, "") +
				"checkout.html";
			var e = {
				"class": "razorpay-checkout-frame",
				style: "transition: 0.25s background; display: block; background: rgba(0, 0, 0, 0.1); border: 0px none transparent; overflow: hidden; visibility: visible; margin: 0px; padding: 0px; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%;",
				allowtransparency: !0,
				frameborder: 0,
				width: "100%",
				height: "100%",
				src: d
			};
			for (var f in e) c.setAttribute(f, e[f]);
			return c
		}, Razorpay.prototype.close = function() {
			a.isOpen && a.sendFrameMessage.call(this, {
				event: "close"
			})
		}, a.onClose = function() {
			a.xdm.removeMessageListener(), a.isOpen = !1, a.bodyEl.style.overflow = a.merchantData
				.bodyOverflow;
			var b = a.metaViewportTag;
			if (b) {
				var c = a.metaViewportTag.parentNode;
				c && c.removeChild(b)
			}
			if (b = a.merchantData.metaViewport) {
				var d = document.getElementsByTagName("head")[0];
				d && !b.parentNode && d.appendChild(b), a.merchantData.metaViewport = null
			}
			this.checkoutFrame && (this.checkoutFrame.style.display = "none", this.checkoutFrame
				.getAttribute("removable") && (this.checkoutFrame.parentNode && this.checkoutFrame
					.parentNode.removeChild(this.checkoutFrame), this.checkoutFrame = null))
		}, a.sendFrameMessage = function(a) {
			"string" != typeof a && (a = JSON.stringify(a)), this.checkoutFrame.contentWindow
				.postMessage(a, "*")
		}, a.setImageOption = function(a) {
			if (a.image && "string" == typeof a.image) {
				if (/data:image\/[^;]+;base64/.test(a.image)) return;
				if (a.image.indexOf("http")) {
					var b = location.protocol + "//" + location.hostname + (location.port ?
							":" + location.port : ""),
						c = "";
					"/" != a.image[0] && (c += location.pathname.replace(/[^\/]*$/g, ""), "/" !=
						c[0] && (c = "/" + c)), a.image = b + c + a.image
				}
			}
		}, a.setMetaViewport = function() {
			if ("function" == typeof document.querySelector) {
				var b = document.querySelector("head");
				if (b) {
					var c = b.querySelector("meta[name=viewport]");
					if (c) {
						if (/width=device-width, ?initial-scale=1/.test(c.getAttribute("content")))
							return;
						a.merchantData.metaViewport = c, c.parentNode.removeChild(c)
					}
					a.metaViewportTag || (c = a.metaViewportTag = document.createElement(
							"meta"), c.setAttribute("name", "viewport"), c.setAttribute("content",
							"width=device-width, initial-scale=1")), a.metaViewportTag.parentNode ||
						b.appendChild(a.metaViewportTag)
				}
			}
		}, a.onFrameMessage = function(b, c) {
			if ("string" == typeof b.origin && this.checkoutFrame && !this.checkoutFrame
				.src.indexOf(b.origin) && "frame" == c.source) {
				var d = c.event;
				if (c = c.data, "load" == d) {
					a.setMetaViewport();
					var e = {};
					for (var f in this.options) {
						var g = this.options[f];
						"function" != typeof g && "parent" != f && (e[f] = g)
					}
					a.setImageOption(e);
					var h = {
						context: location.href,
						options: e
					};
					return a.sendFrameMessage.call(this, h)
				}
				"redirect" == d ? a.nextRequestRedirect(c) : "submit" == d ? window.CheckoutBridge &&
					"function" == typeof window.CheckoutBridge.onsubmit && window.CheckoutBridge
					.onsubmit(JSON.stringify(c)) : "dismiss" == d ? "function" == typeof this
					.options.modal.ondismiss && this.options.modal.ondismiss() : "hidden" ==
					d ? (a.onClose.call(this), "function" == typeof this.options.modal.onhidden &&
						this.options.modal.onhidden()) : "success" == d ? (this.checkoutFrame &&
						this.checkoutFrame.setAttribute("removable", !0), "function" == typeof this
						.options.handler && this.options.handler.call(null, c)) : "fault" == d &&
					(alert("Oops! Something went wrong."), this.close())
			}
		}, a.defaultPostHandler = function(b) {
			var c = "";
			for (var d in b)
				if ("object" == typeof b[d])
					for (var e in b[d]) c += '<input type="hidden" name="' + d + "[" + e +
						']" value="' + b[d][e] + '">';
				else c += '<input type="hidden" name="' + d + '" value="' + b[d] + '">';
			var f = a.currentScript.parentElement;
			f.innerHTML += c, f.submit()
		}, a.parseScriptOptions = function(b) {
			var c, d, e, f, g;
			for (e in b)
				if (f = e.indexOf("."), f > -1) {
					d = f, c = e.substr(0, d), g = e.substr(d + 1), b[c] = b[c] || {};
					var h = b[e];
					"true" === h ? h = !0 : "false" === h && (h = !1), b[c][g] = h, delete b[
						e]
				}
			b.method && a.parseScriptOptions(b.method)
		}, a.addButton = function(b) {
			var c = document.createElement("input"),
				d = a.currentScript.parentNode;
			c.type = "submit", c.value = b.options.buttontext, c.className =
				"razorpay-payment-button", d.appendChild(c), d.onsubmit = function(c) {
					return a.isOpen ? void 0 : (c.preventDefault(), b.open(), !1)
				}
		}, a.automaticCheckoutInit = function() {
			var b = a.currentScript.getAttribute("data-key");
			if (b && b.length > 0) {
				for (var c = a.currentScript.attributes, d = {}, e = 0; e < c.length; e++) {
					var f = c[e].name;
					/^data-/.test(f) && (f = f.replace(/^data-/, ""), d[f] = c[e].value)
				}
				a.parseScriptOptions(d), d.handler = a.defaultPostHandler;
				var g = new Razorpay(d);
				a.addButton(g)
			}
		}, a.validateCheckout = function(a, b) {
			var c = parseInt(a.amount);
			a.amount = String(a.amount), (!c || "number" != typeof c || 0 > c || -1 !==
				a.amount.indexOf(".")) && b.push({
				message: "Invalid amount specified",
				field: "amount"
			}), "undefined" == typeof a.name && b.push({
				message: "Merchant name cannot be empty",
				field: "name"
			}), a.handler && "function" != typeof a.handler && b.push({
				message: "Handler must be a function",
				field: "handler"
			}), a.display_currency && ("USD" === a.display_currency ? (a.display_amount =
				String(a.display_amount).replace(/([^0-9\. ])/g, ""), a.display_amount ||
				b.push({
					message: "Invalid display_amount specified",
					field: "display_amount"
				})) : b.push({
				message: "Invalid display currency specified",
				field: "display_currency"
			}))
		}, a.automaticCheckoutInit()
	}(), delete Razorpay.prototype.$, delete Razorpay.prototype.Popup, delete Razorpay
	.prototype.Hedwig, delete Razorpay.prototype.discreet;
