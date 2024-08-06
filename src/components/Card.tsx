

// export function Card (imageUrl, content, onClick, className){
//   return (
//     <div className={`slot ${className}`} onClick={onClick}>
//       {imageUrl ? (
//         <img src={imageUrl} alt="Card content" className='w-10'/>
//       ) : (
//         <div>{content}</div>
//       )}
//     </div>
//   );
// };

interface CardProps {
  imageUrl: string;
  content: string;
  onClick: () => void;
  className: string;
}

const Card = (props: CardProps) =>{
  return (
    <div className={`slot ${props.className}`} onClick={props.onClick}>
      {props.imageUrl ? (
        <img src={props.imageUrl} alt="Card content" className='w-10'/>
      ) : (
        <div>{props.content}</div>
      )}
    </div>
  );
};

export default Card;