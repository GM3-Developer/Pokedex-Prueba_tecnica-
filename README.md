# ![Pokebola](img/header/Pokeball.png)  Pokedex - MomotoLab
## Prueba_tecnica
La página web está hecho con código nativo/puro/vainilla de HTML, CSS y JavaScript.

En primer lugar, me basé en la guía de diseño que me proporcionaron en Figma. [[Guía de diseño Pokédex (Figma)](https://www.figma.com/file/CLKRSfiiLF2phHB7YeDS2C/Pok%C3%A9dex-(Community)?type=design&node-id=314-3&t=yP3luhyNZJpo5zSb-0)]
Los elementos en HTML según las capas de diseño de dicha Guía, para poder aprovechar el código CSS que Figma proporciona y copiarlos. Para aquellos elementos que, con el código CSS que Figma proporciona, dan problemas los he adaptado según las necesidades.

La página se puede visualizar únicamente en dispositivos de exactamente 360x640 píxeles. Existen dos páginas web. 

La página principal muestra el título con su respectivo ícono de la pokebola. Seguidamente una barra de búsqueda funcional que busca según número o nombre del pokémon, y a la par un botón que al hacer click abre una ventana emergente para poder seleccionar si ordenará por número o nombre del pokémon. Y el resto de la página, el listado de tarjetas con el número y nombre del pokémon con su respectiva imágen. Cada una de las tarjetas, al hacer click sobre una, nos lleva a la segunda página: la página de los detalles.

Decidí utilizar la misma página de detalles para mostrar los datos del pokémon seleccionado. En JavaScript preparé un diccionario con todos los datos de cada pokémon. Y según el datos seleccionado de la página principal, busca el dato correspondiente en el diccionario y lo muestra. También las flechitas están programadas para que se pueda navegar entre los datos del diccionario y muestre la información correspondiente.

Pero dicha decisión me jugó una mala pasada, pues no pude programar la transiciones o animaciones de los elementos correspondientes al navegar entre los detalles de cada pokémon. Sólo está programada la animación cuando la página de detalles se cargó y viene de la página principal.

Me apoyé de la herramienta Inkscape como intermedio para poder copiar en PNG las imágenes y los iconos de Figma y exportarlos como archivo PNG de manera local, dentro del sistema de archivos del proyecto.
Utilicé dos herramientas para probar y visualizar el proyecto: DevTools (Google Chrome) y Blisk.
En DecTools, con la opción "Toggle device toolbar" activada, ajusté la pantalla a 360x640 píxeles para trabajar.
En Blisk me ofrece un listado de dispositivos mobiles, tablets y escritorio para visualizar el proyecto. He seleccionado solamente el dispositivo que corresponde al Samsung Galaxy S7 que tiene la resolución con la que he trabajado.

<details><summary>Tecnologías usadas</summary>
<p>

- [x] HTML.
- [x] CSS.
- [x] JavaScript.

</p>
</details>

<details><summary>Otras herramientas usadas</summary>
<p>
  
- [x] Inkscape.
- [x] GitHub Desktop.
- [x] DevTools (Google Chrome).
- [x] Blisk.
  
</p>
  Blisk es una herramienta para probar una aplicación web, nos ofrece una vista en diferentes dispositivos.
  
  [Página Oficial de Blisk](https://blisk.io/)
  
</details>

[Sitio web para consumir el proyecto (GitHub)](https://gm3-developer.github.io/Pokedex-Prueba_tecnica-/)
[Sitio web para consumir el proyecto (Surge.sh)](http://pokedex.gm3developer.surge.sh/)

# Licencia
Consulte el archivo de [LICENCIA](LICENSE) para conocer los derechos y limitaciones de la licencia (MIT).


