

Summary:

 Routing is a key part in any Web Application . (Latency + Routing) holds a key parameter in determing the end user experience.
 
 Technologies Used:
  React and Redux.
  
  Generally, We Use React Router and call the component when that specific route is called.However, We Statically Import and place it at 
  the Top of the routing file. On a Small Application, This might work. As the Project Scope increases, The loading time of the application
  increases with respect to the unneccesary imports. To decrease the loading time, We Import the component dynamically based on the requirement.
  
  This Approach has the following advantages:
   1) Breaking the code into Chunks i.e Code Splitting.
   2) Decrease in the Application run time.
   3) Easy to Maintain.
   4) No NPM package usage.
   
  
   
   
 References/Credits:
   
   https://www.youtube.com/watch?v=bUlkq3PDfRY
   
   https://github.com/jamiebuilds/react-loadable
   
   
   
   
   
   
 
