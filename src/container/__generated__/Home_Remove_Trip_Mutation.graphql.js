/**
 * @flow
 * @relayHash 28a9772cee86c9bdaef61571ed331318
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type Home_Remove_Trip_MutationVariables = {|
  input: {
    id: string;
  };
|};

export type Home_Remove_Trip_MutationResponse = {|
  +removeTrip: ?{|
    +id: ?string;
  |};
|};
*/


/*
mutation Home_Remove_Trip_Mutation(
  $input: RemoveTripInput!
) {
  removeTrip(input: $input) {
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
        "type": "RemoveTripInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "Home_Remove_Trip_Mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "RemoveTripInput!"
          }
        ],
        "concreteType": "Trip",
        "name": "removeTrip",
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
  "name": "Home_Remove_Trip_Mutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "RemoveTripInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "Home_Remove_Trip_Mutation",
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
            "type": "RemoveTripInput!"
          }
        ],
        "concreteType": "Trip",
        "name": "removeTrip",
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
  "text": "mutation Home_Remove_Trip_Mutation(\n  $input: RemoveTripInput!\n) {\n  removeTrip(input: $input) {\n    id\n  }\n}\n"
};

module.exports = batch;
