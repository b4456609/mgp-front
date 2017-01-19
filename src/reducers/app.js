const init = {
  sidebar: {
    showEndpoint: false,
    showServiceCall: true,
    showService: false,
    serviceId: 'easylearn-user',
    endpointId: 'easylearn-note endpoint / POST',
  }
}
const app = (state = init, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default app;
