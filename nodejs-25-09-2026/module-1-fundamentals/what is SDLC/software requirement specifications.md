# System Requirements Specification (SRS) in SDLC

## What Is SRS?

**SRS** usually stands for **Software Requirements Specification**. It is a formal document that describes what a software system must do and the conditions under which it must operate.

Some organizations use SRS to mean **System Requirements Specification**. The purpose is the same: to create a shared agreement between the customer, users, business analysts, designers, developers, testers, and project managers.

SRS describes **what the system must do**, not the detailed code or implementation of **how** it will do it.

## Purpose of an SRS

- Define the complete scope of the system.
- Record customer and user expectations.
- Provide a basis for system design and development.
- Help testers create test cases.
- Provide a reference for project estimates and schedules.
- Reduce misunderstandings and changing requirements.
- Help confirm that the delivered system satisfies the agreed requirements.

## Main Contents of an SRS

### 1. Introduction

- Purpose of the document.
- Product scope.
- Definitions, acronyms, and abbreviations.
- References.
- Overview of the document.

### 2. Overall Description

- Product perspective and system context.
- Product functions at a high level.
- User types and characteristics.
- Operating environment.
- Design and implementation constraints.
- Assumptions and dependencies.

### 3. Functional Requirements

Functional requirements describe the actions and services the system must provide.

Examples:

- A user can create an account.
- A customer can add products to a cart.
- An administrator can generate a sales report.
- The system sends an email after a successful payment.

### 4. Non-Functional Requirements

Non-functional requirements describe the quality and operational characteristics of the system.

Examples:

- The page must load within two seconds.
- Only authorized users can access customer data.
- The system must be available 99.9% of the time.
- The application must support 10,000 concurrent users.
- The interface must work on desktop and mobile devices.

Common categories include performance, security, usability, reliability, availability, scalability, maintainability, portability, and compatibility.

### 5. External Interface Requirements

- User interface requirements.
- Hardware interfaces.
- Software interfaces and APIs.
- Communication and network interfaces.
- Third-party service integrations.

### 6. Data Requirements

- Data entities and attributes.
- Data formats and validation rules.
- Database requirements.
- Data retention and backup rules.
- Privacy and access requirements.

### 7. Acceptance Criteria

Acceptance criteria define the conditions that must be met for a feature or system to be accepted by the customer.

## Qualities of a Good SRS

A good SRS should be:

- **Correct:** Represents the actual business need.
- **Complete:** Includes all important requirements.
- **Unambiguous:** Has only one possible meaning.
- **Consistent:** Requirements do not conflict with each other.
- **Verifiable:** Requirements can be tested or measured.
- **Feasible:** Requirements can be built within the available limits.
- **Traceable:** Each requirement can be followed through design, code, and testing.
- **Prioritized:** Important requirements are identified clearly.

# Types of Diagrams Used in SDLC

There is no single fixed list of diagrams for every project. The diagrams used depend on the system and the SDLC model. The following are the most common types.

## UML Diagrams

UML, or **Unified Modeling Language**, is a standard way to visualize software systems.

### 1. Use Case Diagram

Shows system users, called actors, and the functions they can perform.

**Example:** Customer places an order; administrator manages products.

### 2. Class Diagram

Shows classes, attributes, methods, and relationships between classes. It is commonly used for object-oriented design.

### 3. Object Diagram

Shows a snapshot of objects and their relationships at a particular time.

### 4. Sequence Diagram

Shows the order of messages exchanged between users, objects, or services over time.

### 5. Communication Diagram

Shows how objects communicate with each other, focusing on relationships and messages.

### 6. Activity Diagram

Shows the flow of activities, decisions, parallel work, and completion steps.

### 7. State Machine Diagram

Shows the states of an object and the events that cause it to change state.

**Example:** An order changes from Pending to Paid, Shipped, Delivered, or Cancelled.

### 8. Component Diagram

Shows software components, their interfaces, and their dependencies.

### 9. Deployment Diagram

Shows how software components are deployed on servers, devices, containers, or networks.

### 10. Package Diagram

Shows how related classes or components are grouped into packages and how packages depend on each other.

### 11. Composite Structure Diagram

Shows the internal structure of a class, component, or collaboration.

