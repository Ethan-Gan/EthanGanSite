# Creating in my Favourite Genre of Shoot-em Up

<img src="/images/tankrunnerimage.png" alt="tankThumbnail" width="400"/>

## TankRunners II: The 25 Chambers

**TankRunners II: The 25 Chambers** is a 2D top-down dungeon shooter developed as a final project for ICS4U (Grade 12 Computer Science). This game features procedurally generated levels, increasing difficulty, and real-time combat mechanics. Designed in Java using core GUI components like `JFrame` and `JPanel`, the project explores game architecture, algorithmic content generation, and AI pathfinding.

[View Github](https://github.com/kobotabby/TinyTerrorTanks)


## Objective

Your mission is to survive and advance through a procedurally generated dungeon of **25 rooms**, each one more challenging than the last. The player starts in Room 1 and must fight their way through increasingly numerous and difficult enemies to reach Room 25 and win.

## Features

- **Procedural Map Generation**: Each playthrough offers a unique layout of 25 interconnected chambers.
- **Scaling Difficulty**: Enemy count and behavior scale with room number to increase challenge.
- **A* Pathfinding**: Enemies intelligently navigate around obstacles to reach the player using the A-star pathfinding algorithm.
- **Responsive Controls**: Smooth WASD movement and mouse-based shooting mechanics.
- **Basic UI Rendering**: Built entirely with Java Swing (`JFrame`, `JPanel`) without the use of external libraries.
- **Replayability**: Randomization mechanics make each run a unique challenge.

## Controls

- **W** – Move Up  
- **S** – Move Down  
- **A** – Move Left  
- **D** – Move Right  
- **Left Mouse Button** – Fire bullets

## How to Run

1. Ensure **Java 8 or later** is installed on your machine.
2. Unzip the project folder.
3. Double-click or execute `Tankrunner2.jar` to run the game.

## Technologies Used

- **Java 8**
- **Swing GUI Toolkit** (`JFrame`, `JPanel`)
- **A* Pathfinding Algorithm**
- **Custom Procedural Room Generation**
- **OOP Design Patterns**

## Learning Outcomes

This project offered hands-on experience with:

- Designing scalable and modular game systems.
- Implementing procedural content algorithms.
- Building a game loop and handling frame-based animation.
- Applying classical pathfinding techniques in real-time pseudo-AI.

## Future Improvements

- Add boss rooms or special enemies at key milestones.
- Integrate sound effects and music.
- Improve sprite rendering and add animation frames.
- Implement a save/load system and persistent progress tracking.