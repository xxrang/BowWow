

export function scrollTo(value) {
  const scrollOptions = {
    top: value,
    behavior: "smooth",
  };
  window.scrollTo(scrollOptions);
}
