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
    "setApp": function(a) { Gui8787JsConfig.app = a },
    "app": {
      "content": {
        "set": function(c) {
          app = document.getElementById(Gui8787JsConfig.app); html = ""
          if (app) {
            VrApp = {
              "content": []
            }
            VrApp.content = c.split('; ')
            for(i = 0; i < VrApp.content.length; i++) {
              i2 = VrApp.content[i]
              if (i2.name === "gui") {
                for(i3 = 0; i3 < i2.content.length; i3++) {
                  i4 = i2.content[i3]
                  if (i4.name === 'app') {
                    for(i5 = 0; i5 < i4.content.length; i5++) {
                      i6 = i4.content[i5]
                      i7 = i6.name
                      i8 = i6.content
                      i9 = i6.args
                      if (i7 === 'jsCode') {
                        html = `${html}<script>${i8}</script>`
                      } else if (i7 === 'if') {
                        if (i9.bool) {
                          appp = Gui8787JsConfig.app
                          Gui8787Js.gui.setApp(i9.id)
                          Gui8787Js.gui.app.content.set(i8)
                          Gui8787Js.gui.setApp = appp
                        }
                      } else if (i7 === 'html') {
                        html = `${html}${i8}`
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
