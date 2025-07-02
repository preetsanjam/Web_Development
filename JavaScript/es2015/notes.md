## Notes

- `let` vs `var`: 
    
    1. Variables declared with the `let` keyword must be declared before use and cannot be redeclared. Variables declared with the `var` keyword can be redeclared multiple times.

    2. Variables declared with `var` are function-scoped, whereas variables declared with `let` are block-scoped.

    3. Variables declared with `var` are hoisted, whereas those declared with `let` are not.

    4. Variables declared with `let`, though they maybe global, are not created as properties of the `window` object, whereas variables declared with `var` are created as properties of the `window` object. 
