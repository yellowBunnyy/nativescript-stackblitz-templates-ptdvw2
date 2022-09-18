import { Observable } from '@nativescript/core';

function getMessage(counter) {
  if (counter <= 0) {
    return 'you lose...';
  } else {
    return `${counter} to lose`;
  }
}

export function createViewModel() {
  const viewModel = new Observable();
  viewModel.counter = 42;
  viewModel.message = getMessage(viewModel.counter);

  viewModel.onTap = () => {
    viewModel.counter--;
    viewModel.set('message', getMessage(viewModel.counter));

    // log the message to the console
    console.log(getMessage(viewModel.counter));
  };

  return viewModel;
}
