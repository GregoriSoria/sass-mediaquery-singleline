<p align="center">
  <a href="https://www.npmjs.com/package/sass-mediaquery-singleline">
    <img src="http://gssystems.com.br/files/sass-mediaquery-singleline.png" alt="SASS MediaQuery SingleLine NPM" width="420">
  </a>
</p>
<p align="center">
  <img src="https://img.shields.io/npm/dt/sass-mediaquery-singleline" alt="SASS MediaQuery SingleLine NPM Downloads">
  <img src="https://badge.fury.io/js/sass-mediaquery-singleline.svg" alt="SASS MediaQuery SingleLine NPM Version">
  <img src="https://img.shields.io/github/release-date/GregoriSoria/sass-mediaquery-singleline" alt="SASS MediaQuery SingleLine NPM Release Date">
</p>

<h1 align="center">sass-mediaquery-singleline</h1>
SASS Media queries on a single line.

**Never** again use media queries!


### Install

```bash
npm install sass-mediaquery-singleline --save
```


### How to import

On your scss (with webpack), add:

```scss
@import '~sass-mediaquery-singleline/main';
```

### The calc is based on `vw` metric considering the desktop width and mobile width - whatever your metric unit _(px, pt, etc)_ :D - providing by designer's layout (Figma, Zeplin, PSD, Sketch, etc).

So, you **need** to change the below sass variables to your respective layout viewport widths:

```scss
// default values
$deskSize: 1920;
$mobileSize: 375;
```

### Custom variables

```scss
// custom available variables
$deskSize: 1920 !default;
$mobileSize: 375 !default;
$mobileIdentifier: (orientation: portrait), (max-width: 768px) !default;
$considerMinimalFont: true !default;
  $minFont: 10 !default;
  $minFontResolution: 1280 !default;
```

- `deskSize` (Number) Desktop **width** defined by the designer layout
- `mobileSize` (Number) Mobile **width** defined by the designer layout
- `mobileIdentifier` (Lists) Defines @media mobile identifier to start calc with third attr() function param
- `considerMinimalFont` (Boolean) Defines if you want se a minimal font on tiny resolutions(`minFontResolution`)
- `minFont` (Number) The minimal font according to defined resolution(`minFontResolution`)
- `minFontResolution` (Number) Defines the resolution that `minFont` will be applied

### Usage:

```scss
.an-element {
  @include attr(height, 200, 140);  // height 200(calculated) on desk and height 140(calculated) on mobile
  @include attr(display, flex, block);  // display: flex on desk and display: block on mobile
  @include attr(flex-direction, false, column);  // media mobile with flex-direction: column, but on desk wasn't created
  @include mediaAttr(height, 100, 320);  // media max-width: 320px with height: 100[calculated]
  @include attr(width, 20px, 15px);  // values with units will be put exactly what you type
}
```

- **`attr($attr, $desk, $mobile)`** Set an attribute responsible equals to desktop and mobile according to designer's resolutions
    - **`attr`** (CSS Attribute) [**Required**] The attribute name that you want responsible and/or calculated
    - **`desk`** (Number) [Not Required, can be `false`] The desktop resolution value *according to designer's layout* or a value with unit to set an exact value
    - **`mobile`** (Number) [Not Required, can be `false`] The mobile resolution value *according to designer's layout* or a value with unit to set an exact value

- **`mediaAttr($attr, $value, $resolution)`** Set an attribute responsible according to defined resolution parameter
    - **`attr`** (CSS Attribute) [**Required**] The attribute name that you need responsible and/or calculated
    - **`value`** (Number) [**Required**] The resolution value that will be applied to `resolution` or a value with unit to set an exact value
    - **`resolution`** (Number|CSS Media Condition) [**Required**] The resolution that the value will be applied

<br>
<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="gregorisoria" data-slug-hash="BayPwmW" data-pen-title="SASS MediaQuery SingleLine Sample">
  <span>See the Pen <a href="https://codepen.io/gregorisoria/pen/BayPwmW">
  SASS MediaQuery SingleLine Sample</a> by Grégori Sória (<a href="https://codepen.io/gregorisoria">@gregorisoria</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>


<p align="center">
  <a href="https://codepen.io/gregorisoria/pen/BayPwmW">
    <img src="https://s3.amazonaws.com/media.eremedia.com/wp-content/uploads/2018/05/31112343/Codepen.png" alt="CodePen" width="600">
  </a>
</p>

### Dev
If you want to dev or **test** this mixin, run the command below
`npm run dev`

##### Tip: Use a css minifier

### Licence
sass-mediaquery-singleline is open-sourced software licensed under the [MIT license](LICENSE.md).