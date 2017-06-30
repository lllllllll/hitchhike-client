/**
 * @flow
 * @relayHash 2f8d5ace01f22a2c0e5f1c736eb43683
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type HomeRemoveTripMutationVariables = {|
  input: {
    id: string;
  };
|};

export type HomeRemoveTripMutationResponse = {|
  +removeTrip: ?{|
    +id: ?string;
  |};
|};
*/


/*
mutation HomeRemoveTripMutation(
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
    "name": "HomeRemoveTripMutation",
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
  "name": "HomeRemoveTripMutation",
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
    "name": "HomeRemoveTripMutation",
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
  "text": "mutation HomeRemoveTripMutation(\n  $input: RemoveTripInput!\n) {\n  removeTrip(input: $input) {\n    id\n  }\n}\n"
};

module.exports = batch;
