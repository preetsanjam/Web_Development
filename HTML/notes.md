## **Notes**

- Attributes only appear in the opening tag.
- Attributes are always given as key-value pairs.
- The body tag contains all tags that will be rendered on the web page.
- Meta tag should not have a closing tag.
- The id attribute for meta and title tags cannot be the same.
- Standalone tags or self-closing tags have no separate closing tags or content involved. For example, hr and br tags.
- The br tag is a self-closing tag used for breaking into a new line.
- The anchor tag is used to create a clickable link to another webpage. It helps in navigating between pages. It has one important attribute, namely **"href"**.
- The href attribute, which stands for hypertext reference, is an essential attribute in the anchor tag that takes the url of the destination tag. The anchor tag won't redirect users without this attribute.
- There are two types of **href paths**
    - **Absolute path** is the complete path of a particular file in a file system.
    - **Relative path** is the location of a file in relation to our current location in a file system.

     **Absolute path vs relative path**
     - If we are in a folder and the destination/relative file is in the same folder, we can use the relative path. Absolute paths are used to refer to files in a completely separate folder. Relative path does not expose all folders on our system.
     - In order to move one level up for relative paths, we use the '../' operator.
- **Links on the same page:** We can create links to sections on the same page using the id attribute value of the target element/section.
- The **image tag** is a standalone tag. It takes one mandatory attribute called **'src'**, which stores the path of the image (image source).
- The **alt attribute** sets an alternative text which is displayed when an image cannot be rendered on the browsed screen. There can be several reasons for the image not rendering. For example, the path is incorrect or the internet is down. Another use case of alt attribute is for people with disablities. Screen-reader softwares read out the text every time the mouse hovers over an image. In this context, alt attribute is the **web accessibility tool**. 
- The image tag must be included within the anchor tag to create a clickable image that can redirect users to another page or section on the same page. 
- The **ul tag** is used for unordered lists. The unordered lists are used to display lists where order is not of importance. For example, shopping list and recepie ingredients. 
- **HTML is used to structure webpages (headings, paragraphs, title) whereas CSS is used to make webpages look good.**  
- Ordered lists (ol tag) are used when the order of items is important. 