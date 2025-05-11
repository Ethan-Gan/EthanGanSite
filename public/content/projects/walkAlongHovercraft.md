# WalkAlong Hovercraft

## Overview

The WalkAlong Hovercraft is an educational project designed to teach fluid dynamics and control systems through a hands-on, functional hovercraft model. It highlights core engineering principles like Bernoulli’s Principle, Newton’s Third Law, and servo-based rudder control, packaged in a compact, interactive build.


[See more about the design process and circuitry](https://github.com/kobotabby/WalkAlongHovercraft/blob/main/Ethan%20Gan%20-%20Walk%20Along%20Hovercraft%20Project%20Summary.docx)

## Features

- **Air Cushion Lift**: Utilizes a lightweight skirt and downward fan propulsion to generate lift by creating a high-pressure air chamber.
- **Dual Motor Propulsion**: Employs two 12V DC motors—one for lift, one for thrust—to achieve movement across a surface.
- **Servo-Controlled Rudder**: A micro-servo adjusts a custom-designed rudder for directional control, demonstrating adverse yaw and airflow manipulation.
- **Drag Line System**: A tethered battery pack simulates weightlessness and makes the craft easier to control.
- **Modular 3D Printed Design**: All major structural parts including ducts, base, and rudder are 3D printed for easy customization.

## Technologies Used

- **Arduino Uno**: Microcontroller for motor and servo control.
- **DC Motors & Micro Servo**: For lift, thrust, and steering.
- **Tinkercad & SketchUp**: Used for 3D modeling and printing components.
- **Transistors, Buttons, Breadboard**: Implemented in the circuit for motor control and user interaction.

## Key Engineering Challenges & Solutions

- **Insufficient Lift with Single Fan**  
  → Added a second fan dedicated to lift to enable hovering.

- **Fan Alignment & Air Leakage**  
  → Modified the duct design to lower the fan into the base for focused airflow.

- **Excessive Rear Weight**  
  → Replaced heavy duct with a lighter fan holder and trimmed the skirt size.

- **12V Motor Control via Arduino**  
  → Implemented transistors to allow Arduino to toggle motors with buttons safely.

## Demo

[Watch the prototype in action](https://www.youtube.com/watch?v=3dcQ3JC8JqY)

## Future Improvements

- Optimize the rudder control for finer turning.
- Integrate a wireless controller.
- Add sensors for autonomous behavior.
