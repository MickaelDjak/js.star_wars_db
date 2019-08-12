const compose = (...funcs) => comp => {
  return funcs.reduceRight((composite, wrapper) => wrapper(composite), comp);
};

export default compose;
