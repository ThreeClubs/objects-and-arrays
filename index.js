const busRoutes = [
  {
    name: "NX2 - Southbound",
    leavesFrom: "Silverdale",
    stopsAt: [
      "Albany",
      "Constellation",
      "Sunnynook",
      "Smales Farm",
      "Akoranga",
      "Fanshawe",
      "Customs St",
    ],
    destination: "Britomart",
    departureTime: "08:00",
    estArrivalTime: "08:47",
  },
  {
    name: "NX2 - Northbound",
    leavesFrom: "Britomart",
    stopsAt: [
      "Customs St",
      "Fanshawe",
      "Akoranga",
      "Smales Farm",
      "Sunnynook",
      "Constellation",
      "Albany",
    ],
    destination: "Silverdale",
    departureTime: "09:00",
    estArrivalTime: "09:39",
  },
];

// Challenge #1
// Log out the first object in the busRoutes array

console.log(busRoutes[0]);

// Challenge #2

// 1. Declare an empty array named "routeNameArray"
// 2. Using the push() method, push each route name of each object in "busRoutes" into the "routeNameArray"
// 3. Log out "routeNameArray"

const routeNameArray = [];
routeNameArray.push(busRoutes[0].name);
routeNameArray.push(busRoutes[1].name);
console.log(routeNameArray);

// Challenge #3

// 1. Declare an array called northBoundStops
// 2.... and assign the relevant stops accessed from somewhere in the busRoutes array
// 3 Log it out!

const northBoundStops = busRoutes[1].stopsAt;
console.log(northBoundStops);

// Challenge #4

/* 1. Declare a const variable called "myDailyCommute" and assign it the following boilerplate template literal string:
 `
 Every morning I take the ${NAME OF ROUTE} at ${TIME} from ${DEPARTS FROM} which arrives into ${DESTINATION} at about ${ARRIVAL TIME} 
 `
 2. Replace the capitalised text with the appropriate values access from the busRoutes array
 3. Log it out!
 4. STRETCH GOAL --->  Add some more sentences to the template literal string and insert data from the busRoutes array as you see fit
*/

const myDailyCommute = `
 Every morning I take the ${busRoutes[0].name} at ${busRoutes[0].departureTime} from ${busRoutes[0].leavesFrom}. It arrives into ${busRoutes[0].destination} at about ${busRoutes[0].estArrivalTime}. As soon as I'm in town, I wish I could hop on the ${busRoutes[1].name} at ${busRoutes[1].departureTime}, and head back home to ${busRoutes[1].destination} fpr a nice, long sleep-in.
 `;

console.log(myDailyCommute);
