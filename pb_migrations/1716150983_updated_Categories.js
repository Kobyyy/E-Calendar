/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3jdj4uhto0k487v")

  // remove
  collection.schema.removeField("hbozodyk")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3jdj4uhto0k487v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hbozodyk",
    "name": "Fk_Event_Id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "28e6nooq3qh5hc6",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
