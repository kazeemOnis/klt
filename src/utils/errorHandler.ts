export const errorHandler = (response: any) => {
  let message = '';
  const errors = response.graphQLErrors || [response.networkError];
  if (!errors.length) {
    errors.push({
      message: response.message,
    });
  }
  errors.forEach((error: Error) => {
    message =
      (error && error.message) ||
      'We ran into an unidentified error. Please try again';
  });

  return message;
};
