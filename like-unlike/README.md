# Create a Like button which appearance changes based on the following states:
The heart and spinner icons are provided for your convenience. The focus of this question is on the handling of the various states, not so much on being pixel perfect. As for colors, you can use #f00 for the red and #888 for the gray.


![Like Button States](https://www.greatfrontend.com/img/questions/like-button/like-button-states.png)


## Requirements
- In the button's default state, when it is clicked, it goes into the loading state and a request is made to the provided back end API which has a 50% chance to succeeding/failing.
- If the request was successful, the button changes to the "Liked" state.
- Otherwise it returns to the "Default"/"Hovered" state depending on whether the cursor is still over the button. The error message from the back end API should be shown below the button.
- If the user clicks on a "Liked"-state button, the reverse flow happens.

## Submission API
```
URL: https://questions.greatfrontend.com/api/questions/like-button
```
HTTP Method: POST
Content Type: json
## Parameters
The following fields are accepted in the request body:
- action: A string of either 'like' or 'unlike' depending on the desired action.

## Response
The API has a 50% chance of succeeding (HTTP 200) or failing (HTTP 500) so as to make it easy for you to test the request failure cases. It returns a JSON payload of the following shape depending on the outcome.
  1. Success: { message: 'Success!' }
  2. Failure: { message: 'Unknown error during attempted {{action}}. Please try again later.!' }
