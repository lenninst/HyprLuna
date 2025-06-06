// import Widget from 'resource:///com/github/Aylur/ags/widget.js';
// import { setupCursorHover } from "../.widgetutils/cursorhover.js";
// import PopupWindow from '../.widgethacks/popupwindow.js';
// import Keybinds from "./keybinds.js";
// import { ExpandingIconTabContainer } from '../.commonwidgets/tabcontainer.js';
// import { checkKeybind } from '../.widgetutils/keybind.js';
// import clickCloseRegion from '../.commonwidgets/clickcloseregion.js';
// import PeriodicTable from "./periodictable.js";
// import { getString } from '../../i18n/i18n.js';
// import TmuxKeybindsViewer from "./tmuxKeybindsViewer.js";  // Importamos el nuevo componente

// const cheatsheets = [
//     {
//         name: getString('Keybinds'),
//         materialIcon: 'keyboard',
//         contentWidget: Keybinds,
//     },
//    
//     {
//         name: getString('Periodic table'),
//         materialIcon: 'experiment',
//         contentWidget: PeriodicTable,
//     },
// ];

// const CheatsheetHeader = () => Widget.CenterBox({
//     vertical: false,
//     startWidget: Widget.Box({}),
//     centerWidget: Widget.Box({
//         vertical: true,
//         className: "spacing-h-15",
//         children: [
//             Widget.Box({
//                 hpack: 'center',
//                 className: 'spacing-h-5 cheatsheet-title',
//                 children: [
//                     Widget.Label({
//                         hpack: 'center',
//                         css: 'margin-right: 0.682rem;',
//                         className: 'txt-title',
//                         label: getString('Cheat sheet'),
//                     }),
//                     Widget.Label({
//                         vpack: 'center',
//                         className: "cheatsheet-key txt-small",
//                         label: "",
//                     }),
//                     Widget.Label({
//                         vpack: 'center',
//                         className: "cheatsheet-key-notkey txt-small",
//                         label: "+",
//                     }),
//                     Widget.Label({
//                         vpack: 'center',
//                         className: "cheatsheet-key txt-small",
//                         label: "/",
//                     })
//                 ]
//             }),
//         ]
//     }),
//     endWidget: Widget.Button({
//         vpack: 'start',
//         hpack: 'end',
//         className: "cheatsheet-closebtn icon-material txt txt-hugeass",
//         onClicked: () => {
//             closeWindowOnAllMonitors('cheatsheet');
//         },
//         child: Widget.Label({
//             className: 'icon-material txt txt-hugeass',
//             label: 'close'
//         }),
//         setup: setupCursorHover,
//     }),
// });

// const sheetContents = [];
// const SheetContent = (id) => {
//     sheetContents[id] = ExpandingIconTabContainer({
//         tabsHpack: 'center',
//         tabSwitcherClassName: 'sidebar-icontabswitcher',
//         transitionDuration: userOptions.asyncGet().animations.durationLarge * 1.4,
//         icons: cheatsheets.map((api) => api.materialIcon),
//         names: cheatsheets.map((api) => api.name),
//         children: cheatsheets.map((api) => api.contentWidget()),
//         onChange: (self, id) => {
//             self.shown = cheatsheets[id].name;
//         }
//     });
//     return sheetContents[id];
// }

