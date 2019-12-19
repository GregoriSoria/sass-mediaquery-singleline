# sass-mediaquery-mixin
The PERFECT AND FAST media query mixin for your development



### EXAMPLES:

```
.an-element {
  @include attr(height, 200, 140);  // height 200(calculated px) on desk and height 140(calculated px) on mobile
  @include attr(display, flex, block);  // display: flex on desk and display: block on mobile
  @include attr(flex-direction, false, column);  // media mobile with flex-direction: column, but on desk wasn't created
  @include mediaAttr(height, 100, 320);  // media max-width: 320px with height: 100px(calculated px)
  @include attr(font-weight, 300, 400, true);  // 'true' to no calcutaded value, because font-weight has few possibilities
}
```