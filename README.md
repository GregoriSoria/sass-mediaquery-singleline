# sass-mediaquery
SASS Media queries on a single line

**Never** again use media queries!


### Install

`npm install sass-mediaquery`

`bower install sass-mediaquery`


### How to import

On your scss, add:
`@import '~sass-mediaquery';`


### EXAMPLES:

```
.an-element {
  @include attr(height, 200, 140);  // height 200(calculated) on desk and height 140(calculated) on mobile
  @include attr(display, flex, block);  // display: flex on desk and display: block on mobile
  @include attr(flex-direction, false, column);  // media mobile with flex-direction: column, but on desk wasn't created
  @include mediaAttr(height, 100, 320);  // media max-width: 320px with height: 100px(calculated)
  @include attr(width, 20px, 15px, true);  // 'true' to no calculated value
}
```

##### Tip: Use a css minifier