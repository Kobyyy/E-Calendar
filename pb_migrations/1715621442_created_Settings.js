/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ovxtoivvh0luykd",
    "created": "2024-05-13 17:30:42.982Z",
    "updated": "2024-05-13 17:30:42.982Z",
    "name": "Settings",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gzvemral",
        "name": "ColorScheme",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("ovxtoivvh0luykd");

  return dao.deleteCollection(collection);
})
