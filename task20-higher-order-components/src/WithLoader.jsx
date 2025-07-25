import { useEffect, useState } from "react";

const WithLoader = (WrappedComponent, data) => {
  return function EnhancedLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
      setTimeout(() => {
        setItems(data);
        setIsLoading(false);
      }, 2000);
    }, []);
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent item={items} />;
  };
};

export default WithLoader;