// export default (id) => {
//     const sheets = SheetContent(id);
//     const widgetContent = Widget.Box({
//         vertical: true,
//         className: "cheatsheet-bg spacing-v-5",
//         children: [
//             CheatsheetHeader(),
//             sheets,
//         ]
//     });
//     return PopupWindow({
//         monitor: id,
//         name: `cheatsheet${id}`,
//         exclusivity:'ignore',
//         layer: 'overlay',
//         keymode: 'on-demand',
//         visible: false,
//         anchor: ['top', 'bottom', 'left', 'right'],
//         child: Widget.Box({
//             vertical: true,
//             children: [
//                 clickCloseRegion({ name: 'cheatsheet' }),
//                 Widget.Box({
//                     children: [
//                         clickCloseRegion({ name: 'cheatsheet' }),
//                         widgetContent,
//                         clickCloseRegion({ name: 'cheatsheet' }),
//                     ]
//                 }),
//                 clickCloseRegion({ name: 'cheatsheet' }),
//             ],
//             setup: (self) => self.on('key-press-event', (widget, event) => { // Typing
//                 // Whole sheet
//                 if (checkKeybind(event, userOptions.asyncGet().keybinds.cheatsheet.nextTab))
//                     sheetContents.forEach(tab => tab.nextTab())
//                 else if (checkKeybind(event, userOptions.asyncGet().keybinds.cheatsheet.prevTab))
//                     sheetContents.forEach(tab => tab.prevTab())
//                 else if (checkKeybind(event, userOptions.asyncGet().keybinds.cheatsheet.cycleTab))
//                     sheetContents.forEach(tab => tab.cycleTab())
//                 // Keybinds
//                 if (sheets.attribute.names[sheets.attribute.shown.value] == 'Keybinds') { // If Keybinds tab is focused
//                     if (checkKeybind(event, userOptions.asyncGet().keybinds.cheatsheet.keybinds.nextTab)) {
//                         sheetContents.forEach((sheet) => {
//                             const toSwitchTab = sheet.attribute.children[sheet.attribute.shown.value];
//                             toSwitchTab.nextTab();
//                         })
//                     }
//                     else if (checkKeybind(event, userOptions.asyncGet().keybinds.cheatsheet.keybinds.prevTab)) {
//                         sheetContents.forEach((sheet) => {
//                             const toSwitchTab = sheet.attribute.children[sheet.attribute.shown.value];
//                             toSwitchTab.prevTab();
//                         })
//                     }
//                 }
//             })
//         })
//     });
// }



import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import { setupCursorHover } from "../.widgetutils/cursorhover.js";
import PopupWindow from '../.widgethacks/popupwindow.js';
import Keybinds from "./keybinds.js";
import TmuxKeybindsViewer from "./tmuxKeybindsViewer.js";  // Importamos el nuevo componente
import { ExpandingIconTabContainer } from '../.commonwidgets/tabcontainer.js';
import { checkKeybind } from '../.widgetutils/keybind.js';
import clickCloseRegion from '../.commonwidgets/clickcloseregion.js';
import PeriodicTable from "./periodictable.js";
import { getString } from '../../i18n/i18n.js';

const cheatsheets = [
    {
        name: getString('Keybinds'),
        materialIcon: 'keyboard',
        contentWidget: Keybinds,
    },
    {
        name: getString('Tmux'),  // Nombre para la pestaña de tmux
        materialIcon: 'terminal', // Icono para tmux (puedes cambiarlo)
        contentWidget: TmuxKeybindsViewer, // Nuestro nuevo componente
    },
    {
        name: getString('Periodic table'),
        materialIcon: 'experiment',
        contentWidget: PeriodicTable,
    },
];

const CheatsheetHeader = () => Widget.CenterBox({
    vertical: false,
    startWidget: Widget.Box({}),
    centerWidget: Widget.Box({
        vertical: true,
        className: "spacing-h-15",
        children: [
            Widget.Box({
                hpack: 'center',
                className: 'spacing-h-5 cheatsheet-title',
                children: [
                    Widget.Label({
                        hpack: 'center',
                        css: 'margin-right: 0.682rem;',
                        className: 'txt-title',
                        label: getString('Cheat sheet'),
                    }),
                    Widget.Label({
                        vpack: 'center',
                        className: "cheatsheet-key txt-small",
                        label: "",
                    }),
                    Widget.Label({
                        vpack: 'center',
                        className: "cheatsheet-key-notkey txt-small",
                        label: "+",
                    }),
                    Widget.Label({
                        vpack: 'center',
                        className: "cheatsheet-key txt-small",
                        label: "/",
                    })
                ]
            }),
        ]
    }),
    endWidget: Widget.Button({
        vpack: 'start',
        hpack: 'end',
        className: "cheatsheet-closebtn icon-material txt txt-hugeass",
        onClicked: () => {
            closeWindowOnAllMonitors('cheatsheet');
        },
        child: Widget.Label({
            className: 'icon-material txt txt-hugeass',
            label: 'close'
        }),
        setup: setupCursorHover,
    }),
});

const sheetContents = [];
const SheetContent = (id) => {
    sheetContents[id] = ExpandingIconTabContainer({
        tabsHpack: 'center',
        tabSwitcherClassName: 'sidebar-icontabswitcher',
        transitionDuration: userOptions.asyncGet().animations.durationLarge * 1.4,
        icons: cheatsheets.map((api) => api.materialIcon),
        names: cheatsheets.map((api) => api.name),
        children: cheatsheets.map((api) => api.contentWidget()),
        onChange: (self, id) => {
            self.shown = cheatsheets[id].name;
        }
    });
    return sheetContents[id];
}

export default (id) => {
    const sheets = SheetContent(id);
    const widgetContent = Widget.Box({
        vertical: true,
        className: "cheatsheet-bg spacing-v-5",
        children: [
            CheatsheetHeader(),
            sheets,
        ]
    });
    return PopupWindow({
        monitor: id,
        name: `cheatsheet${id}`,
        exclusivity:'ignore',
        layer: 'overlay',
        keymode: 'on-demand',
        visible: false,
        anchor: ['top', 'bottom', 'left', 'right'],
        child: Widget.Box({
            vertical: true,
            children: [
                clickCloseRegion({ name: 'cheatsheet' }),
                Widget.Box({
                    children: [
                        clickCloseRegion({ name: 'cheatsheet' }),
                        widgetContent,
                        clickCloseRegion({ name: 'cheatsheet' }),
                    ]
                }),
                clickCloseRegion({ name: 'cheatsheet' }),
            ],
            setup: (self) => self.on('key-press-event', (widget, event) => { // Typing
                // Whole sheet
                if (checkKeybind(event, userOptions.asyncGet().keybinds.cheatsheet.nextTab))
                    sheetContents.forEach(tab => tab.nextTab())
                else if (checkKeybind(event, userOptions.asyncGet().keybinds.cheatsheet.prevTab))
                    sheetContents.forEach(tab => tab.prevTab())
                else if (checkKeybind(event, userOptions.asyncGet().keybinds.cheatsheet.cycleTab))
                    sheetContents.forEach(tab => tab.cycleTab())
                // Keybinds
                if (sheets.attribute.names[sheets.attribute.shown.value] == 'Keybinds') { // If Keybinds tab is focused
                    if (checkKeybind(event, userOptions.asyncGet().keybinds.cheatsheet.keybinds.nextTab)) {
                        sheetContents.forEach((sheet) => {
                            const toSwitchTab = sheet.attribute.children[sheet.attribute.shown.value];
                            toSwitchTab.nextTab();
                        })
                    }
                    else if (checkKeybind(event, userOptions.asyncGet().keybinds.cheatsheet.keybinds.prevTab)) {
                        sheetContents.forEach((sheet) => {
                            const toSwitchTab = sheet.attribute.children[sheet.attribute.shown.value];
                            toSwitchTab.prevTab();
                        })
                    }
                }
                // Tmux keybinds - añadimos soporte similar para la navegación en tmux
                if (sheets.attribute.names[sheets.attribute.shown.value] == 'Tmux') { // Si la pestaña de Tmux está enfocada
                    if (checkKeybind(event, userOptions.asyncGet().keybinds.cheatsheet.keybinds.nextTab)) {
                        sheetContents.forEach((sheet) => {
                            const toSwitchTab = sheet.attribute.children[sheet.attribute.shown.value];
                            toSwitchTab.nextTab();
                        })
                    }
                    else if (checkKeybind(event, userOptions.asyncGet().keybinds.cheatsheet.keybinds.prevTab)) {
                        sheetContents.forEach((sheet) => {
                            const toSwitchTab = sheet.attribute.children[sheet.attribute.shown.value];
                            toSwitchTab.prevTab();
                        })
                    }
                }
            })
        })
    });
}
