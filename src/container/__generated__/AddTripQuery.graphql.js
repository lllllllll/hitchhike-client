/**
 * @flow
 * @relayHash ea5e7bee86d1e537d5ca79226f394f76
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AddTripQueryResponse = {|
  +viewer: ?{|
    +id: ?string;
    +name: ?string;
    +is_admin: ?boolean;
  |};
|};
*/


/*
query AddTripQuery(
  $access_token: String!
) {
  viewer(access_token: $access_token) {
    id
    name
    is_admin
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "access_token",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddTripQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "access_token",
            "variableName": "access_token",
            "type": "String!"
          }
        ],
        "concreteType": "User",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "is_admin",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQuery"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AddTripQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "access_token",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "AddTripQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "access_token",
            "variableName": "access_token",
            "type": "String!"
          }
        ],
        "concreteType": "User",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "is_admin",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query AddTripQuery(\n  $access_token: String!\n) {\n  viewer(access_token: $access_token) {\n    id\n    name\n    is_admin\n  }\n}\n"
};

module.exports = batch;
