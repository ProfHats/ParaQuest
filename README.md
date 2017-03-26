# Assignment 1 - ReactJS app.
ParaQuest App

Name: Eoin Moloney, Student 20053732


## Overview.

The App is a browser-based game. It consists of a number of interconnected 'Pages', which the user can navigate between via interacting
with the various Components on screen. Each Page includes a text description of a particular environment, and a list of possible options
that the user can take. Sometimes options are simple text links, sometimes they are buttons. Each page also contains an element that allows
them to go back to the previous state. The user has statistics (Strength, Brains, and Charm), which are used to pass the different tests.
If the user passes a test, their stats may increase, while some circumstances can result in their stats being reduced. The player also has
a second set of statistics, "Menaces", which track harm done to their character (Injury, Stress, and Scandal). Certain circumstances (such
as attempting a test and failing it) can increase Menaces. If a Menace exceeds a certain amount, a penalty will be applied to the player
(such as dying and needing to restart the game).

 The App features:
 
 + Dynamic Routing through parameterised URLs, which are tracked by way of a complex array of interconnected objects
 + Randomisation, carried out by API and used together with stats to determine the outcome of tests. 
 + Rudimentary Inventory system carried out via routing

## Installation requirements.
+ ReactJS v15.4.2
+ Bootstrap 3
+ create-react-app tool

After cloning the app from the repository, one only needs to run it via 'npm start'. No extra steps need to be taken.


## Data Model Design.

Diagram of app's data model (see example below) AND/OR a sample of the test data used (JSON or equivalent).

![][image1]
(model)

Use meaningful sample data. Briefly explain any non-trivial issues.

## App Component Design.

A diagram showing the app's hierarchical component design (see example below). 

![][image2]
(design)

## UI Design.

. . . . . Screenshots of app's views (see example below) with appropriate captions (user regeneration and login views, if implemented, can be omitted) . . . . . . . 

![][image3]
(screen)

## Routing.

+ /:advID - routes the player to an AdventureView, with data based on the advID
+ /:advID/inventory - routes the player to their inventory via 'Inventory' view. Placing it after /:advId allows the player to quickly return from the Inventory Screen to their previous state
+ /:advID/inventory/:itemId - routes the player to the description of a particular item, providing them with extra information about it via the 'Item' view

## Extra features

The app also features a random number generator, created in the API via the math.random method. This is used to determine whether or not a user
passed a test, when they take one.
The app features a system that allows the player to inspect their inventory, showing all their current items as well as detailed descriptions of such.
The inventory, like the Stats variable, is held in the root App Component, as that is a parent of all the Components that need to know about such data.
A system to persist changes to State, such as the addition/removal of Weapons and Stats, was planned. This system was never finished due to lack of time, however.

## Independent learning.

+The proper use of browserhistory.push() to programmatically go to a certain route
+The correct use of random() to generate pseudorandom numbers for use with the Tests
+The use of callbacks to pass state between Parent components and Child components (not finished, but studied)

[image1]: ./src/images/Data Model.jpg
[image2]: ./src/images/Hierarchical Model.jpg
[image3]: ./src/images/AdventurePic1.jpg