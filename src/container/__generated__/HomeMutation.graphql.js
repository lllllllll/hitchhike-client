/**
 * @flow
 * @relayHash a5d0df7ebacb025eea37264f1d1d39b6
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type HomeMutationVariables = {|
  input: {
    id: string;
  };
|};

export type HomeMutationResponse = {|
  +removeTrip: ?{|
    +id: ?string;
  |};
|};
*/


/*
mutation HomeMutation(
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
    "name": "HomeMutation",
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
  "name": "HomeMutation",
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
    "name": "HomeMutation",
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
  "text": "mutation HomeMutation(\n  $input: RemoveTripInput!\n) {\n  removeTrip(input: $input) {\n    id\n  }\n}\n"
};

module.exports = batch;
