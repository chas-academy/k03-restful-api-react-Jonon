import {useState, useEffect} from 'react'

const useWindowDimensions = (props) => {

    const [dimensions, setDimensions] = useState({
        width: window.innerWidth
      });

    const handleResize = () => {
        setDimensions({
          width: window.innerWidth
        });
      };

      useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    return dimensions
}

export default useWindowDimensions