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
    - Advantage: External stylesheets can be applied to any page it is linked to. This is especially useful when applying one format or template across multiple pages of a web application.  
    - The `<link>` tag is used to link an external file to a given HTML page. It takes three main attributes:
        - `<rel>`: The relation of an external file to an HTML page.
        - `<href>`: The URL of an external file.
        - `<type>`: Mime type of an external linked page.
- Most preferred is the external style. Next is the embedded style. Least preferred is the inline style. 
- The web page renders the CSS in the order of external, internal and, lastly, inline CSS.
- **ID selector**: The ID selector begins with a hash (#). It selects only one element whereas the class and type selectors select more than one element.
- **Attribute selector**: The attribute selector allows us to apply formatting to all tags having a specific attribute. The selector is written as [attributename]. It can also be used in combination with a type selector.
     