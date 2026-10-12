# Prueba sintética — Ana

Ejercicio ficticio basado únicamente en screen1.png, screen2.png y screen3.png, vistas en ese orden. Ana tiene 20 años, ayuda en la tienda familiar y no tiene experiencia laboral formal. No hubo clics, navegación ni participación de una persona real.

## Pantalla 1

«Esto de contar la caja sí lo hago en la tienda. Pondría 1530: había mil, entraron 850 y salieron 320. Me ayuda que diga que puedo usar calculadora y que no revisan mi ortografía. “Saldo inicial” supongo que es lo que había al abrir. Pero antes de marcar la casilla me frenaría: ¿qué es el proveedor del modelo? ¿Mis respuestas salen de aquí? Dice “si está habilitada la IA”, pero no sé si está prendida ahorita. Si tengo que aceptar sin saber a quién llega, quizá lo dejaría.»

## Pantalla 2

«Buscaría arriba qué cambió antes de poner otro monto; en esta imagen no alcanzo a ver esa parte, así que no adivinaría. Contaría con mis palabras qué resté y revisaría los apuntes de la tienda. En “qué ayuda utilizaste” buscaría calculadora. Me tranquiliza que no me descalifique, pero “la revisión humana debe tenerla en cuenta” me hace pensar que alguien sí me va a calificar. ¿Quién? “Revisar mi evidencia” suena a un trámite; yo esperaría que diga revisar mis respuestas.»

## Pantalla 3

«Veo que los dos montos coinciden; eso me ayuda. No sé qué es LLM ni “llamada a un modelo”. Si me dicen que explique más, escribiría: esos 200 todavía no entraron a la caja; revisaría dónde anotamos lo fiado. No sé si “comprobantes” significa que necesito una factura. Antes de descargar leería lo de compartir: que no se envía a empleadores me tranquiliza. Pero “para quien revise” todavía suena a que alguien ya lo va a recibir. Yo querría saber que la copia se queda conmigo.»

## Confusiones y pausas

- Mayor posible abandono: consentimiento condicional de IA sin identificar claramente el modo activo y el destino de las respuestas.
- “Saldo inicial”, “evidencia” y “comprobantes” requieren traducir mentalmente a dinero al abrir, respuestas y apuntes o tickets.
- “Sin calificación laboral” convive con referencias a revisión humana y descalificación; queda incierto quién revisa y cuándo.
- “LLM”, “llamada a un modelo” y “checklist ADVERSARY” son lenguaje del equipo, no de Ana.
- La segunda captura corta el cambio del caso: esta prueba no permite juzgar si su explicación completa es clara.

## Arreglo prioritario

Hacer explícito el modo y el uso de datos junto a la casilla, con lenguaje sencillo y verdadero para ese modo. En la demo: «Esta práctica funciona sin IA. Tus respuestas se quedan en esta página hasta que la recargues. Nadie las recibe automáticamente. Puedes descargar una copia y decidir si la compartes». Si hay IA activa, identificar el destino y qué se envía antes de pedir consentimiento. No prometer privacidad que la implementación no cumpla.

## Fix implemented and checked
The consent now explicitly says fictional answers go to this practice server for simulated guidance and do not go to an AI provider in this demo. The backend also requires a separate liveConsent flag for any future live provider use; this UI never sends it. The review screen explains that evidence is a copy of the exercise and nobody automatically reviews it. The changed condition now explains that credit means payment later, not money in the cash drawer. Download identifies its JSON format.

The builder verified the new copy in the browser and repeated the full flow after the change. This is implementation verification, not a second persona session. The persona did not perform clicks; a separate fresh-context synthetic agent inspected the supplied screenshots. Screenshot 2 was partially cropped, a recorded limitation. No real participant, employer, payment or pilot outcome is claimed.
