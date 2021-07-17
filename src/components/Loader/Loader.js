import Loader from "react-loader-spinner";

const reactLoaderSpinner = () => (
    <div className="Loader">
      <Loader 
      type="Puff" 
      color="#00bfff" 
      height={100} 
      width={100}
      timeout={3000} />
    </div>
  );

export default reactLoaderSpinner;