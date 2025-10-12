export default function FloatingBorderInput({ name = "", type = "text", customParentLabelClass = "", textArea = false, disabled = false, textAreaRows = 10, textAreaCols = 50 }) {

    return (
        <div className="input-border grid rounded-md items-center justify-items-center mb-[1.5rem] relative">
            <div className={`parent-label-float grid ${customParentLabelClass} items-center justify-items-center relative`}>
                <div>
                    <label className="child-label-float">{name}</label>
                </div>
            </div>
            <div className={`parent-input-float ${textArea ? "parent-textarea-float" : ""}`}>
                {
                    textArea ?
                        <textarea disabled={disabled} id={`textarea_${name.toLowerCase()}`} className={`child-textarea-float rounded-md`} rows={textAreaRows} cols={textAreaCols}></textarea>
                        :
                        <input disabled={disabled} id={`input_${name.toLowerCase()}`} type={type} className={`child-input-float rounded-md`} />
                }
            </div>
        </div>
    );
}