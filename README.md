# sass-mediaquery-singleline
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


### Config

The calc is based on `vw` metric considering the desktop width and mobile width providing by designer's layout.

So, you need to change the below sass variables to your respective layout widths:

```scss
// default values
$deskSize: 1920;
$mobileSize: 768;
```

### EXAMPLES:

```scss
.an-element {
  @include attr(height, 200, 140);  // height 200(calculated) on desk and height 140(calculated) on mobile
  @include attr(display, flex, block);  // display: flex on desk and display: block on mobile
  @include attr(flex-direction, false, column);  // media mobile with flex-direction: column, but on desk wasn't created
  @include mediaAttr(height, 100, 320);  // media max-width: 320px with height: 100px(calculated)
  @include attr(width, 20px, 15px, true);  // 'true' to no calculated value
}
```

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="gregorisoria" data-slug-hash="BayPwmW" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="SASS MediaQuery SingleLine Sample">
  <span>See the Pen <a href="https://codepen.io/gregorisoria/pen/BayPwmW">
  SASS MediaQuery SingleLine Sample</a> by Grégori Sória (<a href="https://codepen.io/gregorisoria">@gregorisoria</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


![CodePen](https://s3.amazonaws.com/media.eremedia.com/wp-content/uploads/2018/05/31112343/Codepen.png)

##### Tip: Use a css minifier
