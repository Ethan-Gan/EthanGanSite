# Office Calendar Project for University of Waterloo ADTSE Office
Please note: I have permission to share this project but I have generated example events/dates and people roles in the below screenshots for security reasons.  

## Update Calendar View:
![Update Calendar View](/images/image.png)

## Yearly Event Cycle View: 
![Yearly Event Cycle](/images/image-1.png)

## Motivation
This project was intended to help improve the existing office calendar after finding that alternative solutions such as Planner were bugging out. My initial concept for this was to take the existing Excel office calendar and extend it to easily propagate new months and facilate quick event look ups as well as the ability to look at overarching event cycles during the different school terms (See Yearly Event Cycle View). I chose not to depart too much in basic interface from the calendar we already had to make the transition as painless as possible. 

## Project Architecture
Here is the sketch of the architecture of the calendar file, I used to communicate with a colleague I worked with who now manages the project after my work term completed: 
![Project Architecture](/images/image-2.png)

This project was made possible with Excel Macros and VBA.

The main improvements from the past calendar:
- Automatic layout generation for each month 
- Centralized data storage for important dates and past events
- Table to display event cycles through the Fall, Winter, and Spring terms at the University of Waterloo along with it's own data storage table for easy updates. This also came with automatic colouring
- Automatic labelling of common holidays based on the current year
- Scalable office member rows to accomodate fluctuations in current employees

In the future, I would like to see improved:
- Better styling for event names: It is slightly cramped as is which was a recurring issue with the old calendar
- Adding a monthly display for those large overarching yearly events. This is not hard its just copying over a column automatically based on the selected month date range. 
- Some feedback on the new calendar