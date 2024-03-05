
import './loader.css'

interface Props {
  isLoading: boolean;
}

export const RadioActiveLoader = ({ isLoading }: Props) => {

  if(!isLoading){
    return null;    
  }

  return (
    
    <div className="flex flex-col items-center justify-center min-h-[600px]">
      <div className="loader"/>
    </div>
    
  
  );
};
