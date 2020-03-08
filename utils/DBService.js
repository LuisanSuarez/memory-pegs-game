//mostly stolen from https://blog.jimdhughes.com/indexeddb-react/
import { openDB } from "idb";
// var XMLHttpRequest = require("xhr2");
// var FileAPI = require("file-api"),
//   File = FileAPI.File,
//   FileList = FileAPI.FileList,
//   FileReader = FileAPI.FileReader;

const dbName = "TINKER-PEGS-DATABASE";
const version = 3;

const getDB = async storeName => {
  const database = await openDB(dbName, version, {
    upgrade(database) {
      const store = database.createObjectStore(storeName, {
        keyPath: "pegNumber"
      });
      store.createIndex("pegNumber", "pegNumber");
    }
  });

  return database;
};

class DBService {
  async get(key, storeName) {
    const db = await getDB(storeName);
    const result = await db
      .transaction(storeName)
      .objectStore(storeName)
      .get(key);
    return result;
  }

  async add(object, storeName) {
    const db = await getDB(storeName);
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
    store.put(object);
    return tx.complete;
  }

  async delete(key, storeName) {
    const db = await getDB(storeName);
    const result = await db
      .transaction(storeName, "readwrite")
      .objectStore(storeName)
      .delete(key);
    return `deleted item with key ${key}`;
  }

  async deleteAll(storeName) {
    const db = await getDB(storeName);
    const result = await db
      .transaction(storeName, "readwrite")
      .objectStore(storeName)
      .clear();
    return `deleted the entire store`;
  }

  async storeComplete(storeName) {
    const db = await getDB(storeName);
    const tx = db.transaction(storeName);
    const store = tx.objectStore(storeName);
    const allKeys = await store.getAllKeys();
    return !(allKeys.length < 110);

    // var req = indexedDB.open(dbname);
    // var existed = true;
    // req.onsuccess = function () {
    //     req.result.close();
    //     if (!existed)
    //         indexedDB.deleteDatabase(dbname);
    //     callback(existed);
    // }
    // req.onupgradeneeded = function () {
    //     existed = false;
    // }
  }

  async copyToNewDatabase(source, targetStore, targetDb) {
    const db = await getDB(dbName, source);
    let cursor = await db.transaction(source).store.openCursor();
    while (cursor) {
      this.add(cursor.value, targetStore, targetDb);
      cursor = await cursor.continue();
    }
  }

  //mostly stolen from https://hacks.mozilla.org/2012/02/saving-images-and-files-in-localstorage/
  setFileToIndexedDB(pegNumberStr, imageLink, pegName, storeName) {
    if (process.browser) {
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
                Service.add(item, storeName)
                  .then(res => {})
                  .catch(err => {});
              } catch (e) {}
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
}

export const Service = new DBService();
