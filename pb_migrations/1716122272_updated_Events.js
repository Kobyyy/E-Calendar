/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("28e6nooq3qh5hc6")

  // remove
  collection.schema.removeField("zdln6les")

  // remove
  collection.schema.removeField("nnoi8y8u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fmlnysgk",
    "name": "EventStart",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ghrfswhi",
    "name": "EventEnd",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("28e6nooq3qh5hc6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zdln6les",
    "name": "EventStart",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nnoi8y8u",
    "name": "EventEnd",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("fmlnysgk")

  // remove
  collection.schema.removeField("ghrfswhi")

  return dao.saveCollection(collection)
})
