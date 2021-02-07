---
path: "/styling-with-text-decoration"
date: "2021-02-07"
title: "Styling with text-decoration"
description: "How to use 'text-decoration' to emphasize text on your website"
category: "CSS"
author: "Nikki Peel"
authorImage: ../../images/selfie.png
image: ../../images/text-decoration.png
---

Text-decoration is a great way to emphasize text on a webpage. I use the CSS property often for headings or elements that receive focus, such as buttons or anchor tags.
</br>

### **Text-decoration**

See what I did there? Pretty neat.
 
Text-decoration is shorthand for the following properties:

- `text-decoration-color`: sets the color of the decoration, otherwise the color of the text is inherited
- `text-decoration-line`: sets the type of decoration that is used; the options are: *underline, overline,* and *line-through*
- `text-decoration-style`: sets the style of the line that is used for the decoration such as *solid, double,wavy, dashed,* or *dotted*
- `text-decoration-thickness`: sets the thickness of the line used for the decoration


You can use text-decoration with a single property: `text-decoration: underline;`

Or with multiple properties on the same line: `text-decoration: underline solid #444 5px;`

Here is the styling I used on this website to style headings within blog posts:

```
    .prose h3 {
        text-decoration: underline wavy #ffb847 2px;
        text-underline-offset: 8px;
    }
```
</br>

### **Text-underline-offset**

Sometimes, the text-decoration line is obstructed with letters. You can use the property `text-underline-offset` to move the line up or down: 

In the following image, the property is used to move the line down slightly:

![text-underline-offset](../../images/offset.png)

</br>

*Keep in mind this must be declared outside of  `text-decoration` because it's styling the line itself and is not a `text-decoration` property*

</br>

### **Conclusion**

Along with text-shadow, border, and color, text-decoration is an excellent way to bring attention to various elements of your website. I created a CodePen to demonstrate a few of the different ways we can use this property:


Here is a link to the pen: [codepen: text-decoration](https://codepen.io/nikki-peel/full/zYovZmv)

![text-decoration demo](../../images/text-decoration.png)

</br>

### **Resources:**

[MDN docs: text-decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)

[WCAG 2.1 - Using visual cues to convey information](https://www.w3.org/WAI/WCAG21/Techniques/general/G182)