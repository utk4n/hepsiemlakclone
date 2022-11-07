import {useEffect, useState} from 'react'

const useChangableTitle = () => {
    const [arrowAnim] = useState(["Arsa", "Dükkan", "Ev"]);
    const [arrowAnimCounter, setArrowAnimCounter] = useState(0);

    useEffect(() => {
        if (arrowAnimCounter < arrowAnim.length) {
          setTimeout(() => {
            setArrowAnimCounter((prev) => prev + 1);
          }, 2000);
        }
        if (arrowAnimCounter === arrowAnim.length - 1) {
          setTimeout(() => {
            setArrowAnimCounter(0);
          }, 2000);
        }


      }, [arrowAnim.length, arrowAnimCounter]);


  return {arrowAnim, arrowAnimCounter}
}

export default useChangableTitle