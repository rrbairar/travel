# Code Brief


As I got an understanding from the given assignment doc, find the implementation approach below:

**Folder structure:-**

**Main Folder**
      **index.html ->** Open it in any browser, and resize it to get the responsive images(I’ve used 3 different images for different resolutions)
      **assets**
         
         1. images -> (Used webp images which are more optimized) 769px or more => load a larger image, 57px - 768px => load medium image and sizes lower than 575px will load smaller image.
         
         2. css -> I’ve used CSS and I’ve used the alphabetical order of CSS property which is easy to maintain in large projects. I’ve added comments for different sections of the design

         3. js -> Js is for alert/Modal/Popup only, Where clicking on CTA will open a popup with hello world text and there is a close button to close the modal, even clicking outside on overlay will also close the modal. We can also use the alert(‘Hello World’) to show the browser default alert message to CTA click


**Overall Thought:**

As given header and footer are 100px each, the content area will be the total height of the viewport - 200px; We can also make the content area height 100% instead of the fixed height. As of now, it is fixed.

Then added images with picture tag with srcset to get **responsive images**.

Then added a translucent **overlay** on the image which is position fixed and then there is a centered heading and button.

Clicking on CTA will open a custom modal with Hello World text in it.

The code is on GitHub = **https://github.com/rrbairar/travel**

Hosted on GitHub pages: **https://rrbairar.github.io/travel/**
