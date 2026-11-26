import AdviceNumber from "./AdviceNumber";
import AdviceText from "./AdviceText";
import AdvicePatternDivider from "./AdvicePatternDivider";
import AdviceButton from "./AdviceButton";

function AdviceContainer(){
    return(
        <article>
            <AdviceNumber number={117}/>
            <AdviceText text={"It is easy to sit up and take notice, what's difficult is getting up and taking action."}/>
            <AdvicePatternDivider/>
            <AdviceButton/>
        </article>
    )
}

export default AdviceContainer;