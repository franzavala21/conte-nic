# Conte Nic · Sistema de gestión de contenedores

Demo navegable del sistema interno para **Conte Nic** (alquiler de contenedores en Sierras Chicas, Córdoba).
Sirve para mostrarle al dueño cómo funcionaría el sistema antes de desarrollar la versión completa.

> Todos los datos son **ficticios** y se generan al abrir la página, tomando la fecha del día como "hoy".
> Los cambios que se hacen en la demo no se guardan: al recargar vuelve al estado inicial.

## Cómo abrirla

Es un único archivo, `index.html`. Se abre con doble clic en cualquier navegador, sin instalar nada.
Necesita internet solo para cargar las tipografías.

También se puede publicar con **GitHub Pages** (Settings → Pages → Deploy from branch → `main` / root).

## Qué incluye

- **Ingreso por perfil**: Administrador, Ventas, Logística y Dueño. Cada uno ve solo lo que necesita.
- **Inicio**: contenedores (totales, operativos, disponibles, en clientes, pendientes de retiro, en reparación), operaciones, pagos, servicios por chofer y alertas. Se filtra por hoy, semana, mes o rango.
- **Buscador global**: responde "¿dónde está el CN-056?" con el cliente y la dirección.
- **Tablero del día** (logística): por asignar, programadas, en camino y retiros, con botones para registrar cada paso.
- **Operaciones**: alta en un formulario simple, con aviso de cliente duplicado. Cada operación se divide en comercial, logística y pago.
- **Contenedores**: tabla con filtros y ficha con historial completo de movimientos.
- **Retiros**: semáforo verde / amarillo / rojo según el plazo.
- **Mapa**: contenedores en clientes por localidad. En la demo es un mapa esquemático; en el sistema final se usa OpenStreetMap + Leaflet.
- **Clientes, Pagos, Choferes, Reportes, Usuarios y permisos, Historial de cambios**.

## Reglas que ya muestra la demo

- La información se carga una sola vez: ventas crea la operación y logística completa solo su parte.
- Al asignar un contenedor pasa a *En cliente*; al retirarlo vuelve a *Disponible* o pasa a *En reparación*.
- Un recambio entrega un contenedor nuevo y retira el anterior en el mismo paso.
- Nada se borra definitivamente: las operaciones se cancelan y cada acción queda en el historial.

## Próximo paso

Versión real con React + TypeScript, Node.js, PostgreSQL (Prisma) y Leaflet, más la importación de la planilla histórica.
