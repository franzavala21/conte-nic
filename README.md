# Conte Nic · Sistema de gestión de contenedores

Demo navegable del sistema interno para **Conte Nic** (alquiler de contenedores en Sierras Chicas, Córdoba).
Sirve para mostrarle al dueño cómo funcionaría el sistema antes de desarrollar la versión completa.

> Todos los datos son **ficticios** y se generan al abrir la página, tomando la fecha del día como "hoy".
> Los cambios que se hacen en la demo no se guardan: al recargar vuelve al estado inicial.

## Cómo abrirla

Es un único archivo, `index.html`. Se abre con doble clic en cualquier navegador, sin instalar nada.
Necesita internet solo para cargar las tipografías.

También se puede publicar con **GitHub Pages** (Settings → Pages → Deploy from branch → `main` / root).

## Modelo de datos (borrador)

- `docs/modelo-de-datos.html`: diagrama interactivo de las tablas y sus relaciones, recorrido de un pedido, datos que se calculan y cómo se importa el Excel.
- `db/schema.prisma`: el mismo modelo en Prisma (PostgreSQL), validado. La conexión va en `prisma.config.ts` (variable `DATABASE_URL` en un `.env`).

## Versión 3 · modificaciones del 06/10

- **Ingreso con usuario y contraseña**. Tres perfiles: Administración (Mili y Camilo, ven todo), Ventas y Logística. Usuarios de prueba: `mili`, `camilo`, `belen`, `lucia`, contraseña `conte`.
- **Agenda**: filtros por localidad, barrio y pendiente de confirmación; sin columnas Chofer ni Contenedor; Cant. entre Dirección y Horario. Logística ya no ve la Agenda.
- **Nuevo pedido**: CUIT, servicio *Extensión de tiempo* (corre la fecha de retiro, precio lo pone Ventas), efectivo cobrado por FWU 010 / EPK 581 / RXB 892 / Oficina, datos de factura y remito (N.º, firmado, foto), que pasan de Logística a Ventas.
- **Tablero del día**: Por asignar y Retiros funcionan como pestañas; filtro por localidad y barrio.
- **Retiro**: hora de retiro y hora en que se dejó en el basural.
- **Choferes**: cantidad de basurales por chofer y vista por servicio (Entrega, Retiro, Recambio, Basural).
- **Contenedores**: alta de contenedor nuevo y cambio de estado y ubicación.
- **Pagos**: las transferencias las verifica Administración; muestra lo que queda en limpio (cobrado − gastos − sueldos).
- Solo Administración: **Facturación** (verificar cada factura contra la razón social en el banco, listado por cliente), **Grupo Chamba** (cuenta corriente y diferencia a devolver), **Sueldos** (semanal y adelantos, efectivo/transferencia/comprobante) y **Gastos** (categoría y subcategoría).
- Modelo de datos v2: nuevas tablas `Invoice`, `Employee`, `SalaryPayment`, `Expense`, `ExpenseCategory`, `Setting`.

## Versión 2 · cambios de la reunión con el cliente

- **Inicio** (lo ven todos): resumen del día con pedidos, transferencias SAS / YPF / Otro, efectivo, deudores y Chamba; contenedores en calle, en Simonna, en Lote Paraguay y en otro lugar; viajes a cada basural; combustible por chofer.
- **Agenda** (antes "Operaciones"): una tabla por día con N.º, cantidad, cliente, dirección, horario, chofer, contenedor, pago, observaciones y estado. Filtros: hoy, mañana, esta semana, este mes, todas las fechas o un día puntual.
- **Transferencias**: al elegir transferencia se indica la cuenta (SAS, YPF u Otro). Ventas verifica que llegó.
- **Contenedores** con nombre `CN-000 | DETALLE | medida` y ubicación (en calle, Simonna, Lote Paraguay, otro lugar).
- **Entregas y Retiros** filtrables por barrio, con opción de combinar una entrega y un retiro en el mismo viaje.
- **Etiqueta "Pendiente de confirmación"** para pedidos que el cliente todavía no confirmó.
- **Combustible**: cuenta corriente YPF (transferencias de clientes menos cargas) y litros/importe por chofer.
- **Basurales**: cada retiro registra a qué basural fue.
- **Tablero del día** con solo "Por asignar" y "Retiros".
- **Mapa real** (Leaflet con OpenStreetMap y Esri, gratuito y sin clave, con vista satelital) con 3 estados: en cliente (verde), por vencer (amarillo) y vencido (rojo). Si no hay conexión, muestra un esquema de la zona.
- **Link de Google Maps** al agendar un pedido: si trae coordenadas, el pedido se ubica en el punto exacto del mapa. El link se ve en la Agenda, Entregas, Retiros, el Tablero y la ficha del pedido.
- **Horario de retiro**: se acuerda en Retiros y se registra la hora real al marcar el retiro.
- Pestañas por perfil: Logística y Ventas ven Inicio, Agenda, Entregas, Retiros, Choferes, Combustible, Basurales, Contenedores y Mapa; Ventas además Pagos; administrador y dueño ven todo.

## Qué incluía la versión 1

- **Ingreso por perfil**: Administrador, Ventas, Logística y Dueño. Cada uno ve solo lo que necesita.
- **Inicio**: contenedores (totales, operativos, disponibles, en clientes, pendientes de retiro, en reparación), operaciones, pagos, servicios por chofer y alertas. Se filtra por hoy, semana, mes o rango.
- **Buscador global**: responde "¿dónde está el CN-056?" con el cliente y la dirección.
- **Tablero del día** (logística): por asignar, programadas, en camino y retiros, con botones para registrar cada paso.
- **Operaciones**: alta en un formulario simple, con aviso de cliente duplicado. Cada operación se divide en comercial, logística y pago.
- **Contenedores**: tabla con filtros y ficha con historial completo de movimientos.
- **Retiros**: semáforo verde / amarillo / rojo según el plazo.
- **Mapa**: contenedores en clientes por localidad (esquema).
- **Clientes, Pagos, Choferes, Reportes, Usuarios y permisos, Historial de cambios**.

## Reglas que ya muestra la demo

- La información se carga una sola vez: ventas crea la operación y logística completa solo su parte.
- Al asignar un contenedor pasa a *En cliente*; al retirarlo vuelve a *Disponible* o pasa a *En reparación*.
- Un recambio entrega un contenedor nuevo y retira el anterior en el mismo paso.
- Nada se borra definitivamente: las operaciones se cancelan y cada acción queda en el historial.

## Próximo paso

Versión real con React + TypeScript, Node.js, PostgreSQL (Prisma) y Leaflet, más la importación de la planilla histórica.
