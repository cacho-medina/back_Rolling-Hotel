# Servidor Rolling Hotel

### Descripcion

Proyecto para gestionar informacion del lado del servidor de Rolling Hotel. Gestionar reservar, registro y login de usuarios,
gestion de habitaciones.

### Instalacion

1. Clona el proyecto
2. Dirigete a la carpeta `/backend-RollingHotel`
3. Instala las dependencias con `npm install`
4. Crea un archivo `.env` en la raiz del proyecto y coloca las variables de puerto (`PORT`), key secreta de jwt (`JWT_SECRET_KEY`) y la uri de mongo (`MONGODB_URI`)
5. Corre el proyecto con `npm run dev`

### Demo

["LINK"](https://server-rollinghotel.vercel.app/)

### Endpoints
Habitaciones
```
GET /api/habitacion
GET /api/habitacion/${id}
POST /api/habitacion
DELETE /api/habitacion/${id}
PUT /api/habitacion/${id}
```
Usuarios
```
GET /api/usuario
GET /api/usuario/${id}
POST /api/usuario
DELETE /api/usuario/${id}
PUT /api/usuario/${id}
```
Reservas
```
GET /api/reservas
GET /api/reservas/${id}
POST /api/reservas
DELETE /api/reservas/${id}
```
