// Replace '..' with 'about-window'
const { app, Menu } = require('electron')

const openAboutWindow = require("about-window").default;

var about = () => {
  openAboutWindow({
    product_name: "Google Drive Electron",
    icon_path: `${__dirname}/../../static/gd.png`,
    copyright: "Copyright (c) 2018 Alex Kim",
    package_json_dir: `${__dirname}/../../`,
    license: "MIT",
    open_devtools: process.env.NODE_ENV !== "production",
    win_options: {
      titleBarStyle: "hidden"
    }
  })
}

var template = [{
    label: "Application",
    submenu: [
      { label: "About Google Drive Desktop", click: about },
      { type: "separator" },
      { label: "Quit", accelerator: "CmdOrCtrl+Q", role: 'quit' }
    ]
  },
  {
    label: "File",
    role: 'windowMenu'
    // submenu: [
    //   { label: "Toggle Full Screen", accelerator: "Cmd+Ctrl+F", role: 'toggleFullScreen' },
    //   { label: "Minimize", accelerator: "CmdOrCtrl+M", role: 'minimize' },
    //   { label: "Close Window", accelerator: "CmdOrCtrl+W", role: 'close' },
    //   { label: "Reload Window", accelerator: "CmdOrCtrl+R", click: reload }
    // ]
  },
  {
    label: "Edit",
    role: 'editMenu'
    // submenu: [
    //   { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
    //   { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
    //   { type: "separator" },
    //   { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
    //   { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
    //   { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
    //   { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
    // ]
  }
];

// if (process.env.NODE_ENV === "development") {
//   template.push({
//     label: "Debug",
//     submenu: [
//       { label: "Print All Windows", accelerator: "CmdOrCtrl+P", click: print_windows }
//     ]
//   })
// }

module.exports = { template: template }