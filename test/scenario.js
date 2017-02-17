module.exports = {
  "scenarios": [
    {
      "id": "58a67c9e149b3f0001320182",
      "name": "add pack",
      "content": "  @easylearn_pack_endpoint_/_POST\n  Scenario: add pack\n    Given I am a  logged-in  user\n    When I add pack with following content\n      | title | description      | content |\n      | test  | test descritpion | afwfawe |\n\n    Then the pack create",
      "featureId": "58a67c9e149b3f0001320181"
    },
    {
      "id": "58a67c9e149b3f0001320184",
      "name": "add version",
      "content": "  @easylearn_pack_endpoint_/{packId}/version_POST\n  @easylearn_pack_endpoint_/_GET\n  Scenario: add version\n    Given I am viewing a pack\n    When I edit a version with following content\n       \"\"\"The government has already recaptured more than 70% of the rebel-controlled areas in the east, the UK-based Syrian Observatory for Human Rights says.\n        More than 100,000 people are believed to be trapped in districts still in rebel hands.\n        Food supplies are exhausted and there are no functioning hospitals.\n        \"\"\"\n\n    Then The version is created",
      "featureId": "58a67c9e149b3f0001320183"
    },
    {
      "id": "58a67c9e149b3f0001320186",
      "name": "add version",
      "content": "  @easylearn_user_endpoint_/folder_GET\n  @easylearn_user_endpoint_/folder_POST\n  Scenario: add version\n    Given I am a  logged-in  user\n    When I add a folder with following name\n      | name        |\n      | My favorite |\n      | Dog         |\n      | ToDo        |\n      | 600         |\n    Then The folder is created",
      "featureId": "58a67c9e149b3f0001320185"
    },
    {
      "id": "58a67c9e149b3f0001320188",
      "name": "get pack",
      "content": "  Scenario: get pack\n    Given I am a  logged-in  user\n    When I get my packs\n    Then the pack return",
      "featureId": "58a67c9e149b3f0001320187"
    }
  ],
  "features": [
    {
      "id": "58a67c9e149b3f0001320181",
      "name": "add pack",
      "content": "Feature: add pack\n  @easylearn_pack_endpoint_/_POST\n  Scenario: add pack\n    Given I am a  logged-in  user\n    When I add pack with following content\n      | title | description      | content |\n      | test  | test descritpion | afwfawe |\n\n    Then the pack create\n"
    },
    {
      "id": "58a67c9e149b3f0001320183",
      "name": "add version",
      "content": "Feature: add version\n\n  @easylearn_pack_endpoint_/{packId}/version_POST\n  @easylearn_pack_endpoint_/_GET\n  Scenario: add version\n    Given I am viewing a pack\n    When I edit a version with following content\n       \"\"\"The government has already recaptured more than 70% of the rebel-controlled areas in the east, the UK-based Syrian Observatory for Human Rights says.\n        More than 100,000 people are believed to be trapped in districts still in rebel hands.\n        Food supplies are exhausted and there are no functioning hospitals.\n        \"\"\"\n\n    Then The version is created\n"
    },
    {
      "id": "58a67c9e149b3f0001320185",
      "name": "add fodler",
      "content": "Feature: add fodler\n  @easylearn_user_endpoint_/folder_GET\n  @easylearn_user_endpoint_/folder_POST\n  Scenario: add version\n    Given I am a  logged-in  user\n    When I add a folder with following name\n      | name        |\n      | My favorite |\n      | Dog         |\n      | ToDo        |\n      | 600         |\n    Then The folder is created\n"
    },
    {
      "id": "58a67c9e149b3f0001320187",
      "name": "get pack",
      "content": "Feature: get pack\n\n  Scenario: get pack\n    Given I am a  logged-in  user\n    When I get my packs\n    Then the pack return"
    }
  ]
};
