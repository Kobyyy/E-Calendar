/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3jdj4uhto0k487v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8b6aj4ys",
    "name": "Fk_User_Id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3jdj4uhto0k487v")

  // remove
  collection.schema.removeField("8b6aj4ys")

  return dao.saveCollection(collection)
})
