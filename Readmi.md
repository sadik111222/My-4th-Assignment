

#  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

    Here’s a clear breakdown of the differences between these DOM selection methods in JavaScript:

        A. getElementById()

            Selects one element by its unique id.

            Key Points:
            1. Returns a single element
            2. IDs must be unique
            3. Fast and very efficient
            4. Returns null if no match is found

        B. getElementsByClassName()

            Selects all elements with a given class name.

            Key Points:
            1. Returns an HTMLCollection
            2. Can contain multiple elements
            3. It is live (updates automatically if the DOM changes)
            4. Must loop through to access individual elements

        C. querySelector()

            Selects the first element that matches a CSS selector.
            Key Points:

            1. Returns the first matching element
            2. Accepts any valid CSS selector
            3. Returns null if no match
        
        D. querySelectorAll()

            Selects all elements that match a CSS selector.

            Key Points:

            1.Returns a NodeList
            2. Not live (static list)
            3. Supports all CSS selectors
            4. Can use forEach() directly


## How do you create and insert a new element into the DOM?

    To create and insert a new element into the DOM using JavaScript, you typically follow three main steps:

        1. Create a New Element
            Use document.createElement():
        
        2. Add Content or Attributes (Optional)

        3. Insert the Element into the DOM
            You must append it to an existing element.


### What is Event Bubbling? And how does it work?

        1. What is Event Bubbling?

            Event bubbling is a concept in the DOM (Document Object Model) event system where an event starts at the target element (the element that triggered the event) and then propagates upward through its parent elements in the DOM tree.

        2. How Event Bubbling Works

            A. The click event triggers on #child
            B. Then it "bubbles up" to #parent
            C. Then to #grandparent
            D. Then to document
            E. Then to window


#### What is Event Delegation in JavaScript? Why is it useful?

    1. What Is Event Delegation in JavaScript?

        Event delegation is a technique in JavaScript where you attach a single event listener to a parent element to handle events for its child elements, instead of attaching separate listeners to each child.
        It works because of event bubbling — when an event happens on a child element, it “bubbles up” through its ancestors in the DOM.

    2. Why Is Event Delegation Useful?

        A. Better Performance

            1. Instead of attaching many listeners to many elements:
            2. You attach one listener
            3. Uses less memory
            4.Improves performance (especially with large lists)

        B. Handles Dynamically Added Elements

            1. If new elements are added to the DOM later (e.g., via AJAX or user interaction), they automatically 2. work without adding new listeners.
            3. Without delegation:
            5. You’d need to manually attach listeners to new elements.
            6. With delegation:
            7. t just works.

        C. Cleaner and Simpler Code

            1. You avoid repetitive code and reduce complexity when managing many similar elements.

        D. Ideal for Lists, Tables, and Dynamic UI

            1. Common use cases:
            2. Todo lists
            3. Tables
            4. Dropdown menus
            5. Dynamic forms
            7. Infinite scrolling content


##### What is the difference between preventDefault() and stopPropagation() methods?

    preventDefault() and stopPropagation() are both methods used in JavaScript event handling, but they serve different purposes. Let’s break it down clearly:

        1. preventDefault()

            A. Prevents the default action associated with the event from happening.
            B. When you want the browser to ignore its built-in behavior for an event.

        2. stopPropagation()

            A. Purpose: Stops the event from bubbling up (or capturing down) through the DOM.
            B. Use case: When you want to prevent parent elements from reacting to an event triggered on a child   element.

        