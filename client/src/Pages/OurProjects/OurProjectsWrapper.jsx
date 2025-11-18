import { useState, useEffect } from "react";
import Loader from "../../Components/Loader/Loader.jsx";
import OurProjects from "./OurProjects.jsx";

export default function OurProjectsWrapper() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : <OurProjects />;
}
