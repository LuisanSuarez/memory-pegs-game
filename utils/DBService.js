//mostly stolen from https://blog.jimdhughes.com/indexeddb-react/
import { openDB } from "idb";

const dbName = "mydbname";
const storeName = "store1";
const version = 1;

const getDB = async (dbName, version, storename) => {
  const database = await openDB(dbName, version, {
    upgrade(database, oldVersion, newVersion, transaction) {
      const store = database.createObjectStore(storeName);
      store.put("Hello world!", "Hello");
    }
  });
  return database;
};

class DBService {
  async get(key) {
    const db = await getDB(dbName, version);
    const result = await db
      .transaction(storeName)
      .objectStore(storeName)
      .get(key);
    return result;
  }

  async add(object, key) {
    const db = await getDB(dbName, version);
    const result = await db
      .transaction(storeName, "readwrite")
      .objectStore(storeName)
      .put(object, key);
    //returns they key used to access the object you just stored
    return result;
  }

  async delete(key) {
    const db = await getDB(dbName, version);
    const result = await db
      .transaction(storeName, "readwrite")
      .objectStore(storeName)
      .delete(key);
    //returns nothing
    return `deleted item with key ${key}`;
  }

  async deleteAll() {
    const db = await getDB(dbName, version);
    const result = await db
      .transaction(storeName, "readwrite")
      .objectStore(storeName)
      .clear();
    return `deleted whole database`;
  }

  //mostly stolen from https://hacks.mozilla.org/2012/02/saving-images-and-files-in-localstorage/
  setFileToIndexedDB(pegNumberStr, imageLink, pegName) {
    var xhr = new XMLHttpRequest(),
      blob,
      fileReader = new FileReader();

    xhr.open("GET", imageLink, true);
    // Set the responseType to arraybuffer. "blob" is an option too, rendering manual Blob creation unnecessary, but the support for "blob" is not widespread enough yet
    xhr.responseType = "arraybuffer";

    xhr.addEventListener(
      "load",
      function() {
        if (xhr.status === 200) {
          // Create a blob from the response
          blob = new Blob([xhr.response], { type: "image/png" });

          // onload needed since Google Chrome doesn't support addEventListener for FileReader
          fileReader.onload = function(evt) {
            // Read out file contents as a Data URL
            var result = evt.target.result;
            // Set image src to Data URL
            // Store Data URL in localStorage
            var item = {
              pegNumber: pegNumberStr,
              image: result,
              pegName: pegName
            };
            try {
              Service.add(item, item.pegNumber)
                .then(res => {
                  console.log("Successfully stored:", res);
                })
                .catch(err => {
                  console.log("Error storing:", err);
                });
            } catch (e) {
              // console.log("Storage failed: " + e);
            }
          };
          // Load blob as Data URL
          fileReader.readAsDataURL(blob);
        }
      },
      false
    );
    // Send XHR
    xhr.send();
  }
}

export const Service = new DBService();
