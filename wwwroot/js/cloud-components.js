var exports = {};
var CorePopup = (function () {
    function CorePopup() {
    }
    Object.defineProperty(CorePopup, "selector", {
        get: function () {
            return "body > .popup";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CorePopup, "element", {
        get: function () {
            return $(this.selector);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CorePopup, "isOpened", {
        get: function () {
            return $(this.selector).length > 0;
        },
        enumerable: false,
        configurable: true
    });
    CorePopup.onContentLoaded = function (callback) {
        this._contentLoadedCallBack = callback;
    };
    CorePopup.open = function (content, settings) {
        if (this.isOpened)
            this.close();
        if (content === undefined)
            content = "loading...";
        if (settings === undefined)
            settings = new CorePopupSettings();
        var html = "\n            <aside class=\"sidebar\">\n                <div class=\"sidebar-content\">" +
            content +
            "</div>\n            </aside>";
        $("body").append(html);
        CoreMain.preventScrolling();
        var contentElement = this.element.find(".sidebar-content");
        if (this._contentLoadedCallBack !== undefined)
            this._contentLoadedCallBack();
        if (!settings.preventClose) {
            CorePopup.element.css("cursor", "pointer");
            $(this.selector).click(function (e) {
                if (!contentElement.is(e.target) &&
                    contentElement.has(e.target).length === 0)
                    CorePopup.close();
            });
        }
        window.history.pushState("forward", null, "");
    };
    CorePopup.close = function () {
        this.softClose();
        window.history.back();
    };
    CorePopup.softClose = function () {
        CoreMain.allowScrolling();
        this.element.remove();
    };
    CorePopup.updateContent = function (content) {
        if (!this.isOpened)
            throw new Error("Open popup before setting its content.");
        this.element.find(".sidebar-content").html(content);
        if (this._contentLoadedCallBack !== undefined)
            this._contentLoadedCallBack();
    };
    return CorePopup;
}());
{ CorePopup };
var CorePopupSettings = (function () {
    function CorePopupSettings() {
        this.preventClose = false;
    }
    return CorePopupSettings;
}());
{ CorePopupSettings };
$(window).on("popstate", function () {
    if (CorePopup.isOpened)
        CorePopup.softClose();
});
