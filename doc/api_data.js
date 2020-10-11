define({ "api": [
  {
    "type": "post",
    "url": "/:projectId/:endpointName/",
    "title": "Add record to a worksheet",
    "name": "AddRecord",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project's unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endpointName",
            "description": "<p>Endpoint's name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "info",
            "description": "<p>Remaining requests's info.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/apiController.js",
    "groupTitle": "Project"
  },
  {
    "type": "delete",
    "url": "/:projectId/:endpointName/:id",
    "title": "Delete a record from a worksheet",
    "name": "DeleteRecord",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project's unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endpointName",
            "description": "<p>Endpoint's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Record's ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "info",
            "description": "<p>Remaining requests's info.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/apiController.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/:projectId/:endpointName",
    "title": "Retreive all records from a worksheet",
    "name": "GetAll",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project's unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endpointName",
            "description": "<p>Endpoint's name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>All records from worksheet.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "info",
            "description": "<p>Remaining requests's info.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/apiController.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/:projectId/:endpointName/:id",
    "title": "Retreive a record from a worksheet",
    "name": "GetOne",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project's unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endpointName",
            "description": "<p>Endpoint's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Record's ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Record from worksheet.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "info",
            "description": "<p>Remaining requests's info.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/apiController.js",
    "groupTitle": "Project"
  },
  {
    "type": "put",
    "url": "/:projectId/:endpointName/:id",
    "title": "Update a record from a worksheet",
    "name": "UpdateRecord",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project's unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endpointName",
            "description": "<p>Endpoint's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Record's ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "info",
            "description": "<p>Remaining requests's info.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/apiController.js",
    "groupTitle": "Project"
  }
] });
