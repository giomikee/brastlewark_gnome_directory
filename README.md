# Bristlewark Gnome Directory

Welcome to the Bristlewark town's Gnomes directory. Here you can see a full list of all registered Gnomes in the town of Bristlewark

*Coded with ReactJS ES6*

## Getting Started

Clone the repository to your machine by running:
```bash
git clone https://github.com/giomikee/brastlewark_gnome_directory
```

Go into the project's root directory and install its dependencies:
```bash
cd brastlewark_gnome_directory && npm install
```

Once all the dependencies have been properly installed, you can run the app with:
```bash
npm start
```

Your browser should automatically open with the page of the app. Otherwise, it should be accessed by opening http://localhost:3000/ in your browser as long as the dependencies are properly installed.

## Description

This is an app that lists all the registered gnomes in the town of Bristlewark. Moreover, the user can search for a single gnome or multiple gnomes in particular using the filter tools provided in the page.

Aside from being case insensitive, the filters work with a heirarchy of priority in mind. The order of priority is as follows:
1. Name
2. Age (either exact or in a specified range)
3. Weight (either exact or in a specified range)
4. Height (either exact or in a specified range)
5. Hair color
6. A profession that a gnome may have
7. Name of another gnome that a gnome might be friends with

## Running tests

To run the project's tests, go into the its root directory and after that run `npm test` 
```bash
cd brastlewark_gnome_directory && npm test
```
