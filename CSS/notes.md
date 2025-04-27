## **Notes**

- Cascading Style Sheets (CSS) allow us to format components on an HTML web page. This formatting can be done by color, position, font size or font family, and many more.
- There are three main ways to add CSS to an HTML page: 
    - Inline
    - Internal (also called embedded)
    - External CSS
- **Inline CSS**: Inline styles are attached to one HTML tag at a time. We do so by using the style attribute of the tag. The syntax for this is:
    `<tagname style='property1: value1; property2: value2;...;property-n: value-n;'`
- There are three ways of giving colors in CSS:
    - Using color names. For example: yellow
    - Using hexadecimal values. For example: #FFF00
    - Using RGB values. For example: rgb(255,255,0) 
- **Internal CSS**: Also known as Embedded Stylesheet, the internal stylesheet helps us in applying a particular CSS formatting across the page instead of a specific tag only. This is done using the `<style>` tag, which is conventionally placed in the `<head>` tag of the HTML page.     
- **Selectors in CSS**
    - Selectors are methods by which we can target a particular element to be formatted. There are several selectors such as the element, class, ID and *.
    - **Class selector**: A tag or a group of tags are added to a particular class by using their class attributes and then CSS is applied using the class selector.
    - **Specifying a class**:  The dot operator '.' is used to select a particular class in CSS. The selector looks like `.classname`. 
-  **External stylesheets**
    - All content for styling is written in a .css file and is later linked to an HTML page using a `<link>` tag.
    - Advantage: External stylesheets can be applied to any page it is linked to. This is especially useful when applying one format or template across mutltiple pages of a web application.  