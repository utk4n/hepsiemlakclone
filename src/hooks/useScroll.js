const useScroll = () => {
  const scrollDown = () => {
    const scrollRef = document.querySelector("#section");
    scrollRef.scrollIntoView();
  };

  return { scrollDown };
};

export default useScroll;
