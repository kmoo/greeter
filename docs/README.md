# greeter

Greet visitors to your website in their heart language & using the time of day with this tiny JS script. 🌎

## Backstory

I wanted the ability to greet users to my apps and websites in their heart language, so that no matter where they are in the world they could feel welcomed. This script was created to be as light-weight and accessible as possible, so that it can run in less than a second in browsers around the world. It's a simple touch that will make your app or website feel personalized and welcoming!

It uses [NavigatorLanguage.language](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language) properties (which are available in all major browsers) to learn about the user's language, and defaults to English if the language is indeterminable. If the time of day is also indeterminable, we default to a standard greeting in the user's language.

## Examples

![Hindi](hindi.png) ![German](german.png) ![Spanish](spanish.png)

See it in action at my personal site, [lukemoorman.com](https://lukemoorman.com).

## Usage

Include the script in your website, either using `yarn` or `npm` (coming soon!), or with a `script` tag. We recommend at the bottom of the page `body`, like:

```html
 <script src="greeter.js"></script> 
```

Then, add a default greeting to your page, like "Hello!":

```html
<p><span id="greeting">Hello!</span> Welcome to my website!</p>
```

The page will load, and change from the hard-coded default greeting, to the heart-language of the user.

## Language Support

Greet fully supports 91 languages, with partial support for 8 languages! 🌏🌍🌎 To see the full list, check out [Supported Languages](./supported_languages.md)

## How can I get involved?

I welcome PRs to support more languages (I'd love to include all language codes!), regionally-specific greetings, and spelling, grammatical and cultural improvements to the langauge.

## Contributing

- Please reach out to [@kmoo](https://github.com/kmoo). Thanks!
