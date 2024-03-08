# Fillout API Wrapper in TypeScript

This project provides a simple REST API server that interfaces with the Fillout.com API to fetch form responses with an option to apply custom filters. Built with TypeScript and Express.js, it aims to demonstrate how to extend Fillout.com's API capabilities, focusing on modularity, type safety, and scalability.

## Features

- Fetch and filter form responses from Fillout.com using custom filter conditions.
- Supports pagination and filtering based on specific criteria such as equals, does not equal, greater than, and less than.
- Implements robust error handling for a reliable API experience.

## Getting Started

Follow these instructions to get your copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have Node.js and npm installed on your system. This project requires Node.js version 12.x or later.

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/fillout-api-wrapper-ts.git
cd fillout-api-wrapper-ts
```
2. **Install dependencies:**
```bash
npm install
```
3. **Set up environment variables:**
```bash
FILLOUT_API_KEY=your_fillout_api_key_here
PORT=3000
```
### Running the Application
Compile TypeScript to JavaScript and start the server:
```bash
npm run build
npm start
```
Your server should now be running on http://localhost:3000.


### Usage
To fetch filtered form responses, make a GET request to `/{formId}/filteredResponses` with the `filters` query parameter. Here's an example using `curl`:
```bash
curl -X GET "http://localhost:3000/cLZojxk94ous/filteredResponses" --data-urlencode 'filters=[{"id":"nameId","condition":"equals","value":"Timmy"}]'
```