# Dynamic Form Generator

## Overview

The **Dynamic Form Generator** is a web application that allows users to dynamically create and customize forms using a JSON schema. The app enables users to modify the form schema, generate forms in real-time, copy the schema to the clipboard, and download form submissions as JSON files.

---

## Features

- **JSON Schema-based Form Generation**  
  Create forms dynamically by providing a JSON schema with form field definitions.

- **Live Form Preview**  
  Modify the JSON schema and instantly preview the form layout and functionality.

- **Copy JSON Schema**  
  Copy the form schema to your clipboard for use or modification.

- **Download Form Submissions**  
  Save submitted form data as a `.json` file for integration or record-keeping.

- **Responsive Design**  
  Split-screen layout to view the JSON editor and form preview simultaneously.

---

## Installation

1. **Clone the Repository**

   - git clone <repository_url>
   - cd <project_directory>

2. **Install Dependencies**

   - npm install

3. **Start the Development Server**
   - npm run dev

## Usage

- Modify the JSON schema in the provided editor.
- View live updates in the form preview panel.
- Copy the JSON schema for further use or download form submissions after testing.

##Default Schema

###Here’s the default schema used in the form generator:

{
"formTitle": "Project Requirements Survey",
"formDescription": "Please fill out this survey about your project needs",
"fields": [
{
"id": "name",
"type": "text",
"label": "Full Name",
"required": true,
"placeholder": "Enter your full name"
},
{
"id": "email",
"type": "email",
"label": "Email Address",
"required": true,
"placeholder": "you@example.com",
"validation": {
"pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
"message": "Please enter a valid email address"
}
},
{
"id": "companySize",
"type": "select",
"label": "Company Size",
"required": true,
"options": [
{
"value": "1-50",
"label": "1-50 employees"
},
{
"value": "51-200",
"label": "51-200 employees"
},
{
"value": "201-1000",
"label": "201-1000 employees"
},
{
"value": "1000+",
"label": "1000+ employees"
}
]
},
{
"id": "industry",
"type": "radio",
"label": "Industry",
"required": true,
"options": [
{
"value": "tech",
"label": "Technology"
},
{
"value": "healthcare",
"label": "Healthcare"
},
{
"value": "finance",
"label": "Finance"
},
{
"value": "retail",
"label": "Retail"
},
{
"value": "other",
"label": "Other"
}
]
},
{
"id": "timeline",
"type": "select",
"label": "Project Timeline",
"required": true,
"options": [
{
"value": "immediate",
"label": "Immediate (within 1 month)"
},
{
"value": "short",
"label": "Short-term (1-3 months)"
},
{
"value": "medium",
"label": "Medium-term (3-6 months)"
},
{
"value": "long",
"label": "Long-term (6+ months)"
}
]
},
{
"id": "comments",
"type": "textarea",
"label": "Additional Comments",
"required": false,
"placeholder": "Any other details you'd like to share..."
}
]
}
