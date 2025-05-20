export const tmuxKeybindList = [
  {
    "icon": "dashboard",
    "name": "Tmux: Sesiones",
    "binds": [
      { "keys": ["Ctrl", "b", "s"], "action": "Listar sesiones" },
      { "keys": ["Ctrl", "b", "$"], "action": "Renombrar sesión actual" },
      { "keys": ["Ctrl", "b", "d"], "action": "Desconectar de la sesión (detach)" },
      { "keys": ["Ctrl", "b", ")"], "action": "Siguiente sesión" },
      { "keys": ["Ctrl", "b", "("], "action": "Sesión anterior" }
    ],
    "id": 1
  },
  {
    "icon": "window",
    "name": "Tmux: Ventanas",
    "binds": [
      { "keys": ["Ctrl", "b", "c"], "action": "Crear nueva ventana" },
      { "keys": ["Ctrl", "b", "w"], "action": "Listar ventanas" },
      { "keys": ["Ctrl", "b", "n"], "action": "Siguiente ventana" },
      { "keys": ["Ctrl", "b", "p"], "action": "Ventana anterior" },
      { "keys": ["Ctrl", "b", "0-9"], "action": "Ir a ventana #" },
      { "keys": ["Ctrl", "b", ","], "action": "Renombrar ventana actual" },
      { "keys": ["Ctrl", "b", "&"], "action": "Cerrar ventana actual" },
      { "keys": ["Ctrl", "b", "f"], "action": "Buscar ventana" }
    ],
    "id": 2
  },
  {
    "icon": "grid_view",
    "name": "Tmux: Paneles",
    "binds": [
      { "keys": ["Ctrl", "b", "\""], "action": "Dividir panel horizontalmente" },
      { "keys": ["Ctrl", "b", "%"], "action": "Dividir panel verticalmente" },
      { "keys": ["Ctrl", "b", "o"], "action": "Cambiar al siguiente panel" },
      { "keys": ["Ctrl", "b", ";"], "action": "Alternar entre último y actual panel" },
      { "keys": ["Ctrl", "b", "↑"], "action": "Ir al panel superior" },
      { "keys": ["Ctrl", "b", "↓"], "action": "Ir al panel inferior" },
      { "keys": ["Ctrl", "b", "←"], "action": "Ir al panel izquierdo" },
      { "keys": ["Ctrl", "b", "→"], "action": "Ir al panel derecho" },
      { "keys": ["Ctrl", "b", "q"], "action": "Mostrar números de panel" },
      { "keys": ["Ctrl", "b", "q", "0-9"], "action": "Ir al panel #" },
      { "keys": ["Ctrl", "b", "z"], "action": "Zoom panel actual" },
      { "keys": ["Ctrl", "b", "}"], "action": "Intercambiar con panel siguiente" },
      { "keys": ["Ctrl", "b", "{"], "action": "Intercambiar con panel anterior" },
      { "keys": ["Ctrl", "b", "x"], "action": "Cerrar panel actual" },
      { "keys": ["Ctrl", "b", "!"], "action": "Convertir panel en ventana" }
    ],
    "id": 3
  },
  {
    "icon": "resize",
    "name": "Tmux: Redimensionar paneles",
    "binds": [
      { "keys": ["Ctrl", "b", "Ctrl", "↑"], "action": "Redimensionar panel hacia arriba" },
      { "keys": ["Ctrl", "b", "Ctrl", "↓"], "action": "Redimensionar panel hacia abajo" },
      { "keys": ["Ctrl", "b", "Ctrl", "←"], "action": "Redimensionar panel hacia la izquierda" },
      { "keys": ["Ctrl", "b", "Ctrl", "→"], "action": "Redimensionar panel hacia la derecha" },
      { "keys": ["Ctrl", "b", "Alt", "↑"], "action": "Redimensionar panel hacia arriba (5 celdas)" },
      { "keys": ["Ctrl", "b", "Alt", "↓"], "action": "Redimensionar panel hacia abajo (5 celdas)" },
      { "keys": ["Ctrl", "b", "Alt", "←"], "action": "Redimensionar panel hacia la izquierda (5 celdas)" },
      { "keys": ["Ctrl", "b", "Alt", "→"], "action": "Redimensionar panel hacia la derecha (5 celdas)" }
    ],
    "id": 4
  },
  {
    "icon": "content_copy",
    "name": "Tmux: Modo copia",
    "binds": [
      { "keys": ["Ctrl", "b", "["], "action": "Entrar en modo copia" },
      { "keys": ["Space"], "action": "Comenzar selección" },
      { "keys": ["Enter"], "action": "Copiar selección" },
      { "keys": ["Esc"], "action": "Salir del modo copia" },
      { "keys": ["Ctrl", "b", "]"], "action": "Pegar contenido del buffer" },
      { "keys": ["Ctrl", "b", "="], "action": "Elegir buffer para pegar" }
    ],
    "id": 5
  },
  {
    "icon": "settings",
    "name": "Tmux: Configuración",
    "binds": [
      { "keys": ["Ctrl", "b", ":"], "action": "Entrar en línea de comandos" },
      { "keys": ["Ctrl", "b", "t"], "action": "Mostrar reloj" },
      { "keys": ["Ctrl", "b", "?"], "action": "Listar todos los atajos" },
      { "keys": ["Ctrl", "b", "r"], "action": "Recargar configuración (custom)" },
      { "keys": ["Ctrl", "b", "~"], "action": "Mostrar mensajes de tmux" }
    ],
    "id": 6
  },
  {
    "icon": "sync",
    "name": "Tmux: Sincronización",
    "binds": [
      { "keys": ["Ctrl", "b", ":setw synchronize-panes on"], "action": "Activar sincronización de paneles" },
      { "keys": ["Ctrl", "b", ":setw synchronize-panes off"], "action": "Desactivar sincronización de paneles" }
    ],
    "id": 7
  },
  {
    "icon": "layout",
    "name": "Tmux: Layouts",
    "binds": [
      { "keys": ["Ctrl", "b", "Space"], "action": "Cambiar al siguiente layout" },
      { "keys": ["Ctrl", "b", "Alt", "1"], "action": "Layout even-horizontal" },
      { "keys": ["Ctrl", "b", "Alt", "2"], "action": "Layout even-vertical" },
      { "keys": ["Ctrl", "b", "Alt", "3"], "action": "Layout main-horizontal" },
      { "keys": ["Ctrl", "b", "Alt", "4"], "action": "Layout main-vertical" },
      { "keys": ["Ctrl", "b", "Alt", "5"], "action": "Layout tiled" }
    ],
    "id": 8
  }
];
