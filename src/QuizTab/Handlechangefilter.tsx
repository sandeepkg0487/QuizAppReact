import { useState, ChangeEvent, ChangeEventHandler } from 'react';

function useEventData(initialState: string): [string, ChangeEventHandler<HTMLSelectElement>] {
  const [eventData, setEventData] = useState<string>(initialState);

  // Function to handle the event and update state
  const handleEvent: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setEventData(event.target.value);
  };

  // Return the state and the event handler
  return [eventData, handleEvent];
}

export default useEventData;
