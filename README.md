BOT plantilla para discord
===

>"Everything That Lives Is Designed To End.  They Are Perpetually Trapped In A Never-Ending Spiral Of Life And Death.  However, Life Is All About The Struggle Within This Cycle. That Is What 'We' Believe." - Nier Automata

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbeebom.com%2Fwp-content%2Fuploads%2F2018%2F02%2Fdiscord-bots.jpg&f=1&nofb=1"
     alt="Markdown Monster icon"
     style="text-align: center; display: inline-block; margin-left:35%" width=180 heigth=100 />

Bot diseñado para servir como plantilla para creación de nuevos bots de discord, 
incluye las funcionalidades básicas de:

* index.js 
* Folder de Frases 
* Recorrido de Folder de Frases en index.js 
* help Dinámico ¡Incluye descripción de parametros y consulta individual de frases! 
* Estructura de Frases separada del index.js 
* Función reload para comandos protegida por llave 
* Archivo config.json con el prefix 

Instalación y configuración del proyecto
-
#### ¡Importante! Las instrucciones aqui presentes para instalar Node.JS son para Linux Ubuntu, en caso de usar algún otro S.O. o alguna distribución que no sea basada en debian, buscar su equivalente
Primero verificaremos si contamos con NodeJs en nuestro equipo, para ello ejecutaremos el siguiente comando y debería aparecer algo similar (El número de versión puede cambiar) en nuestra consola

~~~
$ node -v
v10.19.0
~~~

En caso de no contar con node podremos instalarlo con el siguiente comando 

~~~
$ sudo apt update
$ sudo apt install nodejs npm
~~~

 ** *Nota: En Ubuntu 20.04 el paquete incluído por defecto de NodeJS en nuestros repositorios viene con la versión 10.19.0*  **

Para clonar el proyecto de github a través de ***HTTPS*** realizaremos lo siguiente en consola *Nota: Ya tenemos que contar con git y tenerlo configurado*

~~~
$ git clone https://github.com/MrDonTacos/discord-bot-test.git <folder-donde-crear>
~~~

Lo siguiente será descargar todos los modulos del proyecto tecleando en consola lo siguiente, posicionados sobre el proyecto

~~~
npm install
~~~

Lo siguiente será incluír un archivo _.env_ en la raíz de nuestro directorio
En el archivo _.env_ incluíremos las siguientes dos variables

~~~
PRIVATE_TOKEN = <Token-Bot>
DEVELOPER_KEY = <Llave-reload>
~~~

***PRIVATE_TOKEN***: Es el token único asignado a nuestro BOT, lo encontraremos en discord.js al crear o ir a alguno de nuestros bots. 
_Más información en [discord.js](https://discordjs.guide)_

***DEVELOPER_KEY***: Llave que se usará para acceder al comando reload

Estructura del proyecto
-
El proyecto se basa en el tutorial que provee ***[discord.js](https://discordjs.guide)*** , este sigue la siguiente estructura
* Commands
    * args-info.js
    * greet.js
    * help.js
    * ping.js
    * reload.js
    * stop.js
* config.json
* index.js
* package-lock.json
* package.json
* README.md

Crear Comandos
-
Una vez comprendido lo anterior y tener todo listo, podremos proceder a crear o eliminar los comandos ya existentes.
Para crear un nuevo comando bastará con crear un nuevo archvo.js dentro de la carpeta *Commands*
~~~
> Commands
    tu-comando.js
~~~
sientete libre de eliminar todos los comandos anteriores de ser necesario, estos archivos no afectaran al funcionamiento de tu bot.

***¡Importante!*** 
Leer el archvo greet.js para más ayuda sobre como definir un comando sin parametros, leer el archivo args-info.js para más ayuda sobre como definir un comando con parametros

Comando help y reload
-
#### help
El comando help actualmente se encuentra configurado para mostrar de la siguiente forma tus comandos

~~~
Lista de comandos disponibles: 

.-args-info <user> <role>
.-greet Greet someone
.-help [command name]
.-ping Pong!
.-reload Recarga los comandos del bot (Solo disponible para desarrolladores)
.-stop Stoping the cars
.-<comando> <parametros> (En caso de no contar con parametros se despliega la descripción del comando)

Para obtener mayor información sobre un comando, utilizar .-help [command name] para obtener una descripción especifica
~~~

#### reload
El comando reoload está configurado actualmente para funcionar con una llave que será pasada como primer parametro, está tendrá que ser igual a la variable DEVELOPER_KEY parra que pueda ser accionado, el segundo parametro será el comando que se le quiera aplicar el refresh

Archivo index.js
-
Es el archivo principal en el que controlaremos los estados de nuestro bot, en el se realizan los procesos de lectura y asignación de comando, verificación de token y asignación de prefijo

config.json
-
Archivo que contiene el caractér que quedrémos que dispare los comandos del bot, este puede ser modificado sin problemas

~~~
{
    "prefix": "caractér-diparador" //!, .-, ., ...
}
~~~

Inciar nuestro BOT
-
Para iniciar nuestro bot ocuparemos posicionarnos en consola (o utilizar la terminal de nuestro editor de texto en caso de contar con ella) sobre la raíz de nuestro folder y ejecutaremos el siguiente comando

~~~
$ node index.js
~~~

***¡Felicidades!*** Nuestro BOT ahora se encuentra online 
