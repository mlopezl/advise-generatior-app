import AdviceNumber from "./AdviceNumber";
import AdviceText from "./AdviceText";
import AdvicePatternDivider from "./AdvicePatternDivider";
import AdviceButton from "./AdviceButton";

function AdviceContainer(){
    return(
        <article className="w-9/10 max-w-110 h-65 bg-Blue-900 rounded-xl p-6 flex flex-col align-center text-center gap-6 relative">
            <AdviceNumber number={117}/>
            <AdviceText text={"It is easy to sit up and take notice, what's difficult is getting up and taking action."}/>
            <AdvicePatternDivider/>
            <AdviceButton/>
        </article>
    )
}

export default AdviceContainer;