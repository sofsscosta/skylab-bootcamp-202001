[github](https://github.com/lichab)

# CSS

## Specificity

Every selector has its place in the specificity hierarchy. There are four categories which define the specificity level of a selector:

### Inline styles

An inline style is attached directly to the element to be styled. Example: <h1 style="color: #ffffff;">.

### IDs

An ID is a unique identifier for the page elements, such as #navbar.

### Classes, attributes and pseudo-classes

This category includes .classes, [attributes] and pseudo-classes such as :hover, :focus etc.

### Elements and pseudo-elements

This category includes element names and pseudo-elements, such as h1, div, :before and :after.

### Equal specificity: the latest rule counts

If the same rule is written twice into the external style sheet, then the lower rule in the style sheet is closer to the element to be styled, and therefore will be applied:

## How to Calculate Specificity?

Start at 0, add 1000 for style attribute, add 100 for each ID,add 10 for each attribute, class or pseudo-class, add 1 for each element name or pseudo-element..

### Example

```
    A: h1
    B: #content h1
    C: <div id="content"><h1 style="color: #ffffff">Heading</h1></div>
```

The specificity of A is 1 (one element)
The specificity of B is 101 (one ID reference and one element)
The specificity of C is 1000 (inline styling)

Since 1 < 101 < 1000, the third rule (C) has a greater level of specificity, and therefore will be applied.

## Positioning / Layout

### Box Model

All block type elements have the following disposition:

![atl box-model](./images/box-model.png)

Pay attention to this since setting an element withd or height is not the only thing that decides, but also de rest of the box model elements.

### Box sizing

This is a new HTML5 feature that "fixes" the situation described above.

It does that by using the outer part of the box model as the refference point to calculate the height and with. In contrast with the regular box model which only takes the content into account.

Be careful because this also makes the content smaller to fit on the size that we want.

### Position

The position could be:

1. <strong>Relative</strong>: it is realative to its own original position.
2. <strong>Fixed</strong>: can be fixed to the top or the bottom of the page.
3. <strong>Absolute</strong>: You need to set the exact position you want the element to be realive to its container.
4. <strong>Z-index</strong>:
5. <strong>Sticky</strong>: It sticks to the top or bottom once this "touches the element".
