import {SERVICECALL_INFO_LOADED} from '../actions';
const init = [
  {
    id: 'easylearn-pack easylearn-user endpoint /pack GET',
    consumer: 'easylearn-pack',
    provider: 'easylearn-user /pack GET',
    pact: `{
  "provider": {
    "name": "easylearn-user"
  },
  "consumer": {
    "name": "easylearn-pack"
  },
  "interactions": [{
    "description": "get user all pacts' id",
    "request": {
      "method": "GET",
      "path": "/pack",
      "headers": {
        "user-id": "1009840175700426"
      }
    },
    "response": {
      "status": 200,
      "headers": {
        "Content-Type": "application/json"
      },
      "body": ["pack1477403034413", "pack1478666090008", "pack1479221373194"]
    }
  }],
  "metadata": {
    "pact-specification": {
      "version": "2.0.0"
    },
    "pact-jvm": {
      "version": "3.3.2"
    }
  }
}`,
  }
]
const serviceCall = (state = init, action) => {
  switch (action.type) {
    case SERVICECALL_INFO_LOADED:
      return action.data;
    default:
      return state;
  }
};

export default serviceCall;
