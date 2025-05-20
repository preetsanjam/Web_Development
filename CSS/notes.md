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
- **Attribute + value selector**: The attribute with the value selector allows us to target tags having an attribute with a particular value. For example, having an `<href>` attribute with the value of the Facebook page's URL.
- If an element has external, internal and inline CSS applied on it, due to the order of rendering of the CSS, the inline CSS formatting will be rendered for this element.
- Pseudo class selectors are CSS selectors that help in styling the element based on state changes. The common pseudo classes include :link, :active, :visited, :hover, :first-child and :nth-child.
- Pseudo classes are CSS selectors with a colon preceding them. They specify a special state of an element. 
- In CSS, the universal selector denoted by * is used to match all the HTML elements on the web page. 
    Syntax: <br>
    `* {`
    <br>
        `property: value;`
    <br>
    `}`      
- One of the orders for pseudo class selectors is LVHA (link, visited, hover, anchor).
- CSS Selectors have a concept of **structural pseudo-classes** to allow the selection of elements based on extra information that is available in the document tree which cannot be represented by any other simple selectors or combinators.  
- The :nth-child() accepts expressions between those parantheses and is used to select elements depending on a simple given algebric expression. It has the ability to select even/odd elements, "every third", etc. 
- The **n-th of type selector** enables selection of the n-th element in a set of same elements. 
- Inline styles are the most important. They trump embedded and external styles. 
- On an HTML page, there can be many paragraphs but there will be fewer elements with a given class. When a selector targets elements with a class, it is given more importance. Styles given through the class selector will be applied. **A class selector is more specific than a type selector. This concept is called specificity.**     
- **Specificity values**
    - Specificity values come into play when there are conflicting property values.
    - These are denoted in the form of (a, b, c, d).
    - For inline styles, specificity value will always be (1, 0, 0, 0). Here, 1 denotes the value of 'a'.
    - The value of 'b' denotes the number of times IDs appear in that selector.
    - The value of 'c' denotes the number of times classes, including pseudo classes, appear in that selector. 
    - The value of 'd' denotes the number of times types appear in that selector.
- Colors in CSS: 
    - When colors are specified in the 'rgb' format, a value is assigned to each of the three components of the format.
    - rgb(0, 0, 0): black
    - rgb(128, 128, 128): grey 
    - rgb(255, 255, 255): white
    - rgb(255, 255, 0): yellow
    - rgb(255, 128, 128): orange
- The **box model** helps us control the dimensions of all elements on a given HTML page.
    - Block-level elements always start on a new line and have some margin before and after the element. They take up the full available screen width. For example, body and div tags.
    - Inline elements do not start on a new line and take up only the required width. For example, span tag.
- **Units in HTML/CSS**: The attributes such as width and height take up various values in various units such as pixels and percentage of the screen or even take string values like auto, initial and inherit to set the width and height of an element. 
- The type of values taken by the height attribute are the same as those accepted by the width attribute. 
- The min-width and the max-width properties override the values set by the width property.    
- **Padding** refers to the space between the tag's content and its border from all sides, ie, top, bottom, left and right of the element's content. Padding can be set individually on the top, left, right and bottom portions of the element border, or the values can be clubbed in various ways. 
- Similar to padding, the **border** for various sides of an element can be individually specified. However, this is not the standard practice since we prefer having the same border style on all sides of the element.
- **Margin** is the space between two elements. Similar to padding and border, various margins that are top, left, right and bottom can be set individually or in combinations.     
- A background image can be set using the `background-image` property. This image can be repeated in various ways using the `background-repeat` property. 
