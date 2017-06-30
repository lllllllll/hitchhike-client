/**
 * @flow
 * @relayHash b9d2fdd14b52c3718415ef4744c5f30f
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type Home_Add_Trip_MutationVariables = {|
  input: {
    created_by: string;
    from: string;
    to: string;
    travel_time: number;
  };
|};

export type Home_Add_Trip_MutationResponse = {|
  +addTrip: ?{|
    +id: ?string;
  |};
|};
*/


/*
mutation Home_Add_Trip_Mutation(
  $input: AddTripInput!
) {
  addTrip(input: $input) {
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "AddTripInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "Home_Add_Trip_Mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "AddTripInput!"
          }
        ],
        "concreteType": "Trip",
        "name": "addTrip",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "Home_Add_Trip_Mutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "AddTripInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "Home_Add_Trip_Mutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "AddTripInput!"
          }
        ],
        "concreteType": "Trip",
        "name": "addTrip",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation Home_Add_Trip_Mutation(\n  $input: AddTripInput!\n) {\n  addTrip(input: $input) {\n    id\n  }\n}\n"
};

module.exports = batch;
