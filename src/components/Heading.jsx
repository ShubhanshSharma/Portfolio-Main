


export default function HeadingBig(props){

    return(
        <div className=" text-white mix-blend-difference font-bold" style={{fontSize:`${props.size}px`, width:`${props.width}`}}>{props.content}</div>
    )
}