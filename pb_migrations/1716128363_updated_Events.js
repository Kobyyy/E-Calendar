/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("28e6nooq3qh5hc6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cjzznuep",
    "name": "Fk_Category_Id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "3jdj4uhto0k487v",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("28e6nooq3qh5hc6")

  // remove
  collection.schema.removeField("cjzznuep")

  return dao.saveCollection(collection)
})
