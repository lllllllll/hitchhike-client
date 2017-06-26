/**
 * @flow
 * @relayHash fef4745750fe98c7a8994994ffcfb2db
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AddTripMutationVariables = {|
  input: {
    created_by: string;
    from: string;
    to: string;
    travel_time: number;
  };
|};

export type AddTripMutationResponse = {|
  +addTrip: ?{|
    +id: ?string;
  |};
|};
*/


/*
mutation AddTripMutation(
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
    "name": "AddTripMutation",
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
  "name": "AddTripMutation",
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
    "name": "AddTripMutation",
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
  "text": "mutation AddTripMutation(\n  $input: AddTripInput!\n) {\n  addTrip(input: $input) {\n    id\n  }\n}\n"
};

module.exports = batch;
