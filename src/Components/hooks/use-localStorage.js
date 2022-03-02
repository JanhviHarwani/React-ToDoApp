import { useEffect, useState } from "react";

function useLocalStorage(key, initial) {
  const [tasksUpdated, setTasksUpdated] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem(key);
      if (saved !== null) {
        return JSON.parse(saved);
      }
    }
    return initial;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(tasksUpdated));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasksUpdated]);
  return [tasksUpdated, setTasksUpdated];
}
export default useLocalStorage