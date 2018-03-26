define({ "api": [
  {
    "type": "get",
    "url": "/empresa/:empresa_id/contrato",
    "title": "8. Listar contratos de una empresa.",
    "version": "0.1.0",
    "name": "GetContratosDeEmpresa",
    "group": "Empresa",
    "description": "<p>Devuelve los contratos de la empresa correspondiente al id como parametro.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token del usuario</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "contratos",
            "description": "<p>Array con todos los propietarios de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "contratos.id",
            "description": "<p>Id del contrato</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contratos.fecha_inicio",
            "description": "<p>Fecha de inicio del contrato</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contratos.fecha_fin",
            "description": "<p>Fecha de finalización del contrato</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "contratos.pagado",
            "description": "<p>Indica si el contrato está pagado</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "contratos.createAt",
            "description": "<p>Fecha en la que es creada</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "contratos.updateAt",
            "description": "<p>Fecha en la que es modificada</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "contratos.empresaId",
            "description": "<p>Id de la empresa del contrato</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indica si ha ido bien.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Correcta",
          "content": "{\n    \"contratos\": [\n           {\n               \"id\": 3,\n               \"fecha_inicio\": \"2018-03-21T11:13:22.997Z\",\n               \"fecha_fin\": \"2019-03-21T11:13:22.997Z\",\n               \"pagado\": true,\n               \"createdAt\": \"2018-03-21T11:13:22.997Z\",\n               \"updatedAt\": \"2018-03-21T11:13:22.997Z\",\n               \"empresaId\": 1\n           }\n       ],\n       \"success\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>No tienes permisos para acceder a este método.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not-found",
            "description": "<p>El id de la empresa introducido no existe.</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "Unprocessable-Entity",
            "description": "<p>El valor o los valores introducidos no se pueden procesar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not found",
          "content": "{\n       \"success\": false,\n       \"error\": \"No existe una empresa con id: 2\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/empresa.js",
    "groupTitle": "Empresa"
  },
  {
    "type": "get",
    "url": "/empresa/:empresa_id",
    "title": "3. Listar una empresa.",
    "version": "0.1.0",
    "name": "GetEmpresa",
    "group": "Empresa",
    "description": "<p>Devuelve la empresa correspondiente al id como parametro.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token del usuario</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "empresa",
            "description": "<p>Array con todas las empresas</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "empresa.id",
            "description": "<p>Id de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "empresa.nif",
            "description": "<p>NIF de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "empresa.nombre",
            "description": "<p>Nombre de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "empresa.notas",
            "description": "<p>Notas de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "empresa.enlaceArchivos",
            "description": "<p>Enlace a archivos de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "empresa.createAt",
            "description": "<p>Fecha en la que es creada</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "empresa.updateAt",
            "description": "<p>Fecha en la que es modificada</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "empresa.tipoempresaId",
            "description": "<p>Id del tipo de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indica si ha ido bien.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Correcta",
          "content": "{\n    \"empresa\": {\n           \"id\": 1,\n           \"nif\": \"34567892K\",\n           \"nombre\": \"Arturo S.L.\",\n           \"notas\": \"Nos debe una llamada\",\n           \"enlaceArchivos\": \"C://mis_datos/arturo.s.l./\",\n           \"createdAt\": \"2018-03-19T17:43:47.416Z\",\n           \"updatedAt\": \"2018-03-19T17:43:47.416Z\",\n           \"tipoempresaId\": 1\n       },\n       \"success\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>No tienes permisos para acceder a este método.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not-found",
            "description": "<p>El id de la empresa introducido no existe.</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "Unprocessable-Entity",
            "description": "<p>El valor o los valores introducidos no se pueden procesar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not found",
          "content": "{\n       \"success\": false,\n       \"error\": \"No existe una empresa con id: 2\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/empresa.js",
    "groupTitle": "Empresa"
  },
  {
    "type": "get",
    "url": "/empresa",
    "title": "2. Listar empresas.",
    "version": "0.1.0",
    "name": "GetEmpresas",
    "group": "Empresa",
    "description": "<p>Devuelve todas las empresas guardadas en la base de datos.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token del usuario</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "empresas",
            "description": "<p>Array con todas las empresas</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "empresas.id",
            "description": "<p>Id de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "empresas.nif",
            "description": "<p>NIF de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "empresas.nombre",
            "description": "<p>Nombre de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "empresas.notas",
            "description": "<p>Notas de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "empresas.enlaceArchivos",
            "description": "<p>Enlace a archivos de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "empresas.createAt",
            "description": "<p>Fecha en la que es creada</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "empresas.updateAt",
            "description": "<p>Fecha en la que es modificada</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "empresas.tipoempresaId",
            "description": "<p>Id del tipo de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indica si ha ido bien.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Correcta",
          "content": "{\n    \"empresas\": [\n           {\n               \"id\": 1,\n               \"nif\": \"34567892K\",\n               \"nombre\": \"Arturo S.L.\",\n               \"notas\": \"Nos debe una llamada\",\n               \"enlaceArchivos\": \"C://mis_datos/arturo.s.l./\",\n               \"createdAt\": \"2018-03-19T17:43:47.416Z\",\n               \"updatedAt\": \"2018-03-19T17:43:47.416Z\",\n               \"tipoempresaId\": 1\n           }\n       ],\n       \"success\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>No tienes permisos para acceder a este método.</p>"
          }
        ]
      }
    },
    "filename": "./routes/empresa.js",
    "groupTitle": "Empresa"
  },
  {
    "type": "get",
    "url": "/empresa/:empresa_id/propietario",
    "title": "7. Listar propietarios de una empresa.",
    "version": "0.1.0",
    "name": "GetPropietariosDeEmpresa",
    "group": "Empresa",
    "description": "<p>Devuelve los propietarios de la empresa correspondiente al id como parametro.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token del usuario</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "propietarios",
            "description": "<p>Array con todos los propietarios de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "propietarios.id",
            "description": "<p>Id del propietario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "propietarios.nombre",
            "description": "<p>Nombre del propietario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "propietarios.correo",
            "description": "<p>Correo del propietario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "propietarios.telefono",
            "description": "<p>Telefono del propietario</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "propietarios.createAt",
            "description": "<p>Fecha en la que es creada</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "propietarios.updateAt",
            "description": "<p>Fecha en la que es modificada</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "propietarios.empresaId",
            "description": "<p>Id de la empresa que es propietario</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indica si ha ido bien.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Correcta",
          "content": "{\n    \"propietarios\": [\n           {\n               \"id\": 3,\n               \"nombre\": \"Arturo\",\n               \"correo\": \"arturo@mueble.com\",\n               \"telefono\": \"987654321\",\n               \"createdAt\": \"2018-03-21T11:13:22.997Z\",\n               \"updatedAt\": \"2018-03-21T11:13:22.997Z\",\n               \"empresaId\": 1\n           }\n       ],\n       \"success\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>No tienes permisos para acceder a este método.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not-found",
            "description": "<p>El id de la empresa introducido no existe.</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "Unprocessable-Entity",
            "description": "<p>El valor o los valores introducidos no se pueden procesar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not found",
          "content": "{\n       \"success\": false,\n       \"error\": \"No existe una empresa con id: 2\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/empresa.js",
    "groupTitle": "Empresa"
  },
  {
    "type": "get",
    "url": "/empresa/:empresa_id/tienda",
    "title": "6. Listar tiendas de una empresa.",
    "version": "0.1.0",
    "name": "GetTiendasDeEmpresa",
    "group": "Empresa",
    "description": "<p>Devuelve las tiendas que pertenecen a la empresa correspondiente al id como parametro.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token del usuario</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tiendas",
            "description": "<p>Array con todas las tiendas de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tiendas.id",
            "description": "<p>Id de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tiendas.nombre",
            "description": "<p>Nombre de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tiendas.direccion",
            "description": "<p>Direccion de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tiendas.correo",
            "description": "<p>Correo de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tiendas.createAt",
            "description": "<p>Fecha en la que es creada</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tiendas.updateAt",
            "description": "<p>Fecha en la que es modificada</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tiendas.empresaId",
            "description": "<p>Id de la empresa a la que pertenece</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tiendas.provinciaId",
            "description": "<p>Id de la provincia de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indica si ha ido bien.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Correcta",
          "content": "{\n    \"tiendas\": [\n           {\n               \"id\": 1,\n               \"nombre\": \"Tienda Chiclana\",\n               \"direccion\": \"Calle Badajoz numero 2\",\n               \"correo\": \"chiclana@muebles.com\",\n               \"createdAt\": \"2018-03-19T17:43:47.416Z\",\n               \"updatedAt\": \"2018-03-19T17:43:47.416Z\",\n               \"empresaId\": 1,\n               \"provinciaId: 18\n           }\n       ],\n       \"success\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>No tienes permisos para acceder a este método.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not-found",
            "description": "<p>El id de la empresa introducido no existe.</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "Unprocessable-Entity",
            "description": "<p>El valor o los valores introducidos no se pueden procesar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not found",
          "content": "{\n       \"success\": false,\n       \"error\": \"No existe una empresa con id: 2\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/empresa.js",
    "groupTitle": "Empresa"
  },
  {
    "type": "post",
    "url": "/empresa",
    "title": "1. Crear una empresa.",
    "version": "0.1.0",
    "name": "PostEmpresas",
    "group": "Empresa",
    "description": "<p>Crea una nueva empresa y la almacena.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token del usuario</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Id de la empresa. No se recomienda introducir.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nif",
            "description": "<p>NIF de la empresa</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre de la empresa</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "notas",
            "description": "<p>Notas de la empresa</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "enlaceArchivos",
            "description": "<p>Enlace a archivos de la empresa</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "createAt",
            "description": "<p>Fecha en la que se creó</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "updateAt",
            "description": "<p>Fecha en la que se modificó</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "tipoempresaId",
            "description": "<p>Id del tipo de la empresa</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "empresa",
            "description": "<p>Array con todas las empresas</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "empresa.id",
            "description": "<p>Id de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "empresa.nif",
            "description": "<p>NIF de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "empresa.nombre",
            "description": "<p>Nombre de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "empresa.notas",
            "description": "<p>Notas de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "empresa.enlaceArchivos",
            "description": "<p>Enlace a archivos de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "empresa.createAt",
            "description": "<p>Fecha en la que es creada</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "empresa.updateAt",
            "description": "<p>Fecha en la que es modificada</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "empresa.tipoempresaId",
            "description": "<p>Id del tipo de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indica si ha ido bien.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Correcta",
          "content": "{\n    \"empresa\": {\n           \"id\": 1,\n           \"nif\": \"34567892K\",\n           \"nombre\": \"Arturo S.L.\",\n           \"notas\": \"Nos debe una llamada\",\n           \"enlaceArchivos\": \"C://mis_datos/arturo.s.l./\",\n           \"createdAt\": \"2018-03-19T17:43:47.416Z\",\n           \"updatedAt\": \"2018-03-19T17:43:47.416Z\",\n           \"tipoempresaId\": 1\n       },\n       \"success\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>No tienes permisos para acceder a este método.</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "Unprocessable-Entity",
            "description": "<p>Los valores introducidos violan las restricciones</p>"
          }
        ]
      }
    },
    "filename": "./routes/empresa.js",
    "groupTitle": "Empresa"
  },
  {
    "type": "delete",
    "url": "/empresa",
    "title": "5. Eliminar una empresa.",
    "version": "0.1.0",
    "name": "RemoveEmpresa",
    "group": "Empresa",
    "description": "<p>Elimina una empresa de la base de datos.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token del usuario</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mensaje",
            "description": "<p>Mensaje que notifica que se ha eliminado</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indica si ha ido bien.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Correcta",
          "content": "{\n       \"mensaje\": \"Empresa eliminada\",\n       \"success\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>No tienes permisos para acceder a este método.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not-found",
            "description": "<p>El id de la empresa introducido no existe.</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "Unprocessable-Entity",
            "description": "<p>El valor o los valores introducidos no se pueden procesar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not found",
          "content": "{\n       \"success\": false,\n       \"error\": \"No existe una empresa con id: 2\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/empresa.js",
    "groupTitle": "Empresa"
  },
  {
    "type": "put",
    "url": "/empresa",
    "title": "4. Modifica una empresa.",
    "version": "0.1.0",
    "name": "UpdateEmpresa",
    "group": "Empresa",
    "description": "<p>Modifica la empresa, la almacena y la devuelve</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token del usuario</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Id de la empresa. No se recomienda introducir.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nif",
            "description": "<p>NIF de la empresa</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nombre",
            "description": "<p>Nombre de la empresa</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "notas",
            "description": "<p>Notas de la empresa</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "enlaceArchivos",
            "description": "<p>Enlace a archivos de la empresa</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "createAt",
            "description": "<p>Fecha en la que se creó</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "updateAt",
            "description": "<p>Fecha en la que se modificó</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "tipoempresaId",
            "description": "<p>Id del tipo de la empresa</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "empresas",
            "description": "<p>Array con todas las empresas</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "empresas.id",
            "description": "<p>Id de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "empresas.nif",
            "description": "<p>NIF de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "empresas.nombre",
            "description": "<p>Nombre de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "empresas.notas",
            "description": "<p>Notas de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "empresas.enlaceArchivos",
            "description": "<p>Enlace a archivos de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "empresas.createAt",
            "description": "<p>Fecha en la que es creada</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "empresas.updateAt",
            "description": "<p>Fecha en la que es modificada</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "empresas.tipoempresaId",
            "description": "<p>Id del tipo de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indica si ha ido bien.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Correcta",
          "content": "{\n    \"empresas\": [\n           {\n               \"id\": 1,\n               \"nif\": \"34567892K\",\n               \"nombre\": \"Arturo S.L.\",\n               \"notas\": \"Nos debe una llamada\",\n               \"enlaceArchivos\": \"C://mis_datos/arturo.s.l./\",\n               \"createdAt\": \"2018-03-19T17:43:47.416Z\",\n               \"updatedAt\": \"2018-03-19T17:43:47.416Z\",\n               \"tipoempresaId\": 1\n           }\n       ],\n       \"success\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>No tienes permisos para acceder a este método.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not-found",
            "description": "<p>El id de la empresa introducido no existe.</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "Unprocessable-Entity",
            "description": "<p>El valor o los valores introducidos no se pueden procesar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not found",
          "content": "{\n       \"success\": false,\n       \"error\": \"No existe una empresa con id: 2\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/empresa.js",
    "groupTitle": "Empresa"
  },
  {
    "type": "get",
    "url": "/tienda/:tienda_id",
    "title": "2. Listar las poblaciones de una provincia",
    "version": "0.1.0",
    "name": "GetPoblacionesDeProvincia",
    "group": "Provincia",
    "description": "<p>Devuelve las poblaciones de la provincia correspondiente al id como parametro.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token del usuario</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "poblaciones",
            "description": "<p>Array con las poblaciones.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "poblaciones.id",
            "description": "<p>Id de la poblacion.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "poblaciones.nombre",
            "description": "<p>Nombre de la poblacion.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "poblaciones.cod_postal",
            "description": "<p>Código postal de la poblacion.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "poblaciones.createAt",
            "description": "<p>Fecha en la que es creada.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "poblaciones.updateAt",
            "description": "<p>Fecha en la que es modificada.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "poblaciones.provinciaId",
            "description": "<p>Provincia a la que pertenece.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indica si ha ido bien.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Correcta",
          "content": "{\n     \"poblaciones\": [\n           {\n               \"id\": 1,\n               \"nombre\": \"Alegría-Dulantzi\",\n               \"cod_postal\": \"1240\",\n               \"createdAt\": \"2018-03-18T23:00:00.000Z\",\n               \"updatedAt\": \"2018-03-18T23:00:00.000Z\",\n               \"provinciaId\": 1\n           },\n           ...\n       ],\n       \"success\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>No tienes permisos para acceder a este método.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not-found",
            "description": "<p>El id de la provincia introducido no existe.</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "Unprocessable-Entity",
            "description": "<p>El valor o los valores introducidos no se pueden procesar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not found",
          "content": "{\n       \"success\": false,\n       \"error\": \"No existe una provincia con id: 30\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/provincia.js",
    "groupTitle": "Provincia"
  },
  {
    "type": "get",
    "url": "/provincia",
    "title": "1. Listar provincias.",
    "version": "0.1.0",
    "name": "GetProvincias",
    "group": "Provincia",
    "description": "<p>Devuelve todas las provincias guardadas en la base de datos.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token del usuario</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "provincias",
            "description": "<p>Array con las provincias</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "provincias.id",
            "description": "<p>Id de la provincia</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "provincias.nombre",
            "description": "<p>Nombre de la provincia</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "provincias.createAt",
            "description": "<p>Fecha en la que es creada</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "provincias.updateAt",
            "description": "<p>Fecha en la que es modificada</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indica si ha ido bien.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Correcta",
          "content": "{\n    \"provincias\": [\n           {\n               \"id\": 1,\n               \"nombre\": \"Álava\",\n               \"createdAt\": \"2018-03-18T23:00:00.000Z\",\n               \"updatedAt\": \"2018-03-18T23:00:00.000Z\"\n           },\n           ...\n       ],\n       \"success\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>No tienes permisos para acceder a este método.</p>"
          }
        ]
      }
    },
    "filename": "./routes/provincia.js",
    "groupTitle": "Provincia"
  },
  {
    "type": "get",
    "url": "/tienda/:tienda_id",
    "title": "7. Añadir un nuevo trabajador a la tienda",
    "version": "0.1.0",
    "name": "AddTrabajadorALaTienda",
    "group": "Tienda",
    "description": "<p>Añade al trabajador en la tienda y devuelve al trabajador añadido con la entrada de la tabla que los conecta.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token del usuario</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "trabajadorId",
            "description": "<p>Id del trabajador que se quiere añadir a la lista de trabajadores.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "trabajador",
            "description": "<p>Array con todos los trabajadores de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "trabajador.id",
            "description": "<p>Id del trabajadores</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trabajador.nombre",
            "description": "<p>Nombre del trabajadores</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trabajador.correo",
            "description": "<p>Correo del trabajadores</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trabajador.telefono",
            "description": "<p>Telefono del trabajadores</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "trabajador.createAt",
            "description": "<p>Fecha en la que es creada</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "trabajador.updateAt",
            "description": "<p>Fecha en la que es modificada</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "trabajador.empresaId",
            "description": "<p>Id de la empresa que es propietario dicho trabajador</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tienda_trabajador",
            "description": "<p>Campos de la tabla que conecta la tienda con el trabajador.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tienda_trabajador.createAt",
            "description": "<p>Fecha en la que es creada la conexión</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tienda_trabajador.updateAt",
            "description": "<p>Fecha en la que es modificada la conexión</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tienda_trabajador.tiendaId",
            "description": "<p>Id de la tienda conectada</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tienda_trabajador.trabajadorId",
            "description": "<p>Id del trabajador conectado</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indica si ha ido bien.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Correcta",
          "content": "{\n    \"trabajador\": {\n           \"id\": 3,\n           \"nombre\": \"Arturo\",\n           \"correo\": \"arturo@mueble.com\",\n           \"telefono\": \"987654321\",\n           \"createdAt\": \"2018-03-21T11:13:22.997Z\",\n           \"updatedAt\": \"2018-03-21T11:13:22.997Z\",\n           \"empresaId\": 1,\n           \"tienda_trabajador\": {\n               \"createdAt\": \"2018-03-22T08:45:16.409Z\",\n               \"updatedAt\": \"2018-03-22T08:45:16.409Z\",\n               \"tiendaId\": 14,\n               \"trabajadorId\": 3\n           }\n       },\n       \"success\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>No tienes permisos para acceder a este método.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not-found",
            "description": "<p>El id de la tienda introducido no existe.</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "Unprocessable-Entity",
            "description": "<p>El valor o los valores introducidos no se pueden procesar o el trabajador no existe.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not found",
          "content": "{\n       \"success\": false,\n       \"error\": \"No existe una tienda con id: 2\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/tienda.js",
    "groupTitle": "Tienda"
  },
  {
    "type": "get",
    "url": "/tienda/:tienda_id",
    "title": "9. Listar las mochilas de una tienda.",
    "version": "0.1.0",
    "name": "GetMochilasDeTienda",
    "group": "Tienda",
    "description": "<p>Devuelve las mochilas de la tienda correspondiente al id como parametro.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token del usuario</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "mochila",
            "description": "<p>Campos de la mochila</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "mochila.id",
            "description": "<p>Id de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mochila.licencia",
            "description": "<p>Licencia de la mochila</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "mochila.createAt",
            "description": "<p>Fecha en la que es creada</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "mochila.updateAt",
            "description": "<p>Fecha en la que es modificada</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "mochila.tiendaId",
            "description": "<p>Id de la tienda a la que pertenece</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "mochila.tipoMochila",
            "description": "<p>Id del tipo de la mochila.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indica si ha ido bien.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Correcta",
          "content": "{\n    \"mochilas\": [\n        {\n               \"id\": 1,\n               \"licencia\": \"TW 492728942982782029728298479248523498578\",\n               \"createdAt\": \"2018-03-19T17:43:47.416Z\",\n               \"updatedAt\": \"2018-03-19T17:43:47.416Z\",\n               \"tiendaId\": 1,\n               \"tipoMochila\": 2,\n           }\n       ]\n       \"success\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>No tienes permisos para acceder a este método.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not-found",
            "description": "<p>El id de la tienda introducido no existe.</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "Unprocessable-Entity",
            "description": "<p>El valor o los valores introducidos no se pueden procesar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not found",
          "content": "{\n       \"success\": false,\n       \"error\": \"No existe una tienda con id: 2\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/tienda.js",
    "groupTitle": "Tienda"
  },
  {
    "type": "get",
    "url": "/tienda/:tienda_id",
    "title": "3. Listar una tienda.",
    "version": "0.1.0",
    "name": "GetTienda",
    "group": "Tienda",
    "description": "<p>Devuelve la tienda correspondiente al id como parametro.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token del usuario</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tienda",
            "description": "<p>Array con la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tienda.id",
            "description": "<p>Id de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tienda.nombre",
            "description": "<p>Nombre de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tienda.direccion",
            "description": "<p>Direccion de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tienda.correo",
            "description": "<p>Correo de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tienda.createAt",
            "description": "<p>Fecha en la que es creada</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tienda.updateAt",
            "description": "<p>Fecha en la que es modificada</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tienda.empresaId",
            "description": "<p>Id de la empresa a la que pertenece</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tienda.provinciaId",
            "description": "<p>Id de la provincia de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indica si ha ido bien.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Correcta",
          "content": "{\n    \"tienda\": {\n           \"id\": 1,\n           \"nombre\": \"Tienda Chiclana\",\n           \"direccion\": \"Calle Badajoz numero 2\",\n           \"correo\": \"chiclana@muebles.com\",\n           \"createdAt\": \"2018-03-19T17:43:47.416Z\",\n           \"updatedAt\": \"2018-03-19T17:43:47.416Z\",\n           \"empresaId\": 1,\n           \"provinciaId\": 18\n       },\n       \"success\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>No tienes permisos para acceder a este método.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not-found",
            "description": "<p>El id de la tienda introducido no existe.</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "Unprocessable-Entity",
            "description": "<p>El valor o los valores introducidos no se pueden procesar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not found",
          "content": "{\n       \"success\": false,\n       \"error\": \"No existe una tienda con id: 2\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/tienda.js",
    "groupTitle": "Tienda"
  },
  {
    "type": "get",
    "url": "/tienda",
    "title": "2. Listar tiendas.",
    "version": "0.1.0",
    "name": "GetTiendas",
    "group": "Tienda",
    "description": "<p>Devuelve todas las tiendas guardadas en la base de datos.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token del usuario</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tiendas",
            "description": "<p>Array con la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tiendas.id",
            "description": "<p>Id de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tiendas.nombre",
            "description": "<p>Nombre de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tiendas.direccion",
            "description": "<p>Direccion de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tiendas.correo",
            "description": "<p>Correo de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tiendas.createAt",
            "description": "<p>Fecha en la que es creada</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tiendas.updateAt",
            "description": "<p>Fecha en la que es modificada</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tiendas.empresaId",
            "description": "<p>Id de la empresa a la que pertenece</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tiendas.provinciaId",
            "description": "<p>Id de la provincia de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indica si ha ido bien.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Correcta",
          "content": "{\n    \"tiendas\": [\n           {\n               \"id\": 1,\n               \"nombre\": \"Tienda Chiclana\",\n               \"direccion\": \"Calle Badajoz numero 2\",\n               \"correo\": \"chiclana@muebles.com\",\n               \"createdAt\": \"2018-03-19T17:43:47.416Z\",\n               \"updatedAt\": \"2018-03-19T17:43:47.416Z\",\n               \"empresaId\": 1,\n               \"provinciaId\": 18\n           }\n       ],\n       \"success\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>No tienes permisos para acceder a este método.</p>"
          }
        ]
      }
    },
    "filename": "./routes/tienda.js",
    "groupTitle": "Tienda"
  },
  {
    "type": "get",
    "url": "/tienda/:tienda_id",
    "title": "6. Listar los trabajadores de una tienda",
    "version": "0.1.0",
    "name": "GetTrabajadoresDeTienda",
    "group": "Tienda",
    "description": "<p>Devuelve los trabajdores de la tienda correspondiente al id como parametro.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token del usuario</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "trabajadores",
            "description": "<p>Array con todos los trabajadores de la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "trabajadores.id",
            "description": "<p>Id del trabajadores</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trabajadores.nombre",
            "description": "<p>Nombre del trabajadores</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trabajadores.correo",
            "description": "<p>Correo del trabajadores</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trabajadores.telefono",
            "description": "<p>Telefono del trabajadores</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "trabajadores.createAt",
            "description": "<p>Fecha en la que es creada</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "trabajadores.updateAt",
            "description": "<p>Fecha en la que es modificada</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "trabajadores.empresaId",
            "description": "<p>Id de la empresa que es propietario dicho trabajador</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tienda_trabajador",
            "description": "<p>Campos de la tabla que conecta la tienda con el trabajador.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tienda_trabajador.createAt",
            "description": "<p>Fecha en la que es creada la conexión</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tienda_trabajador.updateAt",
            "description": "<p>Fecha en la que es modificada la conexión</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tienda_trabajador.tiendaId",
            "description": "<p>Id de la tienda conectada</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tienda_trabajador.trabajadorId",
            "description": "<p>Id del trabajador conectado</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indica si ha ido bien.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Correcta",
          "content": "{\n    \"trabajadores\": [\n           {\n               \"id\": 3,\n               \"nombre\": \"Arturo\",\n               \"correo\": \"arturo@mueble.com\",\n               \"telefono\": \"987654321\",\n               \"createdAt\": \"2018-03-21T11:13:22.997Z\",\n               \"updatedAt\": \"2018-03-21T11:13:22.997Z\",\n               \"empresaId\": 1,\n               \"tienda_trabajador\": {\n                   \"createdAt\": \"2018-03-22T08:45:16.409Z\",\n                   \"updatedAt\": \"2018-03-22T08:45:16.409Z\",\n                   \"tiendaId\": 14,\n                   \"trabajadorId\": 3\n               }\n           }\n       ],\n       \"success\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>No tienes permisos para acceder a este método.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not-found",
            "description": "<p>El id de la tienda introducido no existe.</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "Unprocessable-Entity",
            "description": "<p>El valor o los valores introducidos no se pueden procesar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not found",
          "content": "{\n       \"success\": false,\n       \"error\": \"No existe una tienda con id: 2\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/tienda.js",
    "groupTitle": "Tienda"
  },
  {
    "type": "post",
    "url": "/tienda",
    "title": "1. Crear una tienda.",
    "version": "0.1.0",
    "name": "PostTiendas",
    "group": "Tienda",
    "description": "<p>Crea una nueva tienda y la almacena.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token del usuario</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Id de la tienda. No se recomienda introducir.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nombre",
            "description": "<p>Nombre de la tienda</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "direccion",
            "description": "<p>Direccion de la tienda</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "correo",
            "description": "<p>Correo de la tienda</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "createAt",
            "description": "<p>Fecha en la que se crea</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "updateAt",
            "description": "<p>Fecha en la que se modifica</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "empresaId",
            "description": "<p>Id de la empresa a la que pertenece.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "responsableId",
            "description": "<p>Id del trabajador responsable de la tienda.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "provinciaId",
            "description": "<p>Id de la provincia</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tienda",
            "description": "<p>Array con la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tienda.id",
            "description": "<p>Id de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tienda.nombre",
            "description": "<p>Nombre de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tienda.direccion",
            "description": "<p>Direccion de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tienda.correo",
            "description": "<p>Correo de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tienda.createAt",
            "description": "<p>Fecha en la que es creada</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tienda.updateAt",
            "description": "<p>Fecha en la que es modificada</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tienda.empresaId",
            "description": "<p>Id de la empresa a la que pertenece</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tienda.provinciaId",
            "description": "<p>Id de la provincia de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indica si ha ido bien.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Correcta",
          "content": "{\n    \"tienda\": {\n           \"id\": 1,\n           \"nombre\": \"Tienda Chiclana\",\n           \"direccion\": \"Calle Badajoz numero 2\",\n           \"correo\": \"chiclana@muebles.com\",\n           \"createdAt\": \"2018-03-19T17:43:47.416Z\",\n           \"updatedAt\": \"2018-03-19T17:43:47.416Z\",\n           \"empresaId\": 1,\n           \"provinciaId\": 18\n       },\n       \"success\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>No tienes permisos para acceder a este método.</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "Unprocessable-Entity",
            "description": "<p>Los valores introducidos violan las restricciones</p>"
          }
        ]
      }
    },
    "filename": "./routes/tienda.js",
    "groupTitle": "Tienda"
  },
  {
    "type": "delete",
    "url": "/tienda",
    "title": "5. Eliminar una tienda.",
    "version": "0.1.0",
    "name": "RemoveTienda",
    "group": "Tienda",
    "description": "<p>Elimina una tienda de la base de datos.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token del usuario</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mensaje",
            "description": "<p>Mensaje que notifica que se ha eliminado</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indica si ha ido bien.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Correcta",
          "content": "{\n       \"mensaje\": \"Tienda eliminada\",\n       \"success\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>No tienes permisos para acceder a este método.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not-found",
            "description": "<p>El id de la tienda introducido no existe.</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "Unprocessable-Entity",
            "description": "<p>El valor o los valores introducidos no se pueden procesar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not found",
          "content": "{\n       \"success\": false,\n       \"error\": \"No existe una tienda con id: 2\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/tienda.js",
    "groupTitle": "Tienda"
  },
  {
    "type": "delete",
    "url": "/tienda",
    "title": "8. Eliminar un trabajador de la tienda.",
    "version": "0.1.0",
    "name": "RemoveTrabajdorDeTienda",
    "group": "Tienda",
    "description": "<p>Elimina un trabajador de la tienda de la base de datos.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token del usuario</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mensaje",
            "description": "<p>Mensaje que notifica que se ha eliminado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indica si ha ido bien.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Correcta",
          "content": "{\n       \"mensaje\": \"Trabajador eliminado de la tienda\",\n       \"success\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>No tienes permisos para acceder a este método.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not-found",
            "description": "<p>El id de la tienda introducido no existe.</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "Unprocessable-Entity",
            "description": "<p>El valor o los valores introducidos no se pueden procesar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not found",
          "content": "{\n       \"success\": false,\n       \"error\": \"No existe una tienda con id: 2\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/tienda.js",
    "groupTitle": "Tienda"
  },
  {
    "type": "put",
    "url": "/tienda",
    "title": "4. Modifica una tienda.",
    "version": "0.1.0",
    "name": "UpdateTienda",
    "group": "Tienda",
    "description": "<p>Modifica la tienda, la almacena y la devuelve</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token del usuario</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Id de la tienda. No se recomienda introducir.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nombre",
            "description": "<p>Nombre de la tienda</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "direccion",
            "description": "<p>Direccion de la tienda</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "correo",
            "description": "<p>Correo de la tienda</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "createAt",
            "description": "<p>Fecha en la que se crea</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "updateAt",
            "description": "<p>Fecha en la que se modifica</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "empresaId",
            "description": "<p>Id de la empresa a la que pertenece.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "responsableId",
            "description": "<p>Id del trabajador responsable de la tienda.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "provinciaId",
            "description": "<p>Id de la provincia</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tienda",
            "description": "<p>Array con la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tienda.id",
            "description": "<p>Id de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tienda.nombre",
            "description": "<p>Nombre de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tienda.direccion",
            "description": "<p>Direccion de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tienda.correo",
            "description": "<p>Correo de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tienda.createAt",
            "description": "<p>Fecha en la que es creada</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tienda.updateAt",
            "description": "<p>Fecha en la que es modificada</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tienda.empresaId",
            "description": "<p>Id de la empresa a la que pertenece</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tienda.provinciaId",
            "description": "<p>Id de la provincia de la tienda</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indica si ha ido bien.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Correcta",
          "content": "{\n    \"tienda\": {\n           \"id\": 1,\n           \"nombre\": \"Tienda Chiclana\",\n           \"direccion\": \"Calle Badajoz numero 2\",\n           \"correo\": \"chiclana@muebles.com\",\n           \"createdAt\": \"2018-03-19T17:43:47.416Z\",\n           \"updatedAt\": \"2018-03-19T17:43:47.416Z\",\n           \"empresaId\": 1,\n           \"provinciaId\": 18\n       },\n       \"success\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>No tienes permisos para acceder a este método.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not-found",
            "description": "<p>El id de la tienda introducido no existe.</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "Unprocessable-Entity",
            "description": "<p>El valor o los valores introducidos no se pueden procesar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not found",
          "content": "{\n       \"success\": false,\n       \"error\": \"No existe una tienda con id: 2\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/tienda.js",
    "groupTitle": "Tienda"
  },
  {
    "type": "get",
    "url": "/trabajador/:trabajador_id",
    "title": "3. Listar un trabajador.",
    "version": "0.1.0",
    "name": "GetTrabajador",
    "group": "Trabajador",
    "description": "<p>Devuelve el trabajador correspondiente al id como parametro.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token del usuario</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "trabajador",
            "description": "<p>Array con el trabajador</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "trabajador.id",
            "description": "<p>Id del trabajador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trabajador.nombre",
            "description": "<p>Nombre del trabajador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trabajador.correo",
            "description": "<p>Correo del trabajador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trabajador.telefono",
            "description": "<p>Telefono del trabajador</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "trabajador.createAt",
            "description": "<p>Fecha en la que es creada</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "trabajador.updateAt",
            "description": "<p>Fecha en la que es modificada</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "trabajador.empresaId",
            "description": "<p>Id de la empresa que es propietario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indica si ha ido bien.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Correcta",
          "content": "{\n    \"trabajador\": {\n               \"id\": 3,\n               \"nombre\": \"Arturo\",\n               \"correo\": \"arturo@mueble.com\",\n               \"telefono\": \"987654321\",\n               \"createdAt\": \"2018-03-21T11:13:22.997Z\",\n               \"updatedAt\": \"2018-03-21T11:13:22.997Z\",\n               \"empresaId\": 1\n       },\n       \"success\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>No tienes permisos para acceder a este método.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not-found",
            "description": "<p>El id del trabajador introducido no existe.</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "Unprocessable-Entity",
            "description": "<p>El valor o los valores introducidos no se pueden procesar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not found",
          "content": "{\n       \"success\": false,\n       \"error\": \"No existe un trabajador con id: 2\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/trabajador.js",
    "groupTitle": "Trabajador"
  },
  {
    "type": "get",
    "url": "/trabajador",
    "title": "2. Listar trabajadores.",
    "version": "0.1.0",
    "name": "GetTrabajadores",
    "group": "Trabajador",
    "description": "<p>Devuelve todas loas trabajadores guardadas en la base de datos.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token del usuario</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "trabajadores",
            "description": "<p>Array con el trabajador</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "trabajadores.id",
            "description": "<p>Id del trabajador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trabajadores.nombre",
            "description": "<p>Nombre del trabajador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trabajadores.correo",
            "description": "<p>Correo del trabajador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trabajadores.telefono",
            "description": "<p>Telefono del trabajador</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "trabajadores.createAt",
            "description": "<p>Fecha en la que es creada</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "trabajadores.updateAt",
            "description": "<p>Fecha en la que es modificada</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "trabajadores.empresaId",
            "description": "<p>Id de la empresa que es propietario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indica si ha ido bien.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Correcta",
          "content": "{\n    \"trabajadores\": [\n        {\n               \"id\": 3,\n               \"nombre\": \"Arturo\",\n               \"correo\": \"arturo@mueble.com\",\n               \"telefono\": \"987654321\",\n               \"createdAt\": \"2018-03-21T11:13:22.997Z\",\n               \"updatedAt\": \"2018-03-21T11:13:22.997Z\",\n               \"empresaId\": 1\n           }\n       ],\n       \"success\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>No tienes permisos para acceder a este método.</p>"
          }
        ]
      }
    },
    "filename": "./routes/trabajador.js",
    "groupTitle": "Trabajador"
  },
  {
    "type": "post",
    "url": "/trabajador",
    "title": "1. Crear un trabajador.",
    "version": "0.1.0",
    "name": "PostTrabajador",
    "group": "Trabajador",
    "description": "<p>Crea un nuevo trabajador y la almacena.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token del usuario</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Id del trabajador. No se recomienda introducir.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del trabajador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "correo",
            "description": "<p>Correo del trabajador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "telefono",
            "description": "<p>Telefono del trabajador</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "createAt",
            "description": "<p>Fecha en la que se crea</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "updateAt",
            "description": "<p>Fecha en la que se modifica</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "empresaId",
            "description": "<p>Id de la empresa de la que es propietario.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "trabajador",
            "description": "<p>Array con el trabajador</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "trabajador.id",
            "description": "<p>Id del trabajador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trabajador.nombre",
            "description": "<p>Nombre del trabajador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trabajador.correo",
            "description": "<p>Correo del trabajador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trabajador.telefono",
            "description": "<p>Telefono del trabajador</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "trabajador.createAt",
            "description": "<p>Fecha en la que es creada</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "trabajador.updateAt",
            "description": "<p>Fecha en la que es modificada</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "trabajador.empresaId",
            "description": "<p>Id de la empresa que es propietario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indica si ha ido bien.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Correcta",
          "content": "{\n    \"trabajador\": {\n               \"id\": 3,\n               \"nombre\": \"Arturo\",\n               \"correo\": \"arturo@mueble.com\",\n               \"telefono\": \"987654321\",\n               \"createdAt\": \"2018-03-21T11:13:22.997Z\",\n               \"updatedAt\": \"2018-03-21T11:13:22.997Z\",\n               \"empresaId\": 1\n       },\n       \"success\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>No tienes permisos para acceder a este método.</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "Unprocessable-Entity",
            "description": "<p>Los valores introducidos violan las restricciones</p>"
          }
        ]
      }
    },
    "filename": "./routes/trabajador.js",
    "groupTitle": "Trabajador"
  },
  {
    "type": "delete",
    "url": "/trabajador",
    "title": "5. Eliminar un trabajador.",
    "version": "0.1.0",
    "name": "RemoveTrabajador",
    "group": "Trabajador",
    "description": "<p>Elimina un trabajador de la base de datos.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token del usuario</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mensaje",
            "description": "<p>Mensaje que notifica que se ha eliminado</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indica si ha ido bien.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Correcta",
          "content": "{\n       \"mensaje\": \"Trabajador eliminado\",\n       \"success\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>No tienes permisos para acceder a este método.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not-found",
            "description": "<p>El id del trabajador introducido no existe.</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "Unprocessable-Entity",
            "description": "<p>El valor o los valores introducidos no se pueden procesar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not found",
          "content": "{\n       \"success\": false,\n       \"error\": \"No existe un trabajador con id: 2\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/trabajador.js",
    "groupTitle": "Trabajador"
  },
  {
    "type": "put",
    "url": "/trabajador",
    "title": "4. Modifica un trabajador.",
    "version": "0.1.0",
    "name": "UpdateTrabajador",
    "group": "Trabajador",
    "description": "<p>Modifica el trabajador, la almacena y la devuelve</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token del usuario</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Id del trabajador. No se recomienda introducir.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nombre",
            "description": "<p>Nombre del trabajador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "correo",
            "description": "<p>Correo del trabajador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "telefono",
            "description": "<p>Telefono del trabajador</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "createAt",
            "description": "<p>Fecha en la que se crea</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "updateAt",
            "description": "<p>Fecha en la que se modifica</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "empresaId",
            "description": "<p>Id de la empresa de la que es propietario.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "trabajador",
            "description": "<p>Array con el trabajador</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "trabajador.id",
            "description": "<p>Id del trabajador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trabajador.nombre",
            "description": "<p>Nombre del trabajador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trabajador.correo",
            "description": "<p>Correo del trabajador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trabajador.telefono",
            "description": "<p>Telefono del trabajador</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "trabajador.createAt",
            "description": "<p>Fecha en la que es creada</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "trabajador.updateAt",
            "description": "<p>Fecha en la que es modificada</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "trabajador.empresaId",
            "description": "<p>Id de la empresa que es propietario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indica si ha ido bien.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta Correcta",
          "content": "{\n    \"trabajador\": {\n               \"id\": 3,\n               \"nombre\": \"Arturo\",\n               \"correo\": \"arturo@mueble.com\",\n               \"telefono\": \"987654321\",\n               \"createdAt\": \"2018-03-21T11:13:22.997Z\",\n               \"updatedAt\": \"2018-03-21T11:13:22.997Z\",\n               \"empresaId\": 1\n       },\n       \"success\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>No tienes permisos para acceder a este método.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "Not-found",
            "description": "<p>El id del trabajador introducido no existe.</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "Unprocessable-Entity",
            "description": "<p>El valor o los valores introducidos no se pueden procesar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not found",
          "content": "{\n       \"success\": false,\n       \"error\": \"No existe un trabajador con id: 2\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/trabajador.js",
    "groupTitle": "Trabajador"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_home_orrequia_ProyectoFinCarrera_Proyecto_ConTask_Backend_ConTask_doc_main_js",
    "groupTitle": "_home_orrequia_ProyectoFinCarrera_Proyecto_ConTask_Backend_ConTask_doc_main_js",
    "name": ""
  }
] });
