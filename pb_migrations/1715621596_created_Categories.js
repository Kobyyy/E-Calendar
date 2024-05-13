/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3jdj4uhto0k487v",
    "created": "2024-05-13 17:33:16.137Z",
    "updated": "2024-05-13 17:33:16.137Z",
    "name": "Categories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "r1dpgq87",
        "name": "CategoryName",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3jdj4uhto0k487v");

  return dao.deleteCollection(collection);
})
