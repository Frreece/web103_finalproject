# [LeaseTrack]

CodePath WEB103 Final Project

Designed and developed by: Jaurice Barber, Gabriela Araujo, Gabriel Restrepo, Shivendra Bhagat

🔗 Link to deployed app:

## About

### Description and Purpose

LeaseTrack is a maintenance request portal for apartment buildings where tenants can submit issues, managers can organize and assign requests, and technicians can track and update their assigned work.

### Inspiration

Apartment building maintenance is typically an incredibly involved and frustrating process, especially when both parties the managers and tenants don't have a good avenue of communication. LeaseTrack aims to alleviate some of the pangs of this process by creating exactly that avenue of communication.

## Tech Stack

**Frontend**
- React
- CSS
- JavaScript

**Backend**
- Node.js
- Express
- PostgreSQL

## Features

### Tenants Creating Maintenance Requests

Tenants will be able to create a maintenance request by filling out a form. The request will have fields such as building, category of issue, and description.

[gif goes here]

### Managers Viewing Maintenance Requests

Managers will be able to see and respond to maintanence requests filled out by all tenants.

[gif goes here]

### Tenants Viewing Maintenance Requests

Tenants will be able to view **only** their own maintanence requests within the home screen.

### Tenants Viewing Resolved Request History

Tenants will be able to view a history of their past resolved requests, so they have a record to reference if the same issue comes up again.

[gif goes here]

### Managers Updating Request Status

Managers will be able to update the status of a maintenance request (e.g., received, in progress, completed) and leave closing notes when a request is resolved. This keeps tenants informed of progress and creates a record of how each issue was handled.

[gif goes here]

### Managers Filtering & Sorting Requests

Managers will be able to filter and sort maintenance requests by status, urgency, date, or building, so they can quickly identify which requests need immediate attention.

[gif goes here]

### Managers Assigning Technicians to Requests

Managers will be able to assign one or more technicians to a maintenance request based on the type of issue. Each assignment will include details such as assignment status, assignment date, and an estimated completion date.

[gif goes here]

### Technicians Viewing and Updating Assigned Requests

Technicians will be able to view maintenance requests assigned to them and update the assignment status as they begin or complete work. This helps managers track progress and gives technicians a clear list of responsibilities.

[gif goes here]

### Validated Maintenance Request Submission

LeaseTrack will validate submitted maintenance requests before saving them to the database. Required fields such as building, issue category, urgency level, and description must be completed so managers receive enough information to respond effectively.

[gif goes here]

## Additional Features (Stretch Goals)

### Managers Viewing Maintenance Dashboard

Managers will be able to view a dashboard displaying the total number of open, in-progress, and completed maintenance requests, providing a quick overview of building maintenance activity.

[gif goes here]

### Managers Exporting Maintenance Reports

Managers will be able to export maintenance requests as a PDF report for record-keeping, reporting, or board meetings.

[gif goes here]


## Installation Instructions

[instructions go here]