### 12. Interaction Overview Diagram

Combines activity-flow ideas with references to interaction diagrams such as sequence diagrams.

### 13. Timing Diagram

Shows changes in object states or values along a time axis. It is useful for real-time and embedded systems.

### 14. Profile Diagram

Extends UML for a particular domain, platform, or technology by defining custom stereotypes and rules.

## Data and Database Diagrams

### 15. Entity-Relationship Diagram (ERD)

Shows entities, their attributes, and relationships in a database.

### 16. Relational Schema Diagram

Shows tables, columns, primary keys, foreign keys, and relationships between database tables.

### 17. Data Flow Diagram (DFD)

Shows how data moves through processes, data stores, external entities, and system boundaries.

DFDs are commonly described by levels:

- **Context diagram:** The entire system is shown as one process.
- **Level 0 diagram:** Shows the main processes and data flows.
- **Level 1 or deeper diagrams:** Breaks a process into more detailed subprocesses.

### 18. Data Dictionary

Documents the meaning, format, type, and rules for data items. It is usually a table or structured document rather than a visual diagram.

## Process and Workflow Diagrams

### 19. Flowchart

Shows steps, decisions, inputs, outputs, and the direction of a process.

### 20. Business Process Model and Notation (BPMN) Diagram

Shows business events, activities, decisions, participants, messages, and process flows using a standard notation.

### 21. Swimlane Diagram

Shows a process flow divided into lanes for departments, roles, systems, or teams responsible for each activity.

### 22. State Transition Diagram

Shows how an entity moves from one state to another when an event occurs. It is similar to a UML state machine diagram.

## Architecture and System Diagrams

### 23. System Context Diagram

Shows the system boundary and the people, external systems, devices, or organizations that interact with the system.

### 24. System Architecture Diagram

Shows the major layers, services, modules, databases, and connections in a system.

### 25. Component Architecture Diagram

Shows the main software components and how they depend on or communicate with one another.

### 26. Network Diagram

Shows servers, clients, routers, firewalls, networks, and communication paths.

### 27. Cloud Architecture Diagram

Shows cloud services, regions, virtual networks, storage, databases, security controls, and traffic flow.

### 28. Data Architecture Diagram

Shows how data is collected, stored, transformed, integrated, and consumed.

### 29. C4 Model Diagrams

The C4 model describes architecture at four levels:

- **System context:** The system and its users or external systems.
- **Container:** Applications, services, and data stores inside the system.
- **Component:** Components inside a container.
- **Code:** Classes and implementation details.

## Project and Planning Diagrams

### 30. Work Breakdown Structure (WBS)

Breaks a project into smaller deliverables and tasks.

### 31. Gantt Chart

Shows project tasks, durations, start dates, end dates, and dependencies on a timeline.

### 32. PERT Chart

Shows task dependencies and helps estimate project completion time when task durations are uncertain.

### 33. Network or Dependency Diagram

Shows the order and dependencies between project activities.

### 34. Traceability Matrix

Maps requirements to design elements, code modules, and test cases. It is usually a table, not a diagram, but it is important for requirements management.

## Security and Interaction Diagrams

### 35. Threat Model Diagram

Shows assets, trust boundaries, entry points, threats, and possible attack paths.

### 36. User Journey Map

Shows the steps, goals, actions, problems, and emotions a user experiences while completing a task.

### 37. Wireframe

Shows the basic layout and structure of a user interface before visual styling is added.

### 38. Mockup

Shows a detailed visual design of a screen, including colors, typography, and controls.

### 39. Prototype

Shows an interactive or partially interactive version of the system used to test ideas and user flows.

## Which Diagrams Are Most Common?

For a typical software project, the most useful diagrams are:

1. Use case diagram
2. Activity diagram or flowchart
3. ERD
4. Data flow diagram
5. Class diagram
6. Sequence diagram
7. System architecture diagram
8. Component diagram
9. Deployment diagram
10. Wireframe or prototype

## Short Summary

**SRS** is the agreed document describing the system's functional requirements, non-functional requirements, interfaces, data, constraints, and acceptance criteria. Diagrams support the SRS by showing system behavior, data, processes, architecture, databases, user interfaces, and project plans visually.
