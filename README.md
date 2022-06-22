## Movie search
Search your favorite movie but thanks to our autocomplete you do not have to worry about getting it perfect

<img width="583" alt="CleanShot 2022-06-22 at 14 25 15@2x" src="https://user-images.githubusercontent.com/102596893/175018316-fdb9edb5-6522-42b0-8986-954e6cbe204d.png">

<img width="588" alt="CleanShot 2022-06-22 at 14 25 21@2x" src="https://user-images.githubusercontent.com/102596893/175018326-a4e375c4-8893-44a0-98ae-3dbb34fff318.png">

## How It's Made:

**Tech used:** HTML, CSS, Vanilla JavaScript, Node.js (Express), and jQuery

* Loaded up a sample dataset provided by MongoDB that provides us with over 25,000 movies (along with metadata such as poster image, and cast name).
* Created a customer "search index" in Mongo that allows our app to use the text input box as a "title" filter for our MongoDB collection
* Created the API code that handles requests for the title and fetches from our DB index search the desired movie metadata information

## Optimizations

* Improve styling
* Integrate the autocomplete search functionality into an already existing application
* Improve the maintainability of the codebase by migrating the jQuery parts to a modern client-side framework like React


## Lessons Learned:

* Learned how to create a MongoDB search index
* Learned how to make requests based on partially completed input box (autocorrect functionality)
* Learned how to use jQuery to make requests to our API and display the movie information in our DOM

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Coding Challenges Repository:** https://github.com/victorpatru/Coding-Challenges

**Star Wars CRUD:** https://github.com/victorpatru/star-wars-crud-app


