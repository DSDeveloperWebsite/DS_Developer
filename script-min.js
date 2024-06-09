function classBoxy(i) {
  (this.wrapper = $(
    '<div class="fboxy-wrapper"><div class="fboxy-title"><h3></h3><a href="#" class="fboxy-close"></a></div><div class="fboxy-body">Body</div></div>'
  )),
    (this.loading = '<div class="fboxy-loading"></div>'),
    (this.instance = null),
    (this.options = i),
    (this.loaded = !1),
    (this.error = !1),
    (this.object = !1),
    (this.uid = Math.floor(1e3 * Math.random() + 1)),
    (this.placeholder = !1),
    (self = this),
    (this.open = function (i) {
      (html = ""),
        "#" == i.substr(0, 1) && i.length > 1
          ? $(i).length &&
            (this.options.clone
              ? this.load($(i).html())
              : ((this.placeholder = $(i)),
                (content = this.placeholder
                  .wrapInner("<div></div>")
                  .children()
                  .detach()),
                this.load(content)))
          : ((i += i.indexOf("?") > 0 ? "&_modal=true" : "?_modal=true"),
            this.options.iframe
              ? (html =
                  this.loading +
                  '<iframe class="fboxy-iframe" border="0" frameborder="0" height="100%" width="100%" src=' +
                  i +
                  ' allowfullscreen allow="fullscreen;autoplay">Your browser is too old to support iFrames, please upgrade.</iframe>')
              : ((html = this.loading),
                (obj = $.ajax({
                  url: i,
                  type: "GET",
                  dataType: "html",
                  cache: !1,
                  success: function (i) {
                    self.load(i);
                  },
                  error: function () {
                    alert(
                      "There was an unexpected error! Sorry for the inconvenience."
                    ),
                      (self.error = 1);
                  },
                })))),
        this.loaded || self.error || !html || this.load(html);
    }),
    (this.load = function (i) {
      var t = this;
      this.instance ||
        ((this.instance = this.wrapper
          .prop("id", "fboxy-wrapper-" + t.uid)
          .appendTo("body")
          .css("z-index", ++this.options.zindex)),
        this.instance.addClass("loaded")),
        this.instance.find(".fboxy-body").html(i),
        (this.loaded = !0),
        this.instance
          .find(".fboxy-close, a[rel=fboxy-close],*[data-boxy=close]")
          .click(function () {
            return t.unload(), !1;
          }),
        this.options.show_close ||
          this.instance.find(".fboxy-title .fboxy-close").hide(),
        this.options.show_title
          ? this.instance.find(".fboxy-title h3").html(this.options.title)
          : this.instance.find(".fboxy-title h3").html("&nbsp;"),
        this.options.close_bg &&
          $("#fboxy-bg").click(function () {
            t.unload();
          }),
        this.options.close_esc &&
          $(document).bind("keydown", function (i) {
            27 == (i.which || i.keyCode) &&
              (t.unload(), $(document).unbind("keydown"));
          }),
        i.toString().indexOf("fboxy-iframe") > 0 &&
          (this.instance.addClass("fboxy-wrapper-iframe"),
          this.instance.find(".fboxy-body").addClass("fboxy-body-iframe"),
          this.instance.find("iframe").bind("load", function () {
            t.instance.find("iframe").show(),
              t.instance.find(".fboxy-loading").remove();
          })),
        this.loadBG();
    }),
    (this.unload = function () {
      this.placeholder &&
        ((html = this.instance
          .find(".fboxy-body")
          .children()
          .children()
          .unwrap()
          .detach()),
        this.placeholder.append(html)),
        this.instance.remove(),
        $(".fboxy-wrapper").length || this.unloadBG();
    }),
    (this.loadBG = function () {
      $("#fboxy-bg").css("visibility", "visible").animate({ opacity: 1 }, 400),
        this.options.onOpen.call(this);
    }),
    (this.unloadBG = function () {
      $("#fboxy-bg").animate({ opacity: 0 }, 400, function () {
        $(this).css("visibility", "hidden");
      }),
        this.options.onClose.call(this);
    });
}
!(function (i) {
  i.fn.fboxy = function (t) {
    t = t || {};
    t = i.extend(
      {
        show_close: !0,
        show_title: !0,
        close_esc: !0,
        close_bg: !0,
        iframe: !1,
        zindex: 1e3,
        clone: !1,
        onOpen: function () {},
        onClose: function () {},
      },
      t
    );
    var o = i('<div id="fboxy-bg"></div>');
    i("#fboxy-bg").length ||
      (i(o).appendTo("body"), i(o).css("z-index", t.zindex)),
      i(this).each(function () {
        i(this).click(function () {
          (opt = {}),
            (strtitle = i(this).attr("title")
              ? i(this).attr("title")
              : i(this).html()),
            (opt = i.extend(t, { title: strtitle, initiator: i(this) })),
            (objBoxy = new classBoxy(opt));
          var o = i(this).data("boxy-link");
          return (o = o || i(this).attr("href")), objBoxy.open(o), !1;
        });
      });
  };
})(jQuery);
