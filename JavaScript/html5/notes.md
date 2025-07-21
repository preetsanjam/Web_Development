## Notes

- An **authentication token** is a piece of information that validates the identity of a user to a website, server or anyone requesting verification of the user's identity.
- **`localStorage`** is a type of web storage provided by the browser that permits web applications to store data locally within a user's browser with no expiration date. The stored data will be available even when you close a browser tab/window.
- JavaScript has a built-in method called `addEventListener`. It is a DOM Level 2 event handler. It allows you to prepare and set up functions that are going to be invoked when a particular event reaches its target.
- The `querySelector()` method is used for searching and returning the first element within the document that matches the specified selector; if no matches are found, it returns null.
- `localStorage` has a few methods that are used to interact with the object for storing, retrieving and deleting items in the storage. The available properties are: `setItem(key, value)`, `getItem(key)`, `removeItem(key)`, `key(index)`, `clear()` and `length`.

    Whatever is stored in the local storage doesn't get erased.  
    
    The  `getItem(key)` method retrieves stored data in the browser. If a valid key is passed to the method, it will return the data. If the key does not exist, it will return null. 