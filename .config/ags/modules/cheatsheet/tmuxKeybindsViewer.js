const { GLib, Gtk } = imports.gi;
import App from "resource:///com/github/Aylur/ags/app.js";
import * as Utils from "resource:///com/github/Aylur/ags/utils.js";
import Widget from "resource:///com/github/Aylur/ags/widget.js";
import { IconTabContainer } from "../.commonwidgets/tabcontainer.js";
const { Box, Label, Scrollable } = Widget;

// Importar la lista de atajos de tmux desde tu archivo existente
// Asegúrate de ajustar la ruta según sea necesario
import { tmuxKeybindList } from "./tmuxKeybinds.js";

const TMUX_KEYBIND_SECTIONS_PER_PAGE = 3;

const keySubstitutions = {
    "Super": "",
    "Ctrl": "Ctrl",
    "Alt": "Alt",
    "Shift": "Shift",
    "Enter": "Enter",
    "Space": "Space",
    "Up": "↑",
    "Down": "↓",
    "Left": "←",
    "Right": "→",
    "Slash": "/",
    "Hash": "#"
}

const substituteKey = (key) => {
    return keySubstitutions[key] || key;
}

// Componente para mostrar una combinación de teclas
const KeyComponent = (key) => Label({
    vpack: 'center',
    className: 'cheatsheet-key txt-small',
    label: substituteKey(key),
});

// Componente para mostrar una acción
const ActionComponent = (text) => Label({
    xalign: 0,
    label: text,
    className: "txt txt-small cheatsheet-action",
});

// Componente para mostrar una línea de atajo completa
const BindLine = (bindData) => {
    const keysBox = Box({
        className: "spacing-h-5",
        children: bindData.keys.map((key, index) => {
            // Para los modificadores (excepto el último), añadimos un "+" después
            if (index < bindData.keys.length - 1) {
                return Box({
                    className: "spacing-h-2",
                    children: [
                        KeyComponent(key),
                        Label({
                            vpack: 'center',
                            className: 'cheatsheet-key-notkey txt-small',
                            label: "+",
                        })
                    ]
                });
            }
            return KeyComponent(key);
        })
    });

    const actionBox = ActionComponent(bindData.action);

    return Box({
        className: "spacing-h-10 cheatsheet-bind-lineheight",
        children: [keysBox, actionBox]
    });
};

// Componente para mostrar una sección/categoría de atajos
const Section = (sectionData) => {
    const name = Label({
        xalign: 0,
        className: "cheatsheet-category-title txt margin-bottom-10",
        label: sectionData.name,
    });

    const binds = Box({
        vertical: true,
        className: 'spacing-v-5',
        children: sectionData.binds.map(BindLine)
    });

    return Box({
        vertical: true,
        className: 'spacing-v-10',
        children: [name, binds]
    });
};

export default () => {
    const numOfTabs = Math.ceil(tmuxKeybindList.length / TMUX_KEYBIND_SECTIONS_PER_PAGE);
    
    const keybindPages = Array.from({ length: numOfTabs }, (_, i) => ({
        iconWidget: Label({
            className: "txt txt-small",
            label: `${i + 1}`,
        }),
        name: `${i + 1}`,
        child: Box({
            className: 'spacing-h-30',
            children: tmuxKeybindList.slice(
                TMUX_KEYBIND_SECTIONS_PER_PAGE * i, 
                TMUX_KEYBIND_SECTIONS_PER_PAGE * (i + 1)
            ).map(Section),
        }),
    }));
    
    return IconTabContainer({
        iconWidgets: keybindPages.map((kbp) => kbp.iconWidget),
        names: keybindPages.map((kbp) => kbp.name),
        children: keybindPages.map((kbp) => kbp.child),
    });
};

