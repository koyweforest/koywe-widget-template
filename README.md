This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# Koywe Widget

# English (Español más abajo)
# Objetive

Embed Koywe's crypto ramp into any web application, through an overlay. For now, we only support on-ramping (fiat to crypto) operations. Off-ramp coming soon.

## Installation

To install, use npm or yarn

```
# npm
$ npm install koywe-ramp-sdk
```

## Using the SDK

To use the widget simple create an instance of the KoyweRampSDK class and use the show() function to display the overlay

Basic excample:
```
import { KoyweRampSDK } from "koywe-ramp-sdk"

new KoyweRampSDK().show();
```

The widget will automatically close once the user clicks outside the box.

# Configuration

You can customize the informationa and some of the working parameters.

## currencies

A list of currencies that will be offered to the user. By default, all currencies are shown.

You must pass an array of strings, each value containing the symbol of the currencies. You can obtain a full list of available fiat currencies at https://koywe.com

```
new KoyweRampSDK({currencies: ["CLP"]})
```
In this example, the user will only be allowed to select CLP (Chilean Peso).

If you pasa an empty array, it will be ignored and default values will be shown. You can add any string, invalid values will be ignored.

## tokens

The list of tokens allowed to purchase or sell. By default, all available tokens for the given currency are shown.

You must pass an array of strings, each value containing the symbol of the tokens. Multi-chain tokens, such as USDC, should be liste individually according to the default list. For example, USDC on Polygon should be passed as "USDC Polygon". You can obtain a full list of available crypto tokens at https://koywe.com

```
new KoyweRampSDK({tokens: ["ETH"]})
```
In this example, only ETH will be available to transact.

If you pasa an empty array, it will be ignored and default values will be shown. You can add any string, invalid values will be ignored.

Also consider non existent pairs will be ignored. For example, if there are no prices in PEN for the BNB token, when the user selects PEN, the token will not be displayed, even if there are prices in other currencies.

## address

Optional string parameter to setup a wallet address, skiping the step for the user.

```
new KoyweRampSDK({address: "0x402...12"})
```
An invalid or malformed address will be ignored and the user will have to input a valid one.

## email

String parameter to link a user to the transaction. If it's a valid email, the widget will trigger an email with an OTP code and ask for it to the user.

```
new KoyweRampSDK({email: "test@koywe.com"})
```
If the email is invalid, it will ask for a valid one to the user.

## callbackUrl

String param to redirect after paying or navigating outside the widget.

```
new KoyweRampSDK({callbackUrl: "https://partner.com/tx/1245......"})
```
It's important to note that if no url is passed, the user will be redirected to Koywe's website after finishing the transaction.

## clientId

Optional parameter containing the Client ID to use on the widget. Depending on the agreement with Koywe, this ID allows access to different payment methods and conditions.

```
new KoyweRampSDK({apiKey: "2781......"})
```
If no id is passed, the widget will replicate functionality at https://koywe.com

## testing

Optional boolean parameter to activate testing mode (fake transactions).

```
new KoyweRampSDK({testing: true})
```
If parameter is not passed or is passed as false, the widget will point to production (real money).

# Español
# Objetivo

Embeber la rampa de Koywe en cualquier aplicación web, a través de un overlay.

## Instalando el SDK

Para instalar, puedes usar npm o yarn

```
# npm
$ npm install koywe-ramp-sdk
```

## Usando el SDK

Para usar el widget simplemente crea una instancia de la clase KoyweRampSDK y usa el método show()

Un ejemplo básico se ve así:
```
import { KoyweRampSDK } from "koywe-ramp-sdk"

new KoyweRampSDK().show();
```

El Widget se cerrará automaticamente si se hace click fuera de él.

# Configuración

Puedes customizar la información y algunos parámetros de funcionamiento.

## currencies

La lista de monedas que estarán disponibles para el intercambio. Por defecto se muestran todas las monedas disponibles.

El valor a enviar debe ser un Array de strings, donde cada string es el símbolo de la moneda. Puedes consultar las monedas disponibles en nuestro sitio https://koywe.com

```
new KoyweRampSDK({currencies: ["CLP"]})
```
En este ejemplo sólo estará disponible el CLP.

Si se envía un Array vacío, se mostrarán todas las monedas disponibles. Puedes configurar cualquier moneda, pero si no está disponible desde la API se ignorará..

## tokens

La lista de criptomonedas que estarán disponibles para el intercambio. Por defecto se muestran todas las criptos disponibles.

El valor enviado debe ser un Array de strings, donde cada string es el símbolo del cripto que se quiere que esté disponible. Puedes consultar los tokens disponibles en nuestro sitio https://koywe.com

```
new KoyweRampSDK({tokens: ["ETH"]})
```
En este ejemplo sólo estará disponible ETH.

Si se envía un Array vacío, se mostrarán todos los tokens disponibles en la API. Si se envía un cripto que no está disponible no se mostrará.

También ten en consideración que si no existe el par MONEDA-TOKEN, tampoco se mostrará en la lista de tokens. Por ejemplo, si no hay precios en PEN para el token BNB, cuando el usuario elija PEN, BNB no aparecerá disponible.

## address

Un parámetro opcional de tipo string que preestablece la dirección a la que se enviará el cripto, saltando la pantalla de validación e introducción de billetera.

```
new KoyweRampSDK({address: "0x402...12"})
```
Si la billetera no es válida, no se saltará la pantalla de selección y se podrá ingresar otra.

## email

Parámetro tipo String que representa el email que se usará para la compra de crypto, si es válido se enviará inmediatamente un email con el código OTP e iniciar la sesión

```
new KoyweRampSDK({email: "test@koywe.com"})
```
Si el email es inválido, exigirá una nueva dirección.

## callbackUrl

Parámetro tipo String que indica la url a la que redireccionar luego de confirmar un pago o información en sitios externos

```
new KoyweRampSDK({callbackUrl: "2781......"})
```
Ten en cuenta que si no especificas una url, el usuario será redirigido al sitio web de koywe al finalizar la transacción.

## clientId

Parámetro tipo String que indica el id de client a utilizar por el widget. De acuerdo al acuerdo con Koywe, este id permite acceso a distintos medios de pago y otras condiciones operativas.

```
new KoyweRampSDK({apiKey: "2781......"})
```

Si no se envia nada el widget tendrá el comportamiento predeterminado y bloqueará ciertas funcionalidades

## testing

Parámetro booleano opcional para activar el modo de pruebas (transacciones no válidas).

```
new KoyweRampSDK({testing: true})
```
Si el parámetro no se pasa o es false, el widget funcionará con transacciones reales.