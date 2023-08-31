Dynamic Survey Platform

A. Functions Performed by the Application:
1. Survey Creation
2. Survey Management
3. Survey Participation
4. Responsive Design
5. Interactive in nature

B. Steps:
1. run 'npx create-react-app dynamic-survey on terminal'
2. run 'npm install --save bootstrap' 
3. run 'npm cd dynamic-survey'
4. finally run 'npm start' to launch the application

C. References:
1. Bootstrap Documentation (https://getbootstrap.com/docs/5.3/getting-started/introduction/)
2. https://github.com/cyrus8050/yt-dynamic-form/tree/master
3. https://www.youtube.com/watch?v=_yrXNcd7z9k&ab_channel=ckmobile
4. https://www.youtube.com/watch?v=MJ3pHSX7fpY&list=PLY829z1DYsV9a2bb9UozZC_bj8cUn7Ggx&index=1&ab_channel=Techniczoid

D. Challenges faced and how they were overcome:
1. State Management: Managing the state of the application in terms of keeping track of data that has been filled was a challenge (dynamic)

Solution: Hooks such as  useState useEffect were utilised to manage state and useContext was utilised to ensure dynamic nature. Breaking down the app into smaller components aided in making state management more manageable.

2. Handling user input: careful handling of user input is required to display change when an input is received.

Solution: user inputs were updated using 'onChange' and 'onClick' events on input elements.

3. Conditional Rendering: Displaying and hiding fields based on user input or conditions can lead to intricate conditional rendering logic.
Solution: switch was utilised for conditional rendering.

4. Responsive and Visually Appealing Application
Solution: Bootstrap framework was utilised along with css styling to make survey interactive and appealing.

E. toughest part of project that has not been finished yet:

1. Allow users to share survey links and collect anonymous responses.
2. Implement pagination and sorting for survey listing.
3.  Implement proper authentication and authorization mechanisms for user access
4. Use web sockets or any suitable technology for real-time updates on the survey dashboard.


