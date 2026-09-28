 ============================================================
  🎟  Event Welcome Center — script.js
  JavaScript Foundations · Lab 5
 ============================================================

 ── Challenge 1: Event Information ──────────────────────────
 Create your variables here and log each one to the console.

 let eventName = "CodeFest";
 let speakerName = "";
 let roomNumber = 204;
 let attendeeName = "";

 console.log(eventName);


 ── Challenge 2: Personalized Greetings ─────────────────────
 Combine your variables with strings to build welcome messages.

 console.log("Welcome " + attendeeName + " to " + eventName + "!");
 console.log("Your session is in Room " + roomNumber + ".");


 ── Challenge 3: Build Functions ────────────────────────────
 Create at least two functions and call them below.

 function welcomeGuest() {
   console.log("Welcome to " + eventName);
 }

 function displaySessionInfo() {
   console.log("Room: " + roomNumber);
 }

 welcomeGuest();
 displaySessionInfo();


 ── Challenge 4: Alert Messages ─────────────────────────────
 Send messages directly to the user with alert().

 alert("Welcome to " + eventName + "!");


 ── Challenge 5: Attendee Counter ───────────────────────────
 Track how many attendees have checked in.

 let attendeeCount = 0;
 console.log("Attendees: " + attendeeCount);

 attendeeCount++;
 console.log("Attendees: " + attendeeCount);


 ── 🚀 Level Up Challenges ──────────────────────────────────
 LU1: Add displaySpeaker(), displayRoom(), displayAgenda()
 LU2: Create variables for 3 attendees with personalized messages
 LU3: Build a mini conference dashboard (variables + functions + console)
 LU4: Research and demo console.warn(), console.table(), or console.info()
