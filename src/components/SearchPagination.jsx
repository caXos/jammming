import CircleButton from "./CircleButton";

export default function SearchPagination()  {
    return (
        <div styleName="w-full flex flex-row justify evenly">
            <CircleButton icon="left"/>
            <div className="text-center">
                99 of 9999
                </div>            
            <CircleButton icon="right"/>            
        </div>
    );
}