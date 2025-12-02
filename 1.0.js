Gui8787JsConfig = {
  "installed": false,
  "app": 'root'
}
Gui8787Js = {
  "config": {
    "install_Gui8787Js": function() { Gui8787JsConfig.installed = true },
    "uninstall_Gui8787Js": function() { Gui8787JsConfig.installed = false }
  },
  "gui": {
    "SetApp": function(a) { Gui8787JsConfig.app = a },
    "app": {
      "content": {
        "set": function(c) {
          app = document.getElementById(Gui8787JsConfig.app); html = ""
          if (app) {
            VrApp = {
              "content": []
            }
            VrApp.content = c.split('; ')
          }
        }
      }
    }
  }
}
