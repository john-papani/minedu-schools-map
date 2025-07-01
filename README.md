# Minedu Schools Map

A React-based interactive map visualizing schools across Greece using open data from the Greek Government’s Open Data Portal.

---

## Overview

This project brings together information about **all schools in Greece** on one easy-to-explore map. It leverages open datasets provided by the Greek Ministry of Education ([data.gov.gr - minedu\_schools](https://data.gov.gr/datasets/minedu_schools)) to display school locations, types, and contact details.


**Note:** This is an independent, non-official project aimed at making public educational data more accessible and user-friendly.

---

## Features

* Interactive map with clustered school markers
* Dynamic filtering by school type
* Popup info boxes showing school details (address, phone, email)
* Zoom-based marker loading for performance
* External links to Google Maps for navigation
* Responsive design with Tailwind CSS styling




## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/john-papani/minedu-schools-map
   cd minedu-schools-map
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:3000`

---

## Usage

* Use the filters to select which school types to display.
* Pan and zoom the map to load visible schools dynamically.
* Click on markers to see detailed school info and get a link to Google Maps.
* Explore education distribution throughout Greece!

---

## Data Source

* [Greek Government Open Data Portal - Minedu Schools Dataset](https://data.gov.gr/datasets/minedu_schools)

---

## Technologies Used

* React & React Leaflet
* Leaflet Marker Cluster plugin
* RBush spatial index for performance
* Tailwind CSS for styling
* Next.js