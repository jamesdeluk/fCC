
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  
  if (prop === "artist") {
    if (value === "") {
      delete collection[id].artist;
    } else {
      collection[id].artist = value;
    }
  }
  if (prop === "tracks") {
    if (collection[id].tracks === undefined) {
      collection[id].tracks = [];
    }
    collection[id].tracks.push(value);
    if (value === "") {
      delete collection[id].tracks;
    }
  }

  return collection; // Don't change
}


// Alter values below to test your code
//updateRecords(5439, "artist", "ABBA")//, artist should be "ABBA"
//updateRecords(5439, "tracks", "Take a Chance on Me")//, tracks should have "Take a Chance on Me" as the last element.
//updateRecords(2548, "artist", "")//, artist should not be set
//updateRecords(1245, "tracks", "Addicted to Love")//, tracks should have "Addicted to Love" as the last element.
//updateRecords(2468, "tracks", "Free")//, tracks should have "1999" as the first element.
updateRecords(2548, "tracks", "")//, tracks should not be set

/*

https://medium.com/@prufrock123/js-dot-notation-vs-bracket-notation-797c4e34f01d

If prop isn't "tracks" and value is non-blank (value !== ""), update or set the value for that record album's property.

If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.

If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.

If value is empty (""), delete the given prop property from the album.

obj.prop = val
obj["prop"] = val
delete obj.prop

Hints
Use an else if statement to check the needed steps.

The second step listed in the instructions should be first in your else if statement.

To access the value of a key in this object, you will use collection[id][prop].

*/