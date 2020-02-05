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
npm install sass-mediaquery-singleline
```


### How to import

On your scss (with webpack), add:

```scss
@import '~sass-mediaquery-singleline/main';
```

### The calc is based on `vw` metric considering the desktop width and mobile width providing by designer's layout (Figma, Zeplin, PSD, etc).

So, you **need** to change the below sass variables to your respective layout viewport widths:

```scss
// default values
$deskSize: 1920; // px
$mobileSize: 768; // px
```

### Config

```scss
// availables variables
$deskSize: 1920 !default; // px
$mobileSize: 768 !default; // px
$allExact: false !default;
$considerMinimalFont: true !default;
  $minFont: 10 !default; // px
  $minFontResolution: 1280 !default; // px
```

- `deskSize` (Number) Desktop **width** defined by the designer layout
- `mobileSize` (Number) Mobile **width** defined by the designer layout
- `allExact` (Boolean) Defines if **all** your values will be exactly what you put
- `considerMinimalFont` (Boolean) Defines if you want se a minimal font on tiny resolutions(`minFontResolution`)
- `minFont` (Number) The minimal font according to defined resolution(`minFontResolution`)
- `minFontResolution` (Number) Defines the resolution that `minFont` will be applied

### Usage:

```scss
.an-element {
  @include attr(height, 200, 140);  // height 200(calculated) on desk and height 140(calculated) on mobile
  @include attr(display, flex, block);  // display: flex on desk and display: block on mobile
  @include attr(flex-direction, false, column);  // media mobile with flex-direction: column, but on desk wasn't created
  @include mediaAttr(height, 100, 320);  // media max-width: 320px with height: 100px(calculated)
  @include attr(width, 20px, 15px, true);  // 'true' to no calculated value
}
```

- **`attr($attr, $desk, $mobile, $exact)`** Set an attribute responsible equals to desktop and mobile according to designer's resolutions
    - **`attr`** (CSS Attribute) [**Required**] The attribute name that you want responsible and/or calculated
    - **`desk`** (Number) [Not Required, can be `false`] The desktop resolution value *according to designer's layout*
    - **`mobile`** (Number) [Not Required, can be `false`] The mobile resolution value *according to designer's layout*
    - **`exact`** (Boolean) [Not Required, Default `false`] Defines if **all** your values will be exactly what you put

- **`mediaAttr($attr, $value, $resolution)`** Set an attribute responsible according to defined resolution parameter
    - **`attr`** (CSS Attribute) [**Required**] The attribute name that you need responsible and/or calculated
    - **`value`** (Number) [**Required**] The resolution value that will be applied to `resolution`
    - **`resolution`** (Number[px]|CSS Media Condition) [**Required**] The resolution that the value will be applied
    - **`exact`** (Boolean) [Not Required, Default `false`] Defines if **all** your values will be exactly what you put

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="gregorisoria" data-slug-hash="BayPwmW" data-pen-title="SASS MediaQuery SingleLine Sample">
  <span>See the Pen <a href="https://codepen.io/gregorisoria/pen/BayPwmW">
  SASS MediaQuery SingleLine Sample</a> by Grégori Sória (<a href="https://codepen.io/gregorisoria">@gregorisoria</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<!--<script async src="https://static.codepen.io/assets/embed/ei.js"></script>-->


[![CodePen](https://s3.amazonaws.com/media.eremedia.com/wp-content/uploads/2018/05/31112343/Codepen.png)](https://codepen.io/gregorisoria/pen/BayPwmW)

### Tests
`npm run test`

<br><br>
##### Tip: Use a css minifier

### Licence
sass-mediaquery-singleline is open-sourced software licensed under the [MIT license](LICENSE.md).