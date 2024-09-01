
# nodeapp

Para ejecutar la app primero usa **docker compose up --build** en la carpeta raiz nodeapp

Una vez hecho esto ya podremos probar la app en los siguientes endpoints:

**Register**

http://localhost:3001/api/auth/register  

estructura del JSON para el body:

{
  "username": "testuser",
  "password": "testpassword"
}

**Login**

http://localhost:3001/api/auth/login


estructura del JSON para el body:

{
  "username": "testuser",
  "password": "testpassword"
}

**Logout**


http://localhost:3001/api/auth/logout

No JSON requerido

**Restaurantes**

http://localhost:3001/api/restaurants/search

por location

{
  "location": "New York"
}


o usar coordenadas


{
  "latitude": 37.7749,
  "longitude": -122.4194
}

**Transactions**

http://localhost:3001/api/transactions

No JSON requerido
