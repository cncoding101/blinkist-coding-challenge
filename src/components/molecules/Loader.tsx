const Loading = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-t-2 border-solid border-secondary"></div>
    </div>
  );
};

export default Loading;
