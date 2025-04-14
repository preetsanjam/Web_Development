## **Notes**

- HTML, which stands for **Hypertext Markup Language**, is used to build a static skeleton of web applications and websites.   
- Attributes only appear in the opening tag.
- Attributes are always given as key-value pairs.
- The body tag (`<body>`) contains all tags that will be rendered on the web page.
- Meta tag (`<meta>`) should not have a closing tag.
- The id attribute for meta and title tags cannot be the same.
- Standalone tags or self-closing tags have no separate closing tags or content involved. For example, `<hr>` and `<br>` tags.
- The `<br>` tag is a self-closing tag used for breaking into a new line.
- The anchor tag is used to create a clickable link to another webpage. It helps in navigating between pages. It has one important attribute, namely **"href"**.
- The href attribute, which stands for hypertext reference, is an essential attribute in the anchor tag that takes the url of the destination tag. The anchor tag won't redirect users without this attribute.
- There are two types of **href paths**
    - **Absolute path** is the complete path of a particular file in a file system.
    - **Relative path** is the location of a file in relation to our current location in a file system.

     **Absolute path vs relative path**
     - If we are in a folder and the destination/relative file is in the same folder, we can use the relative path. Absolute paths are used to refer to files in a completely separate folder. Relative path does not expose all folders on our system.
     - In order to move one level up for relative paths, we use the '../' operator.
- **Links on the same page:** We can create links to sections on the same page using the id attribute value of the target element/section.
- The **image tag** (`<img>`) is a standalone tag. It takes one mandatory attribute called **'src'**, which stores the path of the image (image source).
- The **alt attribute** sets an alternative text which is displayed when an image cannot be rendered on the browsed screen. There can be several reasons for the image not rendering. For example, the path is incorrect or the internet is down. Another use case of alt attribute is for people with disabilities. Screen-reader softwares read out the text every time the mouse hovers over an image. In this context, alt attribute is the **web accessibility tool**. 
- The image tag must be included within the anchor tag to create a clickable image that can redirect users to another page or section on the same page. 
- The **ul tag** is used for unordered lists. The unordered lists are used to display lists where order is not of importance. For example, shopping lists and recipe ingredients. 
- **HTML is used to structure web pages (headings, paragraphs, title) whereas CSS is used to make web pages look good.**  
- Ordered lists (ol tag) are used when the order of items is important. 
- The table tag is a container tag which works in coordination with the following container tags:
    - `<tr>` - Table row
    - `<th>` - Table header
    - `<td>` - Table data
    - `<caption>` - Table caption (optional)
    - `<thead>` - Table head (optional)
    - `<tbody>` - Table body (optional)
- Cascading Style Sheets (CSS) is used to style an HTML page. It is included in the HTML using the `<style>` container tag, which is usually placed in the `<head>` tag. 
- **Forms** are used in the frontend to collect data from the users for future processing. The HTML `<form>` container helps in setting up a form in a web page.
- The input tag is the most commonly used tag for form elements. The type of form control changes based on the "value" of the type attribute. The type attribute takes various values such as text, button, date, radio, checkbox, email, etc.
- The `<form>` tag is a container tag, whereas the `<input>` tag is a standalone tag.
- The input element will work even if it is written outside of the form tag. However, this is not the conventional method of input element criterion. 
- **Query string**: A query string is a set of key-value pairs appended to a url. It is normally used for sending data from one page to another. In forms, all form values are sent to the succeeding page in the query string. 
    - If the input element does not have a name attribute, the value of that input element will not be passed to the backend.
    - The query string with a question mark (?) and different key-value pairs are separated by ampersand (&).  
- The form tag's action attribute stores the URL of the page where a user needs to be forwarded to.
- The method attribute stores the values of the HTTP methods (also called verbs). These verbs inform the backend of the processing method for the current form request. Two of the most commonly used methods are **get** and **post**.
    - By default, the method is get.
    - With the post method, the data is submitted to the backend without the query string.
- **GET vs. POST**: The 'post' method must be used when sending sensitive data (for example, passwords) from source to destinations, since doing so does not lead to any query string generation on the URL. 
- **HTML 5**: HTML5 is the fifth major HTML version that is recommended by World Wide Web Consortium (W3C).
- **Validation in forms**: HTML5 tags enable browsers to validate content that is filled in a form on a webpage to ensure storage of required data formats in the database.  
- The textarea is a text input field in a form that allows users to input multi-line information into the form without using multiple, single-line input elements.   

  