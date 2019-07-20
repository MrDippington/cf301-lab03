# cf301-lab03

### Feature 1: Pagination

```
Number and name of feature: Pagination
Estimate of time needed to complete: 
Start time: 
Finish time: 
Actual time needed to complete: 
```

#### Why are we implementing this feature?

- As a user, I want to have the ability to view additional images so that my view does not become cluttered. 

#### What are we going to implement?

Given that a user opens the application in the browser  
When the user clicks on a button or link to another page  
Then the other set of images should be dynamically displayed  

#### How are we implementing it?

- Add navigation for the user to switch between two pages. Each page should render a unique set of images from one of the two provided JSON files.
- Reset the filters, then repopulate them using only keywords from the images currently being displayed.

### Feature 2: Templating

```
Number and name of feature: Templating
Estimate of time needed to complete: 
Start time: 
Finish time: 
Actual time needed to complete:
```

#### Why are we implementing this feature?

- As a user, I want all of the images to be displayed in a consistent manner, so that it is easy to scan the collection of images.

#### What are we going to implement?

Given that a user opens the application in the browser  
When the images are displayed on the screen  
Then each image should be rendered according to a template   

#### How are we implementing it?

- Create the appropriate Handlebars template in your HTML with the same `<h2>, <img>, and <p>` elements as the jQuery template from the prior lab.
- Refactor the method that renders your images to use Handlebars instead of making a copy with jQuery.


### Feature 3: Styling with Flexbox

```
Number and name of feature: Styling with Flexbox
Estimate of time needed to complete: 
Start time: 
Finish time: 
Actual time needed to complete:
```

#### Why are we implementing this feature?

- As a user, I want a simple, clean looking UI so that my photo gallery clearly displays the images.

#### What are we going to implement?

Given that a user opens the application in the browser  
When the user navigates to the home page  
Then the images should be displayed in columns, as screen width allows  

#### How are we implementing it?

- Refactor your CSS to use Flexbox instead of floats. You are welcome to use a combination of floats and Flexbox, as you see fit.


### Feature 4: Sort the images

```
Number and name of feature: Sort the images
Estimate of time needed to complete: 
Start time: 
Finish time: 
Actual time needed to complete:
```

#### Why are we implementing this feature?

- As a user, I want to be able to sort the images so that there is an order to their rendering.

#### What are we going to implement?

Given that a user is presented with sort options  
When the user clicks on one option  
Then the images should be sorted accordingly  

#### How are we implementing it?

- Add the ability for the user to sort the images by either title or by number of horns.
- Sort the images by one of the properties on page load. This should also apply to the second page of images. 


## Stretch Goal: Detail view

```
Number and name of feature: Detail view
Estimate of time needed to complete: 
Start time: 
Finish time: 
Actual time needed to complete:
```


#### Why are we implementing this feature?

- As a user, I want the image to be displayed in a larger size and with the description shown so that I can view the details of a single image.

#### What are we going to implement?

Given that a user wants to view the details of the image  
When the user clicks on an individual image  
Then the image should render larger on the screen with the description displayed  

#### How are we implementing it?

- Add a detail view which will display the image in a larger size in the center of the screen with a colored background.
- The description should be shown now, as well.
- When the user clicks off of the image, return to the grid view.
- Use a transition or animation to show and hide the detail view of an image.

## Stretch Goal: Fuzzy search

```
Number and name of feature: Fuzzy search
Estimate of time needed to complete: 
Start time: 
Finish time: 
Actual time needed to complete:
```

#### Why are we implementing this feature?

- As a user, I want the ability to search my images so that I can view only the images containing specific titles or keywords.

#### What are we going to implement?

Given that a user enters wants to view specific images  
When the user enters a character into the search field  
Then only the images matching the current set of characters should be displayed on the screen  

#### How are we implementing it?

- Create an input element to allow users to search for an image. It is up to you and your partner to decide if the user should be able to search by title, keyword, or both.
- Write a regular expression pattern to create a fuzzy search so that the results are narrowed down and displayed every time the user enters or removes a character from the input.
