###View Mode Switch

**What does it do?**  
The blueprint example is a responsive webpage that displays a set of products and corresponding retail purchase information.  The user may select two possible page layouts: grid view (default) or list view.

**What interactive elements exist?**  
The user may select list or grid layouts.  Also, there is an "Add to Cart" action for each item and the item image is a HTML link.

**How do you interact with them?**  
The user may click the appropriate icon to select desired layout.  The user may click the "Add to Cart" button (cart not implemented in blueprint). The user may click on the item image (not implemented in blueprint).

**What visual effects are produced by interacting?**
The "Add to Cart" button background color transitions to a darker shade of blue when the user moves the pointer over the button. When the user moves the pointer over the icon to switch to the other view, the grayed out icon highlights to light blue.  

**How does it do it?**
The webpage links to two CSS stylesheets one per layout.  One stylesheet is active while the other is disabled.  

**What existing HTML elements are changed?**
Javascript will be used to switch the HTML `<link>` tag `disabled` element to either off (true) or on (false).  

**What new HTML elements are created?**
A click event listener will be created in JavaScript to update each `<link>` to "on" or "off" when the appropriate icon is clicked.  

**What CSS styles are used to produce the effect?**  
The `::hover` pseudo selector is used for the "Add to Cart" button highlight effect.  CSS query selectors are used to access the HTML `<link>` disable element.
