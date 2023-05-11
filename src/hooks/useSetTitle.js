import { useEffect } from "react";

const useSetTitle = (title) => {
  useEffect(() => {
    if (title === "Home") {
      document.title = "Taste Trackers";
    } else {
      document.title = `${title} - Taste Trackers`;
    }
  }, [title]);
};

export default useSetTitle;